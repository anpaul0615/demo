import * as React from "react";
import TodoItem from "./TodoItem";

interface Props {}
interface State {
  input: string;
  todoItems: TodoItemData[];
}
interface TodoItemData {
  id: number;
  text: string;
  done: boolean;
}

class TodoList extends React.Component<Props, State> {
  public id: number = 0;
  public state: State = {
    input: "",
    todoItems: []
  };

  public onToggle = (id: number): void => {
    const { todoItems } = this.state;

    // 1) find selectedItem
    const index = todoItems.findIndex((todo: TodoItemData) => todo.id === id);
    const selectedItem = todoItems[index];
    const nextItems = [...todoItems];

    // 2) set new-todoItems (replace by selectedItem)
    const nextItem = {
      ...selectedItem,
      done: !selectedItem.done
    };
    nextItems[index] = nextItem;

    // 3) update new-todoItems
    // this.setState({ todoItems: nextItems });
    this.setState((state, props) => ({
      todoItems: nextItems
    }));
  };

  public onRemove = (id: number) => {
    this.setState(({ todoItems }) => ({
      todoItems: todoItems.filter(todo => todo.id !== id)
    }));
  };

  public onChange = (elem: React.FormEvent<HTMLInputElement>): void => {
    const { value } = elem.currentTarget;
    this.setState({ input: value });
  };

  public onSubmit = (elem: React.FormEvent<HTMLFormElement>): void => {
    elem.preventDefault();

    // 1) set newItem
    const newItem = {
      done: false,
      id: this.id++,
      text: this.state.input
    };

    // 2) append newItem to todoItems
    this.setState(({ todoItems, input }) => ({
      input: "",
      todoItems: todoItems.concat(newItem)
    }));
  };

  public render() {
    const { onSubmit, onChange, onToggle, onRemove } = this;
    const { input, todoItems } = this.state;

    // 1) set todoList
    const todoItemList = todoItems.map(todo => (
      <TodoItem
        key={todo.id}
        done={todo.done}
        onToggle={() => onToggle(todo.id)}
        onRemove={() => onRemove(todo.id)}
        text={todo.text}
      />
    ));

    // 2) render & return
    return (
      <div>
        <h1>ToDoList</h1>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} value={input} />
          <button type="submit">추가하기</button>
        </form>
        <ul>{todoItemList}</ul>
      </div>
    );
  }
}

export default TodoList;
