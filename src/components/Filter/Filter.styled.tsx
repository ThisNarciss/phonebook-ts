import styled from '@emotion/styled';
import { BiSearchAlt } from 'react-icons/bi';

export const FilterBox = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  background-image: url('./images/bg-01.jpg');
`;

export const IconSearch = styled(BiSearchAlt)`
  position: absolute;
  top: 10px;
  left: 5px;
  color: grey;
`;

export const FilterLabel = styled.label``;

export const FilterInput = styled.input`
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 1.25rem 2rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;

  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;
