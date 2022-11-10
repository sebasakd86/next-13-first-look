import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
	return (
		<header className="bg-blue-500 p-5 flex gap-4">
			<Link
				href="/"
				className="transition-all rounded-3xl p-2 px-6 bg-white text-blue-500 outline-0 outline
                            hover:outline-2 hover:outline-black "
			>
				Home
			</Link>
			<Link
				href="/todo/"
				className="transition-all rounded-3xl p-2 px-6 bg-white text-blue-500 outline-0 outline
                            hover:outline-2 hover:outline-black "
			>
				Todos
			</Link>
			<Link
				href="/search/"
				className="transition-all rounded-3xl p-2 px-6 bg-white text-blue-500 outline-0 outline
                            hover:outline-2 hover:outline-black "
			>
				Search
			</Link>
		</header>
	);
};

export default Header;
