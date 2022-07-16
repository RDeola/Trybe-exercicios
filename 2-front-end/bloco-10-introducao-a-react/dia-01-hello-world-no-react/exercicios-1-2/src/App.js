import logo from './logo.svg';
import './App.css';

const appointments = [
  'segunda - almoço',
  'terça - reunião',
  'quarta - compras',
  'quinta - jantar',
  'sexta- sextou',
];

const Task = (value) => {
  return value.map((appointment) => <li>{appointment}</li>);
};

function App() {
  return <ol>{Task(appointments)}</ol>;
}

export default App;
