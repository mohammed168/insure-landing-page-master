let hum0 = document.querySelector('.hum');
let close = document.getElementsByClassName('close')[0];
let navmop = document.getElementsByClassName('navmop')[0];


hum0.onclick = function(){
    close.classList.remove('hide');
    hum0.style.display = 'none';
    navmop.classList.remove('hide');
}
close.onclick = function(){
    hum0.style.display = 'inline-block';
    this.classList.add('hide');
    navmop.classList.add('hide');
}
