"use client"; //To make the component a client side component

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const Search = (props: Props) => {
	const [search, setsearch] = React.useState<string>("");
	const router = useRouter();
	const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setsearch("");
		router.push(`/search/${search}`);
	};
	return (
		<form onSubmit={handleSearch} className="flex gap-2">
			<input
                className="outline outline-2 outline-blue-500 rounded-3xl p-1 px-2"
				type="text"
				value={search}
				placeholder="Search here..."
				onChange={(e) => setsearch(e.target.value)}
			/>

			<button
				type="submit"
				className="outline outline-2 outline-blue-500 p-1 px-2 rounded-3xl"
			>
				Search
			</button>
		</form>
	);
};

export default Search;
