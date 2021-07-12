// import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

const statement = 'qual time ganha'; //Título da pergunta
const options =[
    {
        count: 0,
        opcao: 'time X'
    },
    {
        count: 0,
        opcao: 'time Y'
    },
    {
        count: 0,
        opcao: 'time Z'
    }
]

function App() {
  return (
    <div className="App">
      <Card 
      statement={statement}
      options={options}
      />
    </div>
  );
}

export default App;
