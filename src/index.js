import './assets/styles/reset.scss';
import container from './components/dom_outputter/container/container';

const component = () => {
  document.body.appendChild(container());
};

component();
