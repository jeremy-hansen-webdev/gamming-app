import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameGenres from './GameGenres';

const GameGrid = () => {
  const { data, error, loading } = useGames();
  const skeletonArray = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex">
      <div className="bg-amber-100 dark:bg-zinc-700 p-7 min-w-[300px]">
        <GameGenres />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center px-10 gap-6 pt-4">
        {loading
          ? skeletonArray.map((skeleton) => <GameCardSkeleton key={skeleton} />)
          : data.map((game) => <GameCard key={game.id} game={game} />)}
        <p>{error}</p>
      </div>
    </div>
  );
};

export default GameGrid;
