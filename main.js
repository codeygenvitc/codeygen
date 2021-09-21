var config = {
    apiKey: "AIzaSyAjZdd8gTj-5K4GdxBLK-So3PH_Rd3lK4k",
    authDomain: "sample1-bb533.firebaseapp.com",
    databaseURL: "https://sample1-bb533-default-rtdb.firebaseio.com",
    projectId: "sample1-bb533",
    storageBucket: "sample1-bb533.appspot.com",
    messagingSenderId: "684683211900",
    appId: "1:684683211900:web:d83cbdd33a1c84850745f9",
    measurementId: "G-QJ3C9ZG703"
};

firebase.initializeApp(config);

// Reference Messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form Submit
document.getElementById("contactForm").addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('name');
    var com = getInputVal('company');
    var em = getInputVal('email');
    var ph = getInputVal('phone');
    var msg = getInputVal('message');

    //Save Message
    saveMessage(name, com, em, ph, msg);

    //Show Alert	
    setTimeout(function () { document.querySelector('.alert').style.display = 'block' }, 3000);

    //Clear form
    document.getElementById("contactForm").reset();
}

//Function to get Form Values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save Message to FireBase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}