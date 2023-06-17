import { nanoid } from 'nanoid';
import { FilterBox, FilterInput, FilterLabel } from './Filter.styled';

import { IconSearch } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filter/filterSlice';

const filterInputId = nanoid();

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => {
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
