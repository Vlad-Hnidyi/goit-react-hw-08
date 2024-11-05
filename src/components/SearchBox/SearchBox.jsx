import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter, setFilter } from "../../redux/filtersSlice";
function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.searchWrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.search}
        type="text"
        name="search"
        placeholder="Search by name"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
