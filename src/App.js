import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CharacterGrid from './components/Characters/CharacterGrid';
import Header from './components/Header';
import Search from './components/Search';

function App() {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const result = await Axios(
				`https://www.breakingbadapi.com/api/characters?name=${query}`
			);

			console.log(result.data);

			setItems(result.data);
			setIsLoading(false);
		};

		fetchItems();
	}, [query]);

	return (
		<div className="container">
			<Header />
			<Search getQuery={(q) => setQuery(q)} />
			<CharacterGrid isLoading={isLoading} items={items} />
		</div>
	);
}

export default App;
