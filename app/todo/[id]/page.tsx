import React from "react";

type Props = {};

const fetchTodo = async (id: number) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
	const ret: Todo = await res.json();
	return ret;
};

const TodoPage = async (props: Props) => {
	const {
		params: { id },
	} = props;
	const todo = await fetchTodo(id);
	return (
		<div>
			<p>TodoPage - {id}</p>
			<p>{JSON.stringify(todo)}</p>
		</div>
	);
};

export default TodoPage;
