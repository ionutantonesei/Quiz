const buton1 = document.getElementById('raspuns1');
const buton2 = document.getElementById('raspuns2');
const buton3 = document.getElementById('raspuns3');
buton1.addEventListener('click',function(){
    document.body.style.backgroundColor = 'var(--corect)';
})
buton2.addEventListener('click',function(){
    document.body.style.backgroundColor = 'var(--gresit)';
})
buton3.addEventListener('click',function(){
    document.body.style.backgroundColor = 'var(--normal)';
})