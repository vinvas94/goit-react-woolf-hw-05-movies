import { useState, useEffect } from 'react';
import { getMoveTrending } from '../../api/Api';
import { useLocation } from 'react-router-dom';
import MoviesList from '../../components/MovieList/MovieList';
import { Notify } from 'notiflix';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const trendingMoves = async () => {
      try {
        const data = await getMoveTrending();
        const newMovil = data.data.results;
        setTrending(newMovil);
      } catch (error) {
        Notify.error('An error occurred while fetching trending movies.');
      }
    };
    trendingMoves();
  }, []);

  return (
    <div>
      <MoviesList movies={trending} location={location} />
    </div>
  );
};

export default Home;
