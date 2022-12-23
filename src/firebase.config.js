import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyBSGAUWzJzCjXsQWytt8InNoV-8Przfziw",
	authDomain: "test-371323.firebaseapp.com",
	projectId: "test-371323",
	storageBucket: "test-371323.appspot.com",
	messagingSenderId: "837906810736",
	appId: "1:837906810736:web:a7cf294a6a571f3435f1b5",
	measurementId: "G-6QM46W244X"
	}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
