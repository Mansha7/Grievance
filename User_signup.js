// setting up firebase
const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyDLVEq0APpy7txJAsOJWhZ64QCDW9Szwqs",
  authDomain: "authentication-form-2a126.firebaseapp.com",
  projectId: "authentication-form-2a126",
  storageBucket: "authentication-form-2a126.appspot.com",
  messagingSenderId: "391083707528",
  appId: "1:391083707528:web:27b8734698515916e2a33d",
  measurementId: "G-YKD32PGNRK" 
});
 const db = firebaseApp.firestore();
 const auth = firebaseApp.auth();

// sign up function
const signUp=()=>{
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email,password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
      // Signed in 
      // window.location='User_Home.html';
      document.write("You are Signed Up")
      console.log(result)
      // var user = userCredential.user;
      // ...
  })
  .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // ..
  });

}

// sign in function

const signIn=()=>{
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
   firebase.auth().signInWithEmailAndPassword(email, password)
.then((result) => {
  // Signed in
      window.location='User_Home.html';
      // document.write("You are Signed In")
      console.log(result)
  // ...
})
.catch((error) => {
  console.log(error.code);
      console.log(error.message);
});



}