import React from "react";

type Props = {
	params: {
		searchTerm: string;
	};
};

const Search = async (searchTerm: string) => {
	const ix = (Math.ceil(Math.random() * 1000) % 10) + 1;
	const res: SearchResult[] = Array.from({ length: ix }).map((e, ix) => ({
		id: ix,
		text: `${searchTerm}-${ix}`,
	}));
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
