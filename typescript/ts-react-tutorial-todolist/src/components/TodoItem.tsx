import * as React from "react";

interface Props {
  text: string;
  done: boolean;
  onToggle(): void;
  onRemove(): void;
}

const TodoItem: React.SFC<Props> = ({ text, done, onToggle, onRemove }) => (
  <li>
    <span style={{ textDecoration: done ? "line-through" : "none" }} onClick={onToggle}>
      <b>{text}</b>
    </span>
    <span style={{ marginLeft: "0.5rem" }} onClick={onRemove}>
      [remove]
    </span>
  </li>
);

export default TodoItem;
