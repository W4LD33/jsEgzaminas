/* ------------------------------ TASK 7 --------------------------------------------
Kreipiantis i zemiau pateikta resursa gauti siuos duomenis is serverio ir atvaizduoti juos htmle.
T.y. turi buti atvaizduota zinute ir nuotrauka <img>.
Taip pat tinklapyje turi buti atvaizduotas mygtukas, kuri paspaudus butu gaunami nauji duomenys
ir pakeiciami seni.
Taip pat isijungus si tinklapi is naujo turiu matyti ta pati irasa, kuri pries tai buvome gave ir tik paspaudus mygtuka "Refresh"
Turime gauti naujus duomenis.

Hint: naudojamas localstorage, saugoti informacijai;
------------------------------------------------------------------------------------ */
const URL = "https://random-d.uk/api/random";

fetch(URL, { mode: 'no-cors'})
  .then((response) => response.text())
  .then((text) => {
    try {
        let data = JSON.parse(text);
        localStorage.setItem('data', JSON.stringify(data));
    } catch (error) {
        console.log('error')
    }
});

let savedData = localStorage.getItem('data');
let data = JSON.parse(savedData);

let output = document.querySelector('output')

data.forEach(element => {
    output.innerHTML += element.message
});
