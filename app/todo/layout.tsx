import React from "react";
import TodoList from "./todoList";

type Props = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
	return (
		<main className="p-2">
			<h1 className="underline font-bold text-2xl">Todos</h1>
			<div className="flex">
				{/* Seems like something amiss on the build */}
				{/* @ts-ignore */}
				<TodoList />
				<div className="flex-1">{children}</div>
			</div>
		</main>
	);
};

export default RootLayout;
