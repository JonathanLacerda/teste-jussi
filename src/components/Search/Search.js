import React, { useState, useEffect } from "react";
import { RiSearchLine } from 'react-icons/ri';
import Button from '../Button/Button';

import api from '../../services/api/api';

import './Search.scss';

function Search (){

	const [search, setSearch] = useState('');
	const [refinedSearch, setRefinedSeach] = useState('');
	const [data , setData] = useState([]);
	const [resultsSearch, setResultSeach] = useState([])

	function getData() {
		api.get('/albums').then((results) => {
			setData(results.data);
		});
	}

	function handleSubmit(event) {
		if(search.length >= 3) {
			getData();
		}
		event.preventDefault();
	}

	function handleOnKeyDown(){
		setResultSeach([]);
		setRefinedSeach([]);
	}

	useEffect(() => {
		for(let i=0; i<data.length; i++) {
			if(data[i]['title'].search(search) > 0) {
				setResultSeach(resultsSearch => [...resultsSearch, data[i]]);
			}
		}
		setSearch(''); // eslint-disable-next-line
	},[data]);


	useEffect(() => {
		setRefinedSeach([...new Map(resultsSearch.map((item,key) => [item['id'], item])).values()])
	},[resultsSearch])

	return <>
		<div className="header__search">
			<form
				onSubmit={handleSubmit}
			>
			<input
				className={refinedSearch.length ? 'header__search-input hasContent' : 'header__search-input'}
				placeholder="Buscar"
				onChange={e => setSearch(e.target.value)}
				onKeyDown={handleOnKeyDown}
				type="text"
			/>
				<Button
					className="btn__search"
				>
					<RiSearchLine className="header__search-ico"/>
				</Button>
			</form>

			<div className={refinedSearch.length ? 'header__search-result in' : 'header__search-result'}>
				<ul className="header__search-list">
					{
						Object.keys(refinedSearch).map((value, index) => {
							return <li
									key={index}
									className="header__search-item">
										<a href="#" className="header__search-link">
											{refinedSearch[index].title}
										</a>
							</li>
						})
					}
				</ul>
			</div>
		</div>
	</>;
}

export default Search;
