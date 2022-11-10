import React from "react";
import TodoList from "./todoList";

type Props = {};

const Todos = (props: Props) => {
	return (
		<div>
			<p>Todos</p>
			{/* Seems like something amiss on the build */}
			{/* @ts-ignore */}			
			<TodoList />
		</div>
	);
};

export default Todos;
