import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  background-color: #f8f9fa;
`;

export const Header = styled.header`
  background-color: #007bff;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  padding: 25px;
`;

export const Item = styled.li`
  font-size: 24px;
  padding: 10px;
`;

export const Links = styled(NavLink)`
  text-decoration: none;
  color: #f8f9fa;
  &.active {
    font-weight: bold;
    color: black;
  }
`;

export const Main = styled.main`
  padding: 20px;
`;
