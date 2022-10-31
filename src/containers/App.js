import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import CardList from '../components/CardList/CardList'

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
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
			.then(response => response.json())
			.then(pokemonList => {
				pokemonList.results.forEach( (singlePokemon, index) => {
					fetch(singlePokemon.url)
						.then(response => response.json())
						.then(pokeAttr => {
							console.log(pokeAttr);
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


	render() {
		const { allpokemon } = this.state;
		console.log("render");
		if(allpokemon.length === 0) {
			console.log("if");
			return (
				<h2>Loading Pokemon..</h2> 
			)
		} else {
			console.log("else");
			return (
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
					</header>
					<section>
						<CardList allpokemon={allpokemon}/>
					</section>
				</div>
			);
		}
	}
}

export default App;
