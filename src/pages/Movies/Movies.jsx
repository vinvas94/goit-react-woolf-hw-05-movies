import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoveName } from '../../api/Api';
import { Title, Form, Input, Btn } from './Movies.styled';
import MoviesList from '../../components/MovieList/MovieList';
import { Notify } from 'notiflix';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMove, setSearchMove] = useState([]);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMoveName = searchParams.get('query') ?? '';

  const handleSearch = event => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchQuery.trim() === ''
      ? Notify.failure('Enter the name of the movie to search')
      : setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    const trendingMoves = async () => {
      try {
        const data = await getMoveName(searchMoveName);
        const newMovis = data.data.results;
        setSearchMove(newMovis);
      } catch (error) {
        Notify.error('An error occurred while searching for movies.');
      }
    };
    trendingMoves();
  }, [searchMoveName]);

  return (
    <>
      <Title>Search Films</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search movies"
        />
        <Btn type="submit">Search</Btn>
      </Form>
      <MoviesList movies={searchMove} location={location} />
    </>
  );
};

export default Movies;
