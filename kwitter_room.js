const firebaseConfig = {
      apiKey: "AIzaSyCpkvjqEVwVc0HLMbU8Ba50DJtfD7PUPXk",
      authDomain: "trusty-fuze-303811.firebaseapp.com",
      databaseURL: "https://trusty-fuze-303811-default-rtdb.firebaseio.com",
      projectId: "trusty-fuze-303811",
      storageBucket: "trusty-fuze-303811.appspot.com",
      messagingSenderId: "192378566009",
      appId: "1:192378566009:web:8ba45ebe7c215fbb782ba8",
      measurementId: "G-ECJZSJGN57"
    };
  
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name- "+ Room_names);
row="<div class='room_name'id="+ Room_names +"onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();


function addRoom(){
room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update(
            {purpose:"adding room name"}
      );
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_room.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="index.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}