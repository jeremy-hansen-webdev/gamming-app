import './App.css';
import GameGrid from './components/GameGrid';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className="dark:bg-zinc-800">
        <GameGrid />
      </div>
    </>
  );
}

export default App;
