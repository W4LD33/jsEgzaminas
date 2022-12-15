/* ------------------------------ TASK 8 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const countBtn = document.getElementById('btn__element');
let countNum = document.getElementById('btn__state');

countBtn.addEventListener('click', countUp);
counter = 0;
function countUp(){
    counter++;
    countNum.textContent = counter
    }
