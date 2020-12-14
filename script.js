const buton1 = document.getElementById('raspuns1');
const buton2 = document.getElementById('raspuns2');
const buton3 = document.getElementById('raspuns3');
const buton4 = document.getElementById('raspuns4');
const butonStart = document.getElementById('butonStart');
const urmatorul = document.getElementById('urmatorul-buton');
const anterior = document.getElementById('anterior-buton');
const intrebareElement = document.getElementById('intrebare');
let validareButon1 = 0;
let validareButon2 = 0;
let validareButon3 = 0;
let validareButon4 = 0;
let i = 0;
let corect = 0;


let intrebari = [{
    intrebare : 'Cat face 2+2?',
    raspuns : [['2' , false],['4',true],['10',false],['0',false]]
},
{
    intrebare : 'Care este capitala Romaniei?',
    raspuns : [['Bucuresti' , true ],['Iasi', false],['Craiova' , false],['Budapesta' , false]]
},
{
    intrebare : 'Care este cel mai inalt varf muntos din Romania?',
    raspuns: [['Negoiu' , false],['Moldoveanu' , true],['Omu' , false],['Rodnei' , false]]
},
{
    intrebare : 'In ce an a avut loc Razboiul de independenta din Romania?',
    raspuns: [['1945' , false],['1989' , false],['1918' , false],['1866' , true]]
}]

butonStart.addEventListener('click',function start(){
    butonStart.style.display = 'none';
    urmatorul.style.display = 'flex';
    anterior.style.display = 'flex';
    buton1.style.display = 'inline';
    buton2.style.display = 'inline';
    buton3.style.display = 'inline';
    buton4.style.display = 'inline';
    intrebareElement.innerText = intrebari[0].intrebare;
    buton1.innerText = intrebari[0].raspuns[0][0];
    buton2.innerText = intrebari[0].raspuns[1][0];
    buton3.innerText = intrebari[0].raspuns[2][0];
    buton4.innerText = intrebari[0].raspuns[3][0];
});

buton1.addEventListener('click',()=>{
    if (validareButon1 == 1){
        buton1.style.backgroundColor = 'darkolivegreen';
        validareButon1 = 0;
    }
    else {
        buton1.style.backgroundColor = 'darkorange';
        validareButon1 = 1;
    }
});
buton2.addEventListener('click',()=>{
    if (validareButon2 == 1){
        buton2.style.backgroundColor = 'darkolivegreen';
        validareButon2 = 0;
    }
    else {
        buton2.style.backgroundColor = 'darkorange';
        validareButon2 = 1;
    }
});
buton3.addEventListener('click',()=>{
    if (validareButon3 == 1){
        buton3.style.backgroundColor = 'darkolivegreen';
        validareButon3 = 0;
    }
    else {
        buton3.style.backgroundColor = 'darkorange';
        validareButon3 = 1;
    }
});
buton4.addEventListener('click',()=>{
    if (validareButon4 == 1){
        buton4.style.backgroundColor = 'darkolivegreen';
        validareButon4 = 0;
    }
    else {
        buton4.style.backgroundColor = 'darkorange';
        validareButon4 = 1;
    }
});
urmatorul.addEventListener('click',()=>{
    if ((validareButon1 == 1 && intrebari[i].raspuns[0][1] == true) || (validareButon2 == 1 && intrebari[i].raspuns[1][1] == true) || (validareButon3 == 1 && intrebari[i].raspuns[2][1] == true) || (validareButon4 == 1 && intrebari[i].raspuns[3][1] == true)){
        corect+=1;
    }
    else {
        corect-=1;
    }
    urmatorulButon = 1;
    buton1.style.backgroundColor = 'darkolivegreen';
    buton2.style.backgroundColor = 'darkolivegreen';
    buton3.style.backgroundColor = 'darkolivegreen';
    buton4.style.backgroundColor = 'darkolivegreen';
    i+=1;
    if (i>=intrebari.length){
        i = 0;
        alert(`Scorul este: ${corect}`);
        corect = 0;
    }
    intrebareElement.innerText = intrebari[i].intrebare;
    buton1.innerText = intrebari[i].raspuns[0][0];
    buton2.innerText = intrebari[i].raspuns[1][0];
    buton3.innerText = intrebari[i].raspuns[2][0];
    buton4.innerText = intrebari[i].raspuns[3][0];
})