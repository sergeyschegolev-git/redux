import { store } from '../../redux/store';
import { addUser } from '../../redux/actions';

const addContainer = document.getElementById('containerForAdd');
const addButton = addContainer.querySelector('button');
const input = addContainer.querySelector('input');

addButton.addEventListener('click', () => {
  store.dispatch(addUser({ user: input.value }));
})