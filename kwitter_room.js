
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAaW18LTn3RB-z6FwV5_7_taZLKLKhCNTI",
      authDomain: "kwitter-b3561.firebaseapp.com",
      databaseURL: "https://kwitter-b3561-default-rtdb.firebaseio.com",
      projectId: "kwitter-b3561",
      storageBucket: "kwitter-b3561.appspot.com",
      messagingSenderId: "124777583356",
      appId: "1:124777583356:web:3398b64d2d94376491fd79",
      measurementId: "G-47N8ES8EP6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
          roome_name = document.getElementById("room_name").value;
          firebase.databse().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name" , room_name);

          window.location = "kwitter_page.html";
    }
function getData() { firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + Roome_names);
     row = "<div class-'rrom_name' id="+Room_names+" onclick='redirecToRoomName(this.id) >#" + Roome_names +"</div><hr>";
     document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();

function redrirecttoRoomNames(names)
{
      console.log(names);
      localStorage.setItem("room_name" , names);
      window.location = "kwitter_page.html";
}