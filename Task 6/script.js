/* ------------------------------ TASK 6 --------------------------------------------
Sukurkite duomenu masyva, kuriame butu talpinami duomenys apie studentus:
1. Vardas
2. Pavarde
3. Amzius
4. Studijavimo datos pradzia

Turint siuos duomenis atlikti filtravima pagal studijavimo datos pradzia. Pavyzdziui,
norime matyti studentus kurie pradejo studijuoti nuo 2022-03-10. Si pasirinkima vartotojas atlieka
paprastu inputu. Filtravimas ivyksta tik tada kai vartotojas paspaudzia mygtuka Submit

P.S Reikalingus HTML elementus prisideti, kaip input, output ir tt
------------------------------------------------------------------------------------ */
const students = [
    // Person 1
    {
        "name": "John",
        "surname": "Doe",
        "age": 16,
        "date": "2022-12-01"
    },

    // Person 2
    {
        "name": "Jane",
        "surname": "Doe",
        "age": 17,
        "date": "2022-12-02"
    },

    // Person 3
    {
        "name": "Jack",
        "surname": "Smith",
        "age": 18,
        "date": "2022-12-03"
    }
]

function filterStudents() {
    const filteredStudends = students.filter(person => person.date > '2022-12-01');
    const names = filteredStudends.map(person => person.name)
    console.log(names)

    // Display the names in the 'output' div
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = names.join(', ');
}
