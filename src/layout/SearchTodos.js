import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./SearchTodos.module.css";

function SearchTodos() {
  return (
    <div className={classes.searchTodo}>
      <div className={classes.searchIcon}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        type="text"
        id="input-search-todos"
        placeholder="search todos"
        className={classes.searchInput}
      />
    </div>
  );
}

export default SearchTodos;
