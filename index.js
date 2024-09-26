// Import the Firebase Admin SDK
const admin = require('firebase-admin');

// Path to your service account key file
const serviceAccount = require('C:/Desktop/sihcont/sih/serviceaccount.json');

// Initialize the Firebase app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // No need for databaseURL with Firestore, but required for Realtime Database
});

// Get a reference to the Firestore database
const db = admin.firestore();

// Sample data to be stored
const cropData = {
  farmer_name: "John Doe",
  contact_info: "+1234567890",
  location: "Farmville",
  crop_name: "Wheat",
  crop_variety: "Hard Red Winter",
  quantity: 100000,
  harvest_date: "2024-10-01",
  price_per_unit: 200.50,
  min_order: 50,
  negotiable: "yes",
  organic: "no",
  certification_details: "N/A",
  delivery_options: "Local delivery only",
  special_notes: "Requires immediate shipping"
};

// Store data in Firestore
const cropsCollection = db.collection('crops'); // Reference to 'crops' collection
cropsCollection.add(cropData)
  .then((docRef) => {
    console.log('Crop details submitted successfully with ID:', docRef.id);
  })
  .catch((error) => {
    console.error('Error submitting crop details:', error);
  });
