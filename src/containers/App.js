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

	componentDidMount() {
		let pokemons = [];
		console.log("componentDidMount");
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=2')
			.then(response => response.json())
			.then(pokemonList => {
				pokemonList.results.forEach( (singlePokemon, index) => {
					fetch(singlePokemon.url)
						.then(response => response.json())
						.then(pokeAttr => {
							let pokemonData = {
								key: ++index,
								name: singlePokemon.name,
								img: pokeAttr.sprites.other['official-artwork'].front_default,
								attr: pokeAttr
							};
						pokemons.push(pokemonData);
						this.forceUpdate();
					});
				});
			});
			console.log("setState");
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
		if(allpokemon.length === 0) {
			console.log("if");
			return (
				<h2>Loading Pokemon..</h2> 
			)
		} else {
			console.log("else");
			return (
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
}

export default App;
