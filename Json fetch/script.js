const tableHeader = document.querySelector()

function createTableRow(data) {
    const row = document.createElement('tr');
    row.draggable = true;

    const idCell = document.createElement('td');
    idCell.textContent = data.id;
    row.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = data.name;
    row.appendChild(nameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = data.email;
    row.appendChild(emailCell);

    return row;
  }

const fetchAPI = async() => {
    
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const jsonData = await response.json();
return jsonData;

}

const renderTable = async () => {

const table = document.querySelector('#table');
const element = table.querySelectorAll('#table_row');
element.innerHTML = '';

const data = await fetchAPI();

data.forEach((item) => {
    const row = createTableRow(item);
    table.appendChild(row);
});
}

renderTable();


