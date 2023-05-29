import './assets/styles/reset.scss';
import './assets/styles/style.scss';
import container from './components/container/dom/container';
import { projects } from './components/projects/project';

const component = () => {
  document.body.appendChild(container());
};

component();
projects();
