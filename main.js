const addBtn = document.querySelector('.addBtn');
const content = document.querySelector('.content')

const addCard = () => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.textContent = 'Something5';
    content.insertBefore(card, content.firstChild);
}

addBtn.addEventListener('click', addCard)