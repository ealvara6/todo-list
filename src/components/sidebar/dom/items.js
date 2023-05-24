const item = (name) => {
  const element = document.createElement('div');
  element.id = name;
  element.classList.add('sidebar-item');
  const title = document.createElement('div');
  title.innerHTML = name;
  element.appendChild(title);

  return element;
};

const createItem = (name) => item(name);

export default createItem;
