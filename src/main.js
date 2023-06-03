var suwa_op = document.getElementById('suwa_op');
suwa_op.style.position = 'absolute';
suwa_op.style.right = "0px";

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

var stalin = document.getElementById('stalin');
stalin.style.position = 'absolute';
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

stalin.style.zIndex = 30;
var tm = setInterval( move_func, 1 );
stalin.addEventListener('click',ussrsound);