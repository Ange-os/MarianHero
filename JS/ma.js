
const header = document.getElementById('header');

const btnMenu = document.getElementById('menu-desple')

const navegador = document.getElementById('navegador')

const navMenu = document.getElementById('contenedo-nav')

let v1 = false
    
    var prevScrollpos = window.pageYOffset;
    
    window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
        navegador.style.display = "block";
    } else {
        header.style.top = "-180px";
        navegador.style.display = "none"
    }
    prevScrollpos = currentScrollPos;
    });

btnMenu.addEventListener('click', menu)

function menu() {
    v1 = !v1
    if(v1){
        navMenu.style.visibility = 'visible'
    }
    else{
        navMenu.style.visibility = 'hidden'
    }
}
const btnwts = document.getElementById("btnEnviarWhatsAppp")
    btnwts.addEventListener('click', enviarMensaje); 
const mensaje = document.getElementById('mensaje');

function enviarMensaje() {
    console.log('precion')
}