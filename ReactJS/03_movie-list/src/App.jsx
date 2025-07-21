import { Header, MovieCard, MovieList, MovieChip } from "./components";


const App = () => {

  return (
    <div className="container bg-slate-800 text-white">
      <Header />
      <div className="h-[90vh] flex">
        <MovieList />
        <MovieCard />
      </div>

    </div>
  );
};

export default App;
