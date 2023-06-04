var suwa_op = document.getElementById('suwa_op');
suwa_op.style.position = 'absolute';
suwa_op.style.right = "0px";

var gun = document.getElementById('gun');
gun.style.position = 'absolute';
gun.style.right = '50px';
gun.style.top = '400px';

var fire_img = document.getElementById('fire_img');
fire_img.style.position = 'absolute';
fire_img.style.right = gun.style.right;
fire_img.style.top = gun.style.top;
fire_img.style.opacity = 0;
fire_img.style.zIndex = 29;

var fire = document.getElementById('fire');

var spz = 0;
var stalin_spz = 0;
var stalin_spz_y = 0;

var cb = document.getElementById('cb');
cb.style.position = 'absolute';
cb.style.top = '200px';
cb.style.left = window.innerWidth / 2 - window.innerWidth/4 +'px';

var jsimg = document.getElementById('jsimg');
jsimg.style.width = '50px';
jsimg.style.height = '100px';

var ado = document.getElementById('USSR');
ado.currentTime = 0;

var sv = document.getElementById('sv');
sv.currentTime = 0;

var stalin = document.getElementById('stalin');
stalin.style.position = 'absolute';

var stalinzh;

var move_stalin_func = function() {
    stalin_spz = Math.random() * 400;
    stalin_spz_y = Math.random() * 400;
    stalin.style.left = stalin_spz + 'px';
    stalin.style.top = stalin_spz_y + 'px';
}

var move_func = function() {
    spz++
    suwa_op.style.right = spz + "px";

    if( spz >= 1000 ) {
        spz = 0;
    }
}

var ussrsound = function() {
    ado.play();
    move_stalin_func();
}

var firefunc = function() {
    stalinzh = stalin.getBoundingClientRect();
    fire.currentTime = 0;
    fire_img.style.opacity = 1;
    fire.play();
    if( stalinzh.top <= 400 && stalinzh.top >= 150 ) {
        stalin.style.opacity = 0;
        sv.play();
    }
    setTimeout(fiop, 10);
} 

var fiop = function() {
    fire_img.style.opacity = 0;
}

stalin.style.zIndex = 30;
var tm = setInterval( move_func, 1 );
stalin.addEventListener('click', ussrsound);
gun.addEventListener('click', firefunc);