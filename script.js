git // Global variables
let map;
let markers = [];
let pois = [];

// Initialize Google Map
function initMap() {
    // Center map on Akko (Acre)
    const akkoCenter = { lat: 32.9234, lng: 35.0708 };
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: akkoCenter,
        mapTypeId: 'terrain',
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            }
        ],
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER,
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM,
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM,
        },
        fullscreenControl: true,
    });

    // Load POI data and create markers
    loadPOIs();
}

// Load POI data from JSON file
async function loadPOIs() {
    try {
        const response = await fetch('data/pois.json');
        pois = await response.json();
        createMarkers();
    } catch (error) {
        console.error('Error loading POI data:', error);
        // Fallback: use inline data if file can't be loaded
        pois = [
            {
                "name": "עיר עתיקה של עכו",
                "lat": 32.92074,
                "lon": 35.06688,
                "text": "מאוכלסת ברוברטים צלבניים, חומות, סמטאות וחנויות היסטוריות.",
                "image": "turn0image0",
                "address": "העיר העתיקה, עכו"
            }
        ];
        createMarkers();
    }
}

// Create markers for all POIs
function createMarkers() {
    pois.forEach((poi, index) => {
        const marker = new google.maps.Marker({
            position: { lat: poi.lat, lng: poi.lon },
            map: map,
            title: poi.name,
            icon: {
                url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <circle cx="15" cy="15" r="12" fill="#007bff" stroke="white" stroke-width="3"/>
                        <circle cx="15" cy="15" r="6" fill="white"/>
                        <text x="15" y="19" text-anchor="middle" fill="#007bff" font-size="10" font-weight="bold">${index + 1}</text>
                    </svg>
                `),
                scaledSize: new google.maps.Size(30, 30),
                anchor: new google.maps.Point(15, 15)
            },
            animation: google.maps.Animation.DROP
        });

        // Add click listener to show modal
        marker.addListener('click', () => {
            showPOIModal(poi);
        });

        markers.push(marker);
    });
}

// Show POI information in modal
function showPOIModal(poi) {
    // Set modal title
    document.getElementById('poiModalLabel').textContent = poi.name;
    
    // Set description
    document.getElementById('poiDescription').textContent = poi.text;
    
    // Set address
    document.getElementById('poiAddress').textContent = poi.address || 'עכו, ישראל';
    
    // Handle image
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear previous content
    
    if (poi.image && poi.image !== null) {
        // Display actual image
        const imgElement = document.createElement('img');
        imgElement.className = 'poi-image';
        imgElement.src = `images/${poi.image}.jpeg`;
        imgElement.alt = poi.name;
        imgElement.onerror = function() {
            // Fallback if image fails to load
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'no-image-placeholder';
            placeholder.innerHTML = `
                <div class="text-center">
                    <i class="fas fa-image fa-2x mb-2"></i><br>
                    תמונה לא נמצאה<br>
                    <small class="text-muted">(${poi.image}.jpeg)</small>
                </div>
            `;
            imageContainer.appendChild(placeholder);
        };
        imageContainer.appendChild(imgElement);
    } else {
        // Show placeholder for POIs without images
        const placeholder = document.createElement('div');
        placeholder.className = 'no-image-placeholder';
        placeholder.innerHTML = `
            <div class="text-center">
                <i class="fas fa-map-marker-alt fa-2x mb-2"></i><br>
                אין תמונה זמינה
            </div>
        `;
        imageContainer.appendChild(placeholder);
    }
    
    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('poiModal'));
    modal.show();
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add Font Awesome for icons
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    document.head.appendChild(fontAwesome);
});

// Error handling for Google Maps
window.gm_authFailure = function() {
    alert('שגיאה באימות Google Maps API. אנא בדוק את המפתח.');
};