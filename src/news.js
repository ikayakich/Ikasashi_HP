var sj = document.getElementById('sj');
sj.style.position = 'absolute';
sj.style.left = window.innerWidth / 2 - window.innerWidth/4 +'px';

var tt = document.getElementById('title');

var i = 0;

var color_func = function() {
    i++;
    if( i == 1 ){
        tt.style.color = 'red';
    } else if( i == 2 ) {
        tt.style.color = 'blue';
    } else if( i == 3 ) {
        tt.style.color = 'yellow';
    } else if( i == 4 ) {
        tt.style.color = 'black';
    } else {
        i = 0;
    }
}

var tm = setInterval( color_func, 100 );