import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoveReviews } from '../../api/Api';
import { ReviewList, ReviewItem, Author, Text } from './Reviews.styled';
import { Notify } from 'notiflix';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const reviewsMoves = async () => {
      try {
        const data = await getMoveReviews(movieId);
        const moveReviews = data.data.results;
        setMovieReviews(moveReviews);
      } catch (error) {
        Notify.error('error');
      }
    };
    reviewsMoves();
  }, [movieId]);

  return (
    <ReviewList>
      {movieReviews.length < 1 ? (
        <h2>I'm sorry, but I don't have any information reviews </h2>
      ) : (
        movieReviews.map(({ id, author, content }) => (
          <ReviewItem key={id}>
            <Author>Author: {author}</Author>
            <Text>{content}</Text>
          </ReviewItem>
        ))
      )}
    </ReviewList>
  );
};

export default Reviews;
