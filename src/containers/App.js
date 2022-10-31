import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import CardList from '../components/CardList/CardList'
import SearchBox from '../components/SearchBox/SearchBox';

// Need react hooks here 
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allpokemon: [],
			searchfield: ''
		}
	}

	async componentDidMount() {
		console.log("componentDidMount");
		const pokeOffset = 809;
		const pokeCount = 96;
		let pokemons = [];
		let pokemonData;
		let response;

		response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${pokeCount}&offset=${pokeOffset}`);
		console.log("fetch");
		const pokemonList = await response.json();
		for (let pkmn of pokemonList.results) {
			// Check if data is saved locally
			if (localStorage.getItem('pokeList_' + pkmn.name)) {
				console.log(pkmn.name + " from storage");
				pokemonData = JSON.parse(localStorage.getItem('pokeList_' + pkmn.name));
			} else {
				console.log(pkmn.name + " from api");
				// Get Pokemon details
				response = await fetch(pkmn.url);
				pokemonData = await response.json();
				// sort and structure pokemon details
				pokemonData = {
					key: pokemonData.id,
					name: pokemonData.name,
					img: pokemonData.sprites.other['official-artwork'].front_default,
					types: pokemonData.types,
					weight: pokemonData.weight,
					height: pokemonData.height
				};
				localStorage.setItem('pokeList_' + pkmn.name, JSON.stringify(pokemonData));  
			}
			pokemons.push(pokemonData)
		};		
		this.setState({allpokemon: pokemons});	
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { allpokemon, searchfield } = this.state;
		const filteredPokemon = allpokemon.filter(pokemon =>{
			return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		console.log("render");

		return allpokemon.length === 0 ?
			<div id="App"><h2 className='loading'>Loading Pokemon..</h2></div> :
			(
				<div id="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<SearchBox searchChange={this.onSearchChange}/>
					</header>
					<section>
						<CardList allpokemon={filteredPokemon}/>
					</section>
				</div>
			);
	}
}

export default App;
