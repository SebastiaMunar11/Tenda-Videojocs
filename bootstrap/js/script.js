function card_witcher(){
    document.getElementById('display_witcher').style.display="block";
}
function amagar_card_witcher(){
    document.getElementById('display_witcher').style.display="none";
}
function seguir_witcher() {
    var siguerratones = document.getElementById('display_witcher').style;
    siguerratones.top = parseInt(window.event.pageY + 5) + "px";
    siguerratones.left = parseInt(window.event.pageX + 5) + "px";
}

function card_minecraft(){
    document.getElementById('display_minecraft').style.display="block";
}
function amagar_card_minecraft(){
    document.getElementById('display_minecraft').style.display="none";
}
function seguir_minecraft() {
    var siguerratones = document.getElementById('display_minecraft').style;
    siguerratones.top = parseInt(window.event.pageY + 5) + "px";
    siguerratones.left = parseInt(window.event.pageX + 5) + "px";
}

function card_ds(){
    document.getElementById('display_darksouls').style.display="block";
}
function amagar_card_ds(){
    document.getElementById('display_darksouls').style.display="none";
}
function seguir_ds() {
    var siguerratones = document.getElementById('display_darksouls').style;
    siguerratones.top = parseInt(window.event.pageY + 5) + "px";
    siguerratones.left = parseInt(window.event.pageX - screen.availWidth*0.14) + "px";
}

function card_gtaV(){
    document.getElementById('display_gtaV').style.display="block";
}
function amagar_card_gtaV(){
    document.getElementById('display_gtaV').style.display="none";
}
function seguir_gtaV() {
    var siguerratones = document.getElementById('display_gtaV').style;
    siguerratones.top = parseInt(window.event.pageY + 5) + "px";
    siguerratones.left = parseInt(window.event.pageX + 5) + "px";
}

function card_gtaSA(){
    document.getElementById('display_gtaSA').style.display="block";
}
function amagar_card_gtaSA(){
    document.getElementById('display_gtaSA').style.display="none";
}
function seguir_gtaSA() {
    var siguerratones = document.getElementById('display_gtaSA').style;
    siguerratones.top = parseInt(window.event.pageY + 5) + "px";
    siguerratones.left = parseInt(window.event.pageX + 5) + "px";
}

function card_lol(){
    document.getElementById('display_lol').style.display="block";
}
function amagar_card_lol(){
    document.getElementById('display_lol').style.display="none";
}
function seguir_lol() {
    var siguerratones = document.getElementById('display_lol').style;
    siguerratones.top = parseInt(window.event.pageY + 5) + "px";
    siguerratones.left = parseInt(window.event.pageX - screen.availWidth*0.14) + "px";
}

function veure_witcher(){
    window.location="witcher.html";
}
function veure_minecraft(){
    window.location="minecraft.html";
}
function veure_ds3(){
    window.location="ds3.html";
}
function veure_gta5(){
    window.location="gta5.html";
}
function veure_gtasa(){
    window.location="gtasa.html";
}
function veure_lol(){
    window.location="lol.html";
}


(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
})();
