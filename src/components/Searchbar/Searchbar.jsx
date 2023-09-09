import { BiSearch } from 'react-icons/bi';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchbarWrapper,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmitQuery, setQuery, query }) => {
  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={onSubmitQuery}>
        <SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <SearchButton type="submit">
          <BiSearch />
        </SearchButton>
      </SearchForm>
    </SearchbarWrapper>
  );
};
