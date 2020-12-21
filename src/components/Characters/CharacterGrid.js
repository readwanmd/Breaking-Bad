import React from 'react';
import CharacterItem from './CharacterItem';
import spinner from '../../img/spinner.gif';

const CharacterGrid = ({ items, isLoading }) => {
	return isLoading ? (
		<img
			src={spinner}
			alt="Loading"
			style={{ width: '150px', margin: 'auto', display: 'block' }}
		/>
	) : (
		<div className="cards">
			{items.length === 0 ? (
				<h1 className="center">Nothing Found</h1>
			) : (
				items.map((item) => (
					<CharacterItem key={item.char_id} item={item}></CharacterItem>
				))
			)}
		</div>
	);
};

export default CharacterGrid;
