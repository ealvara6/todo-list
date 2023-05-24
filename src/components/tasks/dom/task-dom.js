import './task-dom.scss';
import plusIcon from '../../../assets/icons/plus.png';

const newTaskButton = () => {
  const element = document.createElement('button');
  element.classList.add('task-button');

  const icon = new Image();
  icon.src = plusIcon;
  element.appendChild(icon);

  const title = document.createElement('div');
  title.innerHTML = 'Add New Task';
  element.appendChild(title);

  return element;
};

export default newTaskButton;
