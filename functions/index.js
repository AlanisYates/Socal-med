const functions = require('firebase-functions');
const admin = require('firebase-admin');

var serviceAccount = require("./apikey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-tut-10215.firebaseio.com"
});


const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors({origin: true}))

// Routes
app.get('/hello-world', (req, res) => {
    return res.status(200).send("Hello world!");
})

// Create
// post

// Read
// get

// Update
// put

// Delete
// delete

// Export the api to Firebase cloud functions.
exports.app = functions.https.onRequest(app);