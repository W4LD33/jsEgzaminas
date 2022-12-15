/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const output = document.getElementById("output");

// 2. Main function
const carBrandCard = (data) => {
  data.forEach((element) => {
    const header = document.createElement("h2");
    const ul = document.createElement("ul");
    header.innerText = element.brand;

    element.models.forEach((model) => {
      const li = document.createElement("li");
      li.innerText = model;
      ul.append(li);
    });

    const card = document.createElement("div");
    card.append(header, ul);
    output.append(card);
  });
};

const getCarData = async () => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  console.log(data);
  carBrandCard(data);
};

getCarData();
