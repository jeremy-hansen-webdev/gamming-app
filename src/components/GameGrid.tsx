import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameGenres from './GameGenres';

const GameGrid = () => {
  const { data, error, loading } = useGames();
  const skeletonArray = [1, 2, 3, 4, 5, 6];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="md:col-span-2 lg:col-span-1 p-7 min-w-80">
        <GameGenres />
      </div>
      <div className=" mt-8 md:col-span-2 lg:col-span-3">
        <div className="flex flex-wrap gap-4 justify-center">
          {loading
            ? skeletonArray.map((skeleton) => (
              <GameCardSkeleton key={skeleton} />
            ))
            : data.map((game) => <GameCard key={game.id} game={game} />)}
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default GameGrid;
