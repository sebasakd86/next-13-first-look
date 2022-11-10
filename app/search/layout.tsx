import React from "react";
import Search from "./search";

type Props = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
	return (
		<main className="flex p-2 gap-2 items-center">
			<div>
				<h1>Search</h1>
			</div>
			<div className="flex flex-col">
				<Search />
				<div>{children}</div>
			</div>
		</main>
	);
};

export default RootLayout;
