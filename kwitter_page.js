var firebaseConfig = {
      apiKey: "AIzaSyBvuA399uARrmtXX794hnpGzSr-SxWE7y4",
      authDomain: "vidhantterr.firebaseapp.com",
      databaseURL: "https://vidhantterr-default-rtdb.firebaseio.com",
      projectId: "vidhantterr",
      storageBucket: "vidhantterr.appspot.com",
      messagingSenderId: "137631900919",
      appId: "1:137631900919:web:f8cd5e62a7c5374b885ff2"
    };
    firebase.initializeApp(firebaseConfig);
var user_name_storage = localStorage.getItem("user_name");
var room_no_storage = localStorage.getItem("room_no");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 function send(){
       var message = document.getElementById("msg").value;
       firebase.database().ref(room_no_storage).push({
            name : user_name_storage,
             message : message,
              like:0
       });
       document.getElementById("msg").value = "";
 }

 function logout(){
      localStorage.removeItem("room_no");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}