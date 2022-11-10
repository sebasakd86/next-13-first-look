import React from "react";

type Props = {
	params: {
		searchTerm: string;
	};
};

const Search = async (searchTerm: string) => {
	const ix = (Math.ceil(Math.random() * 1000) % 20) + 1;
	const res: SearchResult[] = await new Promise((resolve) => {
		const i = setInterval(() => {
			clearInterval(i);
			resolve(
				Array.from({ length: ix }).map((e, ix) => ({
					id: ix,
					text: `${searchTerm}-${ix}`,
				}))
			);
		}, 2000);
		return i;
	});
	if (ix < 3) throw new Error("Not enough results found");
	return res;
};

const SearchTermPage = async (props: Props) => {
	const {
		params: { searchTerm },
	} = props;
	const results = await Search(searchTerm);
	return (
		<div>
			<p>Search: {searchTerm}</p>
			<p>Results</p>
			<ol>
				{results.map((r) => (
					<li key={r.id}>
						{r.id} - {r.text}
					</li>
				))}
			</ol>
		</div>
	);
};

export default SearchTermPage;
