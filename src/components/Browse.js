import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      MianConatiner
        - Vedio Background
        - Vedio Title
      Secondary Conatiner
        - MovieList * n
          - Cards * n
      */}
    </div>
  );
};

export default Browse;
