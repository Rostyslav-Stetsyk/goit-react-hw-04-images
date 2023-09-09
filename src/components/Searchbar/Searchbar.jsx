import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchbarWrapper,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmitQuery }) => {
  const [value, setValue] = useState('');
  return (
    <SearchbarWrapper>
      <SearchForm
        onSubmit={e => {
          e.preventDefault();
          onSubmitQuery(value);
        }}
      >
        <SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <SearchButton type="submit">
          <BiSearch />
        </SearchButton>
      </SearchForm>
    </SearchbarWrapper>
  );
};
