import React from "react";

type Props = {};

const fetchTodo = async (id: number) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${id}`,
		{
			next: { revalidate: 600 },
		}
	);
	const ret: Todo = await res.json();
	return ret;
};

const TodoPage = async (props: Props) => {
	const {
		params: { id },
	} = props;
	const { title, completed, userId } = await fetchTodo(id);
	return (
		<div className="bg-yellow-500 p-5 shadow-xl m-5">
			<p className="font-bold">{title}</p>
			{completed && <p className="font-bold underline">Completed</p>}
			<p>User: {userId}</p>
		</div>
	);
};

export default TodoPage;
