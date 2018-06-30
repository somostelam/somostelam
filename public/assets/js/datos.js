  var config = {
    apiKey: "AIzaSyCyqG7Y0uK9et-yIp2XA4k-LgkwmyqEvTs",
    authDomain: "somostelam2018.firebaseapp.com",
    databaseURL: "https://somostelam2018.firebaseio.com",
    projectId: "somostelam2018",
    storageBucket: "somostelam2018.appspot.com",
    messagingSenderId: "319669964621"
  };
var dbf;
firebase.initializeApp(config);
var db = firebase.database();
dbf = firebase.firestore();
// Get a non-default Storage bucket
firebase.app().storage("gs://ilocatior");
var storage = firebase.storage();
var storageRef = storage.ref();
var imagesRef = storageRef.child('images');


var connectedRef = db.ref(".info/connected");

(function() {
	'use strict';
	var app = {
	
	};


    $(document).on('click', '.loguear_usuario', function(e){ 
    	e.preventDefault();
    	var email = $("#email").val();
    	var password = $("#password").val();
    	app.firebase_login(email,password);
    });

   /* $(document).on('click', '.file-submit', function(e){ 
    	e.preventDefault();
    	app.handleFileUploadSubmit();
    });

   $(document).on('change', '.file-select', function(e){ 
    	e.preventDefault();
    	app.handleFileUploadChange();
    });

var selectedFile;
app.handleFileUploadChange = (e) => {
  selectedFile = e.target.files[0];
}

app.handleFileUploadSubmit = (e)  => {
  const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile); //create a child directory called images, and place the file inside this directory
  uploadTask.on('state_changed', (snapshot) => {
  // Observe state change events such as progress, pause, and resume
  }, (error) => {
    // Handle unsuccessful uploads
    console.log(error);
  }, () => {
     // Do something once upload is complete
     console.log('success');
  });
}
*/
firebase.auth().onAuthStateChanged(function(user) {
	app.isLoading();
	if (!user) {
		window.location.href = "/login.html";
	} 
}); 

app.isLoading = () => {
	$("#loading").show();
}

app.stopLoad = () => {
	$("#loading").hide();
}

app.firebase_login = (email,password) => {
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  console.log(error);
	   Materialize.toast('Estás poniendo mal el usuario y/o la contraseña', 4000);
	});
}

	
})(); //app

document.querySelector('.file-select').addEventListener('change', handleFileUploadChange);
document.querySelector('.file-submit').addEventListener('click', handleFileUploadSubmit);
document.querySelector('#nombre').addEventListener('keyup', subirdata);
document.querySelector('#historia').addEventListener('keyup', subirdata);
let selectedFile;
function handleFileUploadChange(e) {
  selectedFile = e.target.files[0];
}

function handleFileUploadSubmit(e) {
  	const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile).then((snapshot) =>{
    	var image_url = snapshot.downloadURL;
    	var userId = getUrlParameter("id");
  		if (userId != "" && image_url != ""){
			var postData = {
	    	imagen: image_url,
	  		};
	  		firebase.database().ref('users/' + userId).update(postData);
  		}
	}); //create a child directory called images, and place the file inside this directory
	  /*uploadTask.on('state_changed', (snapshot) => {
	  // Observe state change events such as progress, pause, and resume
	  }, (error) => {
	    // Handle unsuccessful uploads
	    console.log(error);
	  }, () => {
	     // Do something once upload is complete
	     console.log('success');

	  });*/
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function subirdata(){
	var userId = getUrlParameter("id");
	var postData = {
    	nombre: $("#nombre").val(),
	    historia: $("#historia").val(),
  	};

	if (userId != ""){
  		firebase.database().ref('users/' + userId).update(postData);
  	}
}

$("#google_logout").on('click',  function(event) {
	event.preventDefault();
	firebase.auth().signOut().then(function() {
		console.log("after logout");
		window.location.reload();
	}).catch(function(error) {
    // An error happened.
	});
});

