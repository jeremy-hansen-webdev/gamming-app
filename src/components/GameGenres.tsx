
import useGenre from '../hooks/useGenres';

const GameGenres = () => {
  const { data, error } = useGenre()
  return (
    <div className="dark:text-zinc-300 ml-2.5">
      {data.map((g) => (
        <p key={g.id}> {g.name}</p>
      ))}
      {error && <p>{error}</p>}
    </div>
  );
};

export default GameGenres;
