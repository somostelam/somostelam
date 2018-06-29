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

$("#google_logout").on('click',  function(event) {
	event.preventDefault();
	firebase.auth().signOut().then(function() {
		console.log("after logout");
		window.location.reload();
	}).catch(function(error) {
    // An error happened.
	});
});

