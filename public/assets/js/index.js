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

	var usuarios = firebase.database().ref('users');
	usuarios.on('value', function(snapshot) {
		var count = 0;
		var contenedor = $("#contenedor_usuarios");
		contenedor.empty();
		snapshot.forEach(function(usuario) {
			console.log(count);
			var usuarioData = usuario.val();
			console.log(usuarioData.nombre);	  
			console.log(usuarioData.historia);	  
			console.log(usuarioData.imagen);
			contenedor.append('<div class="col s6 m4 l2 perfil-container">'+
					        '<div class="foto-lista">'+
					          '<img src="'+usuarioData.imagen+'" class="responsive-img">'+
					        '</div>'+
					        '<div class="perfil-modal">'+
					          '<div class="img-container">'+
					            '<img src="'+usuarioData.imagen+'" class="responsive-img">'+
					          '</div>'+
					         ' <div class="datos">'+
					            '<div class="nombre">'+
					              '<p>'+usuarioData.nombre+'</p>'+
					           ' </div>'+
					            '<div class="historia">'+
					              '<p>'+usuarioData.historia+'</p>'+
					            '</div>'+
					          '</div>'+
					        '</div>'+
					      '</div>');
			count++;
		});
	});
})(); //app

