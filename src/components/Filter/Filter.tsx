import { nanoid } from 'nanoid';
import { FilterBox, FilterInput, FilterLabel } from './Filter.styled';

import { IconSearch } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filter/filterSlice';
import { ChangeEvent } from 'react';
import { AppDispatch } from '../../redux/store';

const filterInputId = nanoid();

export const Filter = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterContacts(e.target.value.trim()));
  };

  return (
    <FilterBox>
      <IconSearch size={25} />
      <FilterLabel
        aria-label="find contacts by name"
        htmlFor={filterInputId}
      ></FilterLabel>
      <FilterInput
        id={filterInputId}
        type="text"
        name="filter"
        placeholder="Search..."
        onChange={handleFilterChange}
      />
    </FilterBox>
  );
};
