
import MovieCard from './MovieCard'
const MovieList = ({title,movies}) => {
console.log("hello star",movies)
return (
  <>
    <div className='px-6'>
    <h1 className='text-sm md:text-3xl py-4 font-semibold text-white'>{title}</h1>
    <div className='flex overflow-x-scroll no-scrollbar'>
<div className='flex'>
{movies?.map(movie=> <MovieCard key={movie.id} posterPath={movie.poster_path} popularity={movie.popularity} movieId={movie.id} title={movie.title} release={movie.release_date} overview={movie.overview} language={movie.original_language}/>)}
</div>
</div>
</div>
</>
  )
}

export default MovieList;