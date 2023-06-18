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

var ex_a = document.getElementById('ex');
ex.currentTime = 0;

var exi = document.getElementById('ex_img');
exi.style.opacity = 0;
exi.style.position = 'absolute';
exi.style.zIndex = 27;

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
ado.volume = 0.1;

var sv = document.getElementById('sv');
sv.currentTime = 0;

var stalin = document.getElementById('stalin');
stalin.style.position = 'absolute';
stalin.style.opacity = 100;
stalin.style.top = '0px';
stalin.style.left = '0px';

var sj = document.getElementById('sj');
sj.style.position = 'absolute';
sj.style.left = '50%';

var putin = document.getElementById('putin');
putin.style.position = 'absolute';
putin.style.left = '0px';
putin.style.top = '300px'
putin.style.zIndex = 28;
putin.style.opacuty = 100;

var pf = document.getElementById('p_f');
pf.style.position = 'absolute';
pf.style.opacity = 0;
pf.style.zIndex = 26;

var stalinzh;
var putinzh;

var move_stalin_func = function() {
    stalin_spz = Math.random() * 600;
    stalin_spz_y = Math.random() * 600;
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
    if( stalin.style.opacity != 0 ) {
        ado.play();
        move_stalin_func();
    }
}

var firefunc = function() {
    stalinzh = stalin.getBoundingClientRect();
    fire.currentTime = 0;
    fire_img.style.opacity = 1;
    fire.play();
    if( stalinzh.top <= 400 && stalinzh.top >= 100 && stalin.style.opacity != 0 ) {
        stalin.style.opacity = 0;
        exi.style.top = stalinzh.top + 'px';
        exi.style.left = stalinzh.left + 'px';
        exi.style.opacity = 100;
        sv.play();
        ex.play();
        setTimeout(st_r, 2000);
    }
    setTimeout(fiop, 10);
} 

var fiop = function() {
    fire_img.style.opacity = 0;
}

var st_r = function() {
    stalin.style.opacity = 100;
    stalin.style.top = '0px';
    stalin.style.left = '0px';
    exi.style.opacity = 0;
}

var putinc = function() {
        stalin_spz = Math.random() * 600;
        stalin_spz_y = Math.random() * 600;
        putin.style.left = stalin_spz + 'px';
        putin.style.top = stalin_spz_y + 'px';
        ado.play();
}

var putinfire = function() {
    fire.play();
    if( putinzh.top <= 400 && putinzh.top >= 100 ) {
        fire.currentTime = 0;
        putin.style.opacity = 0;
        pf.style.top = putinzh.top + 'px';
        pf.style.left = putinzh.left + 'px';
        pf.style.opacity = 100;
        sv.play();
        ex.play();
        setTimeout(pu_r, 2000);
    }
}

var pu_r = function() {
    pf.style.opacity = 0;
    putin.style.left = '0px';
    putin.style.top = '300px;';
    putin.style.opacity = 100;
}

var ptz = function() {
    putinzh = putin.getBoundingClientRect();
}

stalin.style.zIndex = 30;

var tm2 = setInterval(ptz, 1);
var tm = setInterval( move_func, 1 );
stalin.addEventListener('click', ussrsound);
putin.addEventListener('click', putinc);
gun.addEventListener('click', firefunc);
gun.addEventListener('click', putinfire);