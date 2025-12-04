
interface Props {
    score: number
}

const GameScore = ({score}: Props) => {
  const ratingColors = {
    good: { score: 95, color: '#30e336' },
    average: { score: 90, color: '#dde330' },
    bad: { score: 70, color: '#e34e30' },
  };

  const getColor = (value: number): string => {
    if (value >= ratingColors.good.score) {
      return ratingColors.good.color;
    } else if (value >= ratingColors.average.score) {
      return ratingColors.average.color;
    } else {
      return ratingColors.bad.color;
    }
  };

  return (
    <div>
      <p
        className="bold p-1 rounded-2xl text-center w-10"
        style={{ backgroundColor: getColor(score) }}
      >
        {score}
      </p>
    </div>
  );
};

export default GameScore;
