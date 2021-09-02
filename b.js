const firebaseConfig = {
    apiKey: "AIzaSyC9ksO4BXZ4knzAV09sOB3jG3ftsaM3Gww",
    authDomain: "kwitter-67d27.firebaseapp.com",
    databaseURL: "https://kwitter-67d27-default-rtdb.firebaseio.com",
    projectId: "kwitter-67d27",
    storageBucket: "kwitter-67d27.appspot.com",
    messagingSenderId: "837381726686",
    appId: "1:837381726686:web:6035405a07034b58b3bd4f",
    measurementId: "G-KL2LCZFT8J"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);




user_name = localStorage.getItem("user_name");
document.getElementById("heading").innerHTML = "Welcome " + user_name + "!";

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }