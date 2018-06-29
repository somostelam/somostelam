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

    $(document).on('click', '#mostrar_lectora', function(e){ 
    	e.preventDefault();
    	app.getUserLectora();
    });

    $(document).on('click', '#mostrar_camara', function(e){ 
    	e.preventDefault();
    	app.getUserCamara();
    });

    $(document).on('click', '#close_stream', function(e){ 
    	e.preventDefault();
    	app.getUserHome();
    });


firebase.auth().onAuthStateChanged(function(user) {
	app.isLoading();
	if (user) {
		window.location.redirect("/datos.html");
	} else {
		window.location.redirect("/login.html");
	}
}); 

app.isLoading = () => {
	$("#loading").show();
}

app.stopLoad = () => {
	$("#loading").hide();
}

app.getUserHome = () => {
	console.log("getUserHome");
	mostrar_home();
}

app.getUserLectora = () => {

}

app.getUserCamara = () => {

}

app.show_user = (user) => {
	console.log("show_user");
	window.localStorage.setItem("plomeria_laser_userId",user.uid);
	$("#user_card").show();
	//$("#user_displayname").text(user.email);
	$("#user_email").text(user.email);
	$("#user_photo").attr("src",'assets/images/icons/icon-192x192.png');

}

app.show_login_card = () => {
	console.log("app.show_login_card");
	window.localStorage.removeItem("plomeria_laser_userId");
	mostrar_login();
}

app.firebase_login = (email,password) => {
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  console.log(error);
	   Materialize.toast('Estás poniendo mal el usuario y/o la contraseña', 4000);
	});
}

	//barra lateral
	$('.mostrar_nav').sideNav({
          menuWidth: 250, // Default is 300
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
          draggable: true, // Choose whether you can drag to open on touch screens,
     });
	
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

function mostrar_lectora(){
	ocultar_todo();
	$("#lectora").show();
}

function mostrar_camara(){
	ocultar_todo();
	$("#lectora").show();
	$("#take_a_photo_trigger").show();
}

function mostrar_login(){
	ocultar_todo();
	$(".login_container").show();
}

function mostrar_home(){
	ocultar_todo();
	$("#home").show();	
}

function ocultar_todo(){
	$(".login_container").hide();	
	$("#buscador").hide();	
	$("#listado").hide();
	$("#lectora").hide();
	$("#home").hide();
	$("#take_a_photo_trigger").hide();
}