import React from "react";
import TodoList from "./todoList";

type Props = {};

const Todos = (props: Props) => {
	return (
		<div>
			<p>Todos</p>
			<TodoList />
		</div>
	);
};

export default Todos;
