const firebaseConfig = {
  apiKey: "AIzaSyCqZEqorxifElrv-rQ0oHGMOO6Mry2zx6U",
  authDomain: "event-manager-3ec1c.firebaseapp.com",
  databaseURL: "https://event-manager-3ec1c-default-rtdb.firebaseio.com",
  projectId: "event-manager-3ec1c",
  storageBucket: "event-manager-3ec1c.appspot.com",
  messagingSenderId: "741804287188",
  appId: "1:741804287188:web:13b704a18fca1964d68741",
  measurementId: "G-WZKGQPXE23"
};


firebase.initializeApp(firebaseConfig);

var SignupDB = firebase.database().ref('Event-Manager');


document.getElementById('form').addEventListener('submit', submitForm);

function submitForm(e){
   e.preventDefault();

   var name = getElementVal('first_name');
   var emailid = getElementVal('email');
   var password = getElementVal('password');

  saveMessages(name , emailid , password);
   
}

const saveMessages = (name , emailid , password) =>{

   var newSignup = SignupDB.push();

    newSignup.set({
      name : name,
      emailid : emailid,
      password : password,
    })

};


const getElementVal = (id) =>{
  return document.getElementById(id).value
}