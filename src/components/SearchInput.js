const SearchInput = (props) => {
  return (
    <div>
      <input value={props.searchParam} onChange={props.updateSearchParam} />
    </div>
  )
}

export default SearchInput
