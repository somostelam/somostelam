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

(function() {
	'use strict';
	var app = {
	
	};


firebase.auth().onAuthStateChanged(function(user) {
	app.isLoading();
	if (!user) {
		window.location.href = "/login.html";
	} 
}); 

var starCountRef = firebase.database().ref('users');
starCountRef.on('value', function(snapshot) {
	snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    $("#tabla").append("<tr><td>"+childSnapshot.val().nombre+"</td><td><a data-id_usuario="+childSnapshot.key+" class='btn-floating borrar_usuario'><i class='material-icons'>delete</i></a></td></tr>");
  });
  
});

app.isLoading = () => {
	$("#loading").show();
}

app.stopLoad = () => {
	$("#loading").hide();
}
	
})(); //app

document.querySelector('#nuevo_usuario').addEventListener('click', nuevousuario);

$(document).on('click', '.borrar_usuario', function(e){ 
	e.preventDefault();
	var key = $(this).data("id_usuario");
	db.ref("users/"+ key).remove();
	window.location.reload();
});

function nuevousuario(){
	var key = db.ref('/users').push().getKey();
	window.location.href = "datos.html?id=" + key;
}

function borrar_usuario(){
	console.log($this.data("id_usuario"));
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

