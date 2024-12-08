import { initializeApp, FirebaseApp } from "firebase/app";

type initializeAppService = { getFirebaseApp: () => FirebaseApp };

function initializeFireBase(): initializeAppService {
    const app = initializeApp({
        apiKey: "AIzaSyD5VEWqpTapaA9c1hP-geqnpNkIPFx_rIg",
        authDomain: "vitamine-online.firebaseapp.com",
        projectId: "vitamine-online",
        storageBucket: "vitamine-online.firebasestorage.app",
        messagingSenderId: "1021910026037",
        appId: "1:1021910026037:web:760cfce2c78323aa282e7c",
    });

    function getFirebaseApp(): FirebaseApp {
        return app;
    }

    return { getFirebaseApp };
}

const firebaseService: initializeAppService = initializeFireBase();
export { firebaseService };
