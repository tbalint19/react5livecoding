import SearchInput from './SearchInput'

const SearchForm = (props) => (
  <div>
    <p>This is the search form</p>
    <SearchInput searchParam={props.searchParam} updateSearchParam={props.updateSearchParam} />
  </div>
)

export default SearchForm
