import MovieCard from "./MovieCard";

function MovieGrid()
{
    const movies=[
        {name:'Gabbar',director:'ratan',rating:4.5},
        {name:'jalsa',director:'pavan',rating:4.0},
        {name:'OG',director:'sai',rating:4.2},
        {name:'kushi',director:'naveen',rating:4.0},
        {name:'badri',director:'praveen',rating:4.5},
    ]

        const res=movies.map((movie,index)=>
        (<li key={index}>name:{movie.name} director:{movie.director} rating:{movie.rating}</li>))

        return(
            <>
            <MovieCard movieobj={res}/>
            
            
            </>
        )
}
export default MovieGrid;