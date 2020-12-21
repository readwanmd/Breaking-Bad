import React, { useState } from 'react';

const Search = ({ getQuery }) => {
	const [text, setText] = useState('');

	const onChange = (q) => {
		setText(q);
		getQuery(q);
	};

	return (
		<div className="search">
			<from>
				<input
					type="text"
					className="form-control"
					placeholder="Search Character"
					autoFocus
					value={text}
					onChange={(e) => onChange(e.target.value)}
				/>
			</from>
		</div>
	);
};

export default Search;
