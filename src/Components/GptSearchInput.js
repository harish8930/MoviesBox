import { useRef } from 'react'
import lang from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';



const GptSearchInput = () => {
  const langKey = useSelector(store=> store.config.lang)
  const searchText = useRef(null);
const dispatch = useDispatch();



  const searchMovieTMBD = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=/' + movie + '/&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async ()=>{
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query "+ searchText.current.value+ "only give me 5 movies , comma seperated like the exxample result given ahead.Example Result: Gadar,sholay,Don,koi mil gya,golmal"
   const gptResults =  await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(',')
    const promiseArray = gptMovies.map((movie)=> searchMovieTMBD(movie))
    const tmdbResult = await Promise.all(promiseArray);
    
  dispatch(addGptMovieResult({movieNames: gptMovies,moviesResults:tmdbResult}));
  }
  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
<form className='w-screen md:w-1/2 bg-zinc-800 grid grid-cols-12 rounded-xl' onSubmit={(e)=> e.preventDefault()}>
<input ref={searchText} type='text' className=' md:p-4 m-4 col-span-9 text-xs md:text-xl font-semibold rounded-xl' placeholder={lang[langKey].gptSearchPlaceHolder}/>
<button className='col-span-3 m-4  md:py-2 py-1 md:px-4 px-1 bg-red-700 text-white md:text-xl text-sm rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
</form>

    </div>
  )
}

export default GptSearchInput;

