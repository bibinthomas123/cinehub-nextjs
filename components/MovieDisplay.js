import Link from "next/link";
import MovieCards from "./MovieCards";

const MovieDisplay = (props) => {
  let pagenum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let { movie, pageid } = props;
  if (isNaN(pageid) == true) {
    pageid = 1;
  }
  return (
    <div className="popular-movies md:mx-24">
      <div className="flex flex-wrap overflow-hidden sm:-mx-2 pl-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
        {movie.map((MovieCard) => {
          return <MovieCards key={MovieCard.id} MovieCard={MovieCard} />;
        })}
      </div>
      <div className="flex justify-center flex-wrap">
        <li className="flex-row list-none my-8 pr-2">
          <Link
            href="/movie/popular/page/[pageid]"
            as={`/movie/popular/page/${Number(pageid) - 1}`}
          >
            <button className="rounded-md px-4 py-2 bg-zinc-800 text-gray-300 hover:bg-purple-500 hover:text-gray-100 active:bg-accent-purple-300">{`<`}</button>
          </Link>
        </li>
        {pagenum.map((element, index) => {
          let buttonStyle = "rounded-md px-4 py-2 bg-zinc-800 text-gray-300 hover:bg-purple-500 hover:text-gray-100 active:bg-accent-purple-300";
          if (element == pageid) {
            buttonStyle = "rounded-md px-4 py-2 bg-accent-purple-300 text-white";
          }
          return (
            <li key={index} className="flex-row list-none my-8 pr-2">
              <Link
                key={index}
                href="/movie/popular/page/[pageid]"
                as={`/movie/popular/page/${element}`}
              >
                <button className={buttonStyle}>
                  {element}
                </button>
              </Link>
            </li>
          );
        })}
        <li className="flex-row list-none my-8 pr-2">
          <Link
            href="/movie/popular/page/[pageid]"
            as={`/movie/popular/page/${Number(pageid) + 1}`}
          >
            <button className="rounded-md px-4 py-2 bg-zinc-800 text-gray-300 hover:bg-purple-500 hover:text-gray-100 active:bg-accent-purple-300">{`>`}</button>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default MovieDisplay;
