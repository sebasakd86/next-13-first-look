import Link from "next/link";
import React from "react";

type Props = {};

const fetchTodos = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos");
	const todos: Todo[] = await res.json();
	return todos;
};

const TodoList = async (props: Props) => {
	const todos = await fetchTodos();
	console.log(todos);
	return (
		<div>
			{todos.map((t, ix) => (
				<p key={ix}>
					<Link href={`/todos/${t.id}`}>Todo: {t.id}</Link>
				</p>
			))}
		</div>
	);
};

export default TodoList;
