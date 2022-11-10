import React from "react";

type Props = {};

const fetchTodos = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos");
	const todos = await res.json();
};

const TodoList = async (props: Props) => {
	const todos = await fetchTodos();
	return <div>TodoList</div>;
};

export default TodoList;
