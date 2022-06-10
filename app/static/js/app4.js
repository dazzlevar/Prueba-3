'use strict'

 function login() {
     var email = document.querySelector('#txtCorreo').value;
     var pass = document.querySelector('#txtPassword').value;

     if(email.length == 0 || pass.length == 0) {
        document.querySelector('#txtCorreo').style.backgroundColor = 'rgb(255, 182, 182)';
        document.querySelector('#txtPassword').style.backgroundColor = 'rgb(255, 182, 182)';
        document.querySelector('#alert').style.display = 'block';
        document.querySelector('#alert').innerHTML = 'Debes completar todos los campos'
        return false;
     };
 };


 window.addEventListener('load', () => {
    document.querySelector('#alert').style.display = 'none';
});