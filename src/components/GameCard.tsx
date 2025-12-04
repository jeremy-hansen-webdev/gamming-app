import type { Game } from '../hooks/useGames';
import { optimizeGameImage } from '../services/image-optimization';
import GameScore from './GameScore';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <div>
        <img
          className="w-[350px] h-[275px] rounded-t-2xl"
          src={optimizeGameImage(game.background_image)}
          alt=""
        />
        <div className="p-3 bg-amber-200 dark:bg-zinc-700">
          <h1 className="text-2xl max-w-[350px] font-bold  dark:text-zinc-200">
            {game.name}
          </h1>
          <div className="flex items-center justify-between mt-2">
            <GameScore score={game.metacritic} />
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;
