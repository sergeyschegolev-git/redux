import { store } from '../../redux/store';

const listContainer = document.getElementById('list');

const createUserView = (user) => {
  const div = document.createElement('div');
  div.innerText = user;

  return div;
}

store.subscribe(() => {
  listContainer.innerHTML = '';
  listContainer.append(...store.getState().users.map(createUserView));
})

listContainer.append(...store.getState().users.map(createUserView));
