// Carrega o arquivo JSON
const maior = document.querySelector('#maior');
const menor = document.querySelector('#menor');
const diminuto = document.querySelector('#diminuto');


function captarDados(modo) {
    fetch(`../json/${modo}.json`)
    .then(response => response.json())
    .then(data => {
        // Obtém a referência à tabela
        const table = document.getElementById('jsonTable');
        const tbody = table.querySelector('tbody');


        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }

        // Preenche a tabela com os dados do arquivo JSON
        data.forEach(item => {
            const row = document.createElement('tr');

            const tonicaCell = document.createElement('td');
            tonicaCell.textContent = item.tonica;
            
            const tercaCell = document.createElement('td');
            tercaCell.textContent = item.terca;
            
            const quintaCell = document.createElement('td');
            quintaCell.textContent = item.quinta;

            row.appendChild(tonicaCell);
            row.appendChild(tercaCell);
            row.appendChild(quintaCell);

            if (tonicaCell.textContent.includes('#') || tonicaCell.textContent.includes('b')) {
                tonicaCell.setAttribute('class', 'table-dark')
            } else {
                tonicaCell.setAttribute('class', 'table-light')
            }

            if (tercaCell.textContent.includes('#') || tercaCell.textContent.includes('b')) {
                tercaCell.setAttribute('class', 'table-dark')
            } else {
                tercaCell.setAttribute('class', 'table-light')
            }

            if (quintaCell.textContent.includes('#') || quintaCell.textContent.includes('b')) {
                quintaCell.setAttribute('class', 'table-dark')
            } else {
                quintaCell.setAttribute('class', 'table-light')
            }

            tbody.appendChild(row);

        });
    })
    .catch(error => console.error(error));
}

const modoMaior = 'modoMaior';
const modoMenor = 'modoMenor';
const modoDiminuto = 'modoDiminuto';
maior.addEventListener('click', () => captarDados(modoMaior));
menor.addEventListener('click', () => captarDados(modoMenor));
diminuto.addEventListener('click', () => captarDados(modoDiminuto));

