import React, { Component } from 'react';

import style from './index.styl';

class SearchBar extends Component {
	
	constructor() {
		super();
		
		this.state = {
			term: ''
		};
		
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onChangeHandler(event) {
		this.setState({
			term: event.target.value
		});
	}
	
	render() {
		return (
			<div>
				<input 
					type="text"
					onChange={ this.onChangeHandler }
					value={ this.state.term }
				/>
				Value of the input: { this.state.term }
			</div>
		);
	}
}

export default SearchBar;