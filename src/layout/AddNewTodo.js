import classes from "./AddNewTodo.module.css";

function AddNewTodo() {
  return (
    <div className={classes.addTodoContainer}>
      <p className={classes.textParagraph}>Add new todo...</p>
      <input type="text" className={classes.addTodoInput} />
      <button type="button" className={classes.addTodoButton}>
        Add todo
      </button>
    </div>
  );
}

export default AddNewTodo;
