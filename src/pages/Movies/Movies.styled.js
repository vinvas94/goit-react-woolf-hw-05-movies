import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #343a40;
`;

export const Form = styled.form`
  text-align: center;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 450px;
  height: 30px;
  border: 2px solid #007bff;
  border-radius: 5px;
  margin-right: 15px;
  padding: 10px;
`;

export const Btn = styled.button`
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  border: 1px solid #007bff;
  padding: 14px 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #007bff;
  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;
