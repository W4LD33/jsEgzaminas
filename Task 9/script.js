/* ------------------------------ TASK 9 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
3. Isrykiuoti pagal varda mazejimo tvarka

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = 'https://api.github.com/users';

const displayUsers = (users) => {
    const output = document.getElementById('output');

    users.forEach(user => {
      const name = document.createElement('td');
      name.innerText = user.login;
  
      const img = document.createElement('img');
      img.src = user.avatar_url;
      img.width = '100';
  
      output.append(name, img);

      document.getElementById('message').setAttribute('style', 'display: none;');
    })
  }
  
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://api.github.com/users');
      if (response.ok) {
        const users = await response.json();
        displayUsers(users);
      }
    } catch (error) {
      console.error(error);
    }
  };

  document.getElementById('btn').addEventListener('click', fetchUsers)