var suwa_op = document.getElementById('suwa_op');
suwa_op.style.position = 'absolute';
suwa_op.style.right = "0px";

var spz = 0;
var stalin_spz = 0;
var stalin_spz_y = 0;

var iss = isSmartPhone();

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
    
    stalin.style.left = stalin_spz + 'px';
    stalin.style.top = stalin_spz_y + 'px';

    if( !iss ) {
        if( stalin_spz >= screen.availWidth - screen.availWidth / 5 ) {
            stalin_spz += 2;
            stalin_spz_y++;
            stalin_spz = 0;
            stalin_spz_y = 0;
        }
    }
}

var move_func = function() {
    spz++
    suwa_op.style.right = spz + "px";

    if( !iss ) {
        if( spz >= screen.availWidth - screen.availWidth / 100 ) {
            spz = 0;
        } else {
            if( spz == 500 ) {
                spz = 0;
            }
        }
    }
}

var ussrsound = function() {
    ado.play();
}

function isSmartPhone() {
  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    return true;
  } else {
    return false;
  }
}

stalin.addEventListener('click',ussrsound);
var tm = setInterval( move_func, 1 );
var tm2 = setInterval(move_stalin_func, 1);