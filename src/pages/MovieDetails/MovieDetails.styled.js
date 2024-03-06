import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: inline-block;
  border: 1px solid #007bff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #343a40;
  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Image = styled.img`
  display: flex;
`;

export const InfoList = styled.ul`
  list-style: none;
`;

export const InfoItem = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0px;
  height: auto;
`;

export const InfoTitle = styled.h1`
  font-size: 35px;
  color: #343a40;
  margin: 0;
`;

export const ListAdd = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const ItemAdd = styled.li`
  margin-right: 20px;
`;

export const LinkAdd = styled(Link)`
  text-decoration: none;
  display: inline-block;
  border: 1px solid #007bff;
  padding: 10px;
  border-radius: 5px;
  width: 80px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #007bff;
  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;
