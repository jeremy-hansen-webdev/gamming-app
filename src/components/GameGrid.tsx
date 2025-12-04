import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center px-10 gap-6 pt-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}

      <p>{error}</p>
    </div>
  );
};

export default GameGrid;
