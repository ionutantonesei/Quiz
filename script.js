const buton1 = document.getElementById('raspuns1');
const buton2 = document.getElementById('raspuns2');
const buton3 = document.getElementById('raspuns3');
const buton4 = document.getElementById('raspuns4');
const butonStart = document.getElementById('butonStart');
const intrebare = document.getElementById('intrebare');

butonStart.addEventListener('click',function start(){
    butonStart.style.display = 'none';
    buton1.style.display = 'inline';
    buton2.style.display = 'inline';
    buton3.style.display = 'inline';
    buton4.style.display = 'inline';
    intrebare.innerText = 'Cat face 2+2?';
    buton1.innerText = '3';
    buton2.innerText = '1';
    buton3.innerText = '4';
    buton4.innerText = '12';
});

buton1.addEventListener('click',function(){document.body.style.backgroundColor = 'var(--gresit)'});
buton2.addEventListener('click',function(){document.body.style.backgroundColor = 'var(--gresit)'});
buton3.addEventListener('click',function(){document.body.style.backgroundColor = 'var(--corect)'});
buton4.addEventListener('click',function(){document.body.style.backgroundColor = 'var(--gresit)'});