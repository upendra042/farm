// Function to fetch crop details from Firebase
function fetchCropDetails() {
    const cropRef = firebase.database().ref('crops'); // Your database node

    cropRef.on('value', (snapshot) => {
        const crops = snapshot.val();
        displayCropDetails(crops);
    });
}

// Function to display crop details
function displayCropDetails(crops) {
    const cropDetailsDiv = document.getElementById('cropDetails');
    cropDetailsDiv.innerHTML = '';

    if (crops && Object.keys(crops).length > 0) {
        for (const id in crops) {
            const crop = crops[id];
            cropDetailsDiv.innerHTML += 
                `<div class="alert alert-info" role="alert">
                    Crop Type: ${crop.crop_name} - Quantity: ${crop.quantity} - Status: ${crop.status || 'Available'}
                </div>`;
        }
    } else {
        cropDetailsDiv.innerHTML = 
            `<div class="alert alert-warning" role="alert">
                No crop details found.
            </div>`;
    }
}
