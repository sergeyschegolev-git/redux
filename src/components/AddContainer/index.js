import { users } from '../../data';

const addContainer = document.getElementById('containerForAdd');
const addButton = addContainer.querySelector('button');
const input = addContainer.querySelector('input');

addButton.addEventListener('click', () => {
  users.push(input.value);
  console.log(users);
})