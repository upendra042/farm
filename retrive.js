// Import the Firebase Admin SDK
const admin = require('firebase-admin');

// Path to your service account key file
const serviceAccount = require('C:/Desktop/sihcont/sih/serviceaccount.json');

// Initialize the Firebase app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Get a reference to the Firestore database
const db = admin.firestore();

// Retrieve data from Firestore
const cropsCollection = db.collection('crops'); // Reference to 'crops' collection

cropsCollection.get()
  .then((snapshot) => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    // Iterate through the documents
    snapshot.forEach((doc) => {
      console.log(`ID: ${doc.id}, Data:`, doc.data());
    });
  })
  .catch((error) => {
    console.error('Error retrieving crop details:', error);
  });
