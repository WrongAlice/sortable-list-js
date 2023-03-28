const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById=('check');

const richestPeople = [
    'nicole pizzano',
    'caleb Depiero',
    'mildred pizzano',
    'nicole tattersall',
    'kitty pizzano',
    'mr krabs',
    'eugene krabs',
    'sandra serhan',
    'smidge depiero',
    'your mother mary'
]

//store the list items
const listItems = []

let dragStartIndex;


createList()
//inset list items into DOM
function createList() {
    [...richestPeople]
    .forEach((person, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `
        <span class="number">${index + 1} </span>
        <div class="draggable" draggable="true"
        <p class="person-name"> ${person}</p>
        <i class="fas fa-grip-lines"> </i> 
        </div>
`;

listItems.push(listItem);

draggable_list.appendChild(listItem)
    })
}