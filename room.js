var userName = localStorage.getItem('User Name');
document.getElementById('name').innerHTML = userName

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBG-Earf1HcsW3HpL5rt4MDYwEPa5oJSDM",
    authDomain: "chat-bird-68cf0.firebaseapp.com",
    databaseURL: "https://chat-bird-68cf0-default-rtdb.firebaseio.com",
    projectId: "chat-bird-68cf0",
    storageBucket: "chat-bird-68cf0.appspot.com",
    messagingSenderId: "829863096195",
    appId: "1:829863096195:web:187eca30463dafe13a10b6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function addRoom() {
    roomname = document.getElementById("roomName").value;
    firebase.database().ref("/").child(roomname).update({
        purpose: "Room Name"
    });
    row = "<div style='cursor:pointer;' class='room_name' id='" + Room_names + "' onclick='redirect_to_roomname(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById('output').innerHTML += row;
}
function redirect_to_roomname(name) {
    console.log(name);
    localStorage.setItem("Room_name", name);
    window.location = "page.htm";
}



