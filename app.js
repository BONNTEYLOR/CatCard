const btnGenerateCharacter = document.getElementById('btn-generate-character');

btnGenerateCharacter.addEventListener('click', getCharacter)

function createCard(character) {

    const box = document.getElementById('box');
    const containerCard = document.createElement('container-card')


    const imgCharacter = document.createElement('img')
    const nameCharacter = document.createElement('h2')
    const quoteCharacter = document.createElement('p')

    box.classList.add('box')
    containerCard.classList.add('container-card')
    imgCharacter.classList.add('img-character')
    nameCharacter.classList.add('name-character')
    quoteCharacter.classList.add('quote-character')

    imgCharacter.src = character.url
    imgCharacter.alt = character.cat
    nameCharacter.textContent = character.id
    quoteCharacter.textContent = character.width

    containerCard.appendChild(imgCharacter)
    containerCard.appendChild(nameCharacter)
    containerCard.appendChild(quoteCharacter)
    box.appendChild(containerCard)
}

function getCharacter() {
    const requestMethod = {
        method: 'GET'
    };
    const URL = ' https://api.thecatapi.com/v1/images/search'

    fetch(URL, requestMethod)
        .then(response => response.json())
        .then(data => createCard(data[0]))
        .catch(err => console.error(err));
}