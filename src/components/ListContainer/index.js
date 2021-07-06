import { users } from '../../data';

const listContainer = document.getElementById('list');

const createUserView = (user) => {
  const div = document.createElement('div');
  div.innerText = user;

  return div;
}

listContainer.append(...users.map(createUserView));
