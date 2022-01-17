import firebase from 'firebase'
import 'firebase/storage'
require('dotenv').config()


export const api_url = process.env.REACT_APP_BACKEND_URL


export const app = firebase.initializeApp({
    "projectId": process.env.REACT_APP_PROJECT_ID,
    "appId": process.env.REACT_APP_APP_ID,
    "storageBucket": process.env.REACT_APP_STORAGE_BUCKET,
    "locationId": process.env.REACT_APP_LOCATION_ID,
    "apiKey": process.env.REACT_APP_API_KEY,
    "authDomain": process.env.REACT_APP_AUTH_DOMAIN,
    "messagingSenderId":process.env.REACT_APP_MESSAGING_SENDER_ID 
  });
