
import './App.css';
import FunctionalGreetingWithProps from './components/FuncionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      < FunctionalGreetingWithProps greeting = "nice to meet you" name="Mike" age="32" />
    </div>
  );
}

export default App;
