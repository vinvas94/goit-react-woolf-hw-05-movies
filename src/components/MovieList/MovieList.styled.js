import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmList = styled.ul`
  display: grid;
  max-width: calc(100vw - 20px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const FilmItem = styled.li``;

export const FilmLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
    cursor: zoom-in;
  }
`;

export const Name = styled.p`
  padding: 8px;
  color: #007bff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;
