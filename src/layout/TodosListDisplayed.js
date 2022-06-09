import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./TodosListDisplayed.module.css";

function TodosListDisplayed(props) {
  return (
    <div className={classes.container}>
      <ul className={classes.todosList}>
        <div className={classes.todoItemContainer}>
          <li className={classes.todoItem}>
            <div className={classes.trashIcon}>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
            {props.text}
          </li>
        </div>
      </ul>
    </div>
  );
}

export default TodosListDisplayed;
