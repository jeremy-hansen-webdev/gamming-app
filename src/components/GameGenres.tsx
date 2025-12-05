import { useEffect, useState } from 'react';
import useGenre from '../hooks/useGenres';
import { optimizeImage } from '../services/image-optimization';
import { FaBars } from 'react-icons/fa';

const GameGenres = () => {
  const { data, error } = useGenre();
  const [genreBar, setGenreBar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setGenreBar(true);
      } else {
        setGenreBar(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-amber-300 dark:bg-zinc-700">
      <button
        onClick={() => setGenreBar(!genreBar)}
        className=" md:hidden mt-18 mr-2 cursor-pointer bg-amber-300 dark:bg-zinc-800 dark:text-zinc-400 absolute right-0 top-0 px-4 py-2 rounded"
      >
        <FaBars />
      </button>
      {genreBar && (
        <ul className="flex flex-wrap justify-start md:flex-col  dark:text-zinc-300 ml-1">
          {data.map((g) => (
            <li
              className="flex flex-col text-[15px] text-center md:flex-row w-[100px] items-center text-2xl gap-6 my-2"
              key={g.id}
            >
              <img
                className="w-18 rounded-lg"
                src={optimizeImage(g.image_background, 600, 400)}
                alt=""
              />
              <p> {g.name}</p>
            </li>
          ))}
          {error && <p>{error}</p>}
        </ul>
      )}
    </div>
  );
};

export default GameGenres;
