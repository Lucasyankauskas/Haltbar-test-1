import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

import indexRoutes from './routes/index.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyC7BqdrP_uBr3_7BtnltLRaisks1keOSzA",
authDomain: "haltbar-test-1.firebaseapp.com",
projectId: "haltbar-test-1",
storageBucket: "haltbar-test-1.appspot.com",
messagingSenderId: "764989890137",
appId: "1:764989890137:web:86f20996e2d89cfd565b48",
measurementId: "G-MJV3FZ5896"
};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(indexRoutes);

app.use(express.static(join(__dirname, 'public')));

app.listen(3000);
console.log('Server listening on port 3000');