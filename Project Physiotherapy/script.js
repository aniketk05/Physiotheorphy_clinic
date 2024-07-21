

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";


var firebaseConfig = {
    apiKey: "AIzaSyAn2H9PPU_DO5Jd-B-L_hRckLrPslsdOmA",

    authDomain: "card-crud-2677c.firebaseapp.com",

    databaseURL: "https://card-crud-2677c-default-rtdb.firebaseio.com",

    projectId: "card-crud-2677c",

    storageBucket: "card-crud-2677c.appspot.com",

    messagingSenderId: "1043041639504",

    appId: "1:1043041639504:web:ef20daa106667faa054555",

    measurementId: "G-FRFE668FCV"

};
var app = initializeApp(firebaseConfig);
var db = getDatabase(app);


const btn = document.getElementById('submit');

btn.addEventListener('click', function (event) {
    event.preventDefault();
 
    const inputIds = ['FullName', 'MobileNumber', 'Email', 'Message'];
    let isValid = true;
    let showAlert = true; 

    // inputIds.forEach(id => {
    //     const input = document.getElementById(id);
    //     const value = input.value.trim();
        
    //     switch(id) {
    //         case 'email':
    //             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //             if (!emailRegex.test(value)) {
    //                 if (showAlert) {
    //                     alert("Please enter a valid email address");
    //                     showAlert = false;
    //                 }
    //                 isValid = false;
    //             }
    //             break;
    //         case 'mobileNumber':
    //             const numberRegex = /^\d{10}$/;
    //             if (!numberRegex.test(value)) {
    //                 if (showAlert) {
    //                     alert("Please enter a 10-digit mobile number");
    //                     showAlert = false;
    //                 }
    //                 isValid = false;
    //             }
    //             break;
    //         default:
    //             if(value === "") {
    //                 if (showAlert) {
    //                     alert("Please insert value in " + id);
    //                     showAlert = false;
    //                 }
    //                 isValid = false;
    //             }
    //     }
    // });

    // if (isValid) { 
        set(ref(db, 'user/' + document.getElementById("MobileNumber").value), {
        username: document.getElementById("FullName").value,
        Email: document.getElementById("Email").value,
        MobileNumber: document.getElementById("MobileNumber").value,
        Message: document.getElementById("Message").value
    })
        alert("Thanks for your review 😃");
        
        inputIds.forEach(id => {
            document.getElementById(id).value = '';
        });
    }
// }
);