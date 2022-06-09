import SearchTodos from "./layout/SearchTodos";
import TodosListDisplayed from "./layout/TodosListDisplayed";
import AddNewTodo from "./layout/AddNewTodo";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
      </header>
      <SearchTodos />
      <TodosListDisplayed text="Win the lottery" />
      <TodosListDisplayed text="Go on vacation" />
      <TodosListDisplayed text="Swim in the ocean" />
      <TodosListDisplayed text="Eat ice-cream" />
      <TodosListDisplayed text="Relax" />
      <AddNewTodo />
    </div>
  );
}

export default App;
