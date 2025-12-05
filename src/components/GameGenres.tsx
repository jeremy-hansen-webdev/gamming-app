import useGenre from "../hooks/useGenres"

const GameGenres = () => {
    const {genre, error} = useGenre()
  return (
    <div className="dark:text-zinc-300 ml-2.5">
      {genre.map((g) => (
        <p key={g.id}> {g.name}</p>
      ))}
      {error && <p>{error}</p>}
    </div>
  )
}

export default GameGenres
