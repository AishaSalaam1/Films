import SmallMovieCard from "./SmallMovieCard";
function MovieCardCollection({ movieData }) {
  return (
    <div className="allcards">
      {movieData.map((data) => (
          <SmallMovieCard
           key={data.id}
           title={data.original_title}
           imgUrl={data.poster_path}
           rating={data.vote_average}
           id={data.id}
          />
      ))}
    </div>
  );
}
export default MovieCardCollection;