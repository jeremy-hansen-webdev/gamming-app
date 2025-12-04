import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { games, error, loading } = useGames();
  const skeletonArray = [1, 2, 3, 4, 5, 6]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center px-10 gap-6 pt-4">
      {loading ? skeletonArray.map((skeleton) => (
        <GameCardSkeleton key={skeleton} />
      )) : games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      <p>{error}</p>
    </div>
  );
};

export default GameGrid;
