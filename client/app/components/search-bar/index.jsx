import React, { Component } from 'react';

import style from './index.styl';

class SearchBar extends Component {

	onChangeHandler(event) {
		this.props.onChangeTerm(event.target.value);
	}

	render() {
		return (
			<div className={style.searchBar}>
				<div class="input-group">
					<span class="input-group-addon" id="sizing-addon2"> 
						<i class="material-icons icon">search</i>
					</span>
					<input
						onChange={this.onChangeHandler.bind(this)}
						type="text"
						class="form-control"
						placeholder="Search"
						aria-describedby="sizing-addon2"
						/>
				</div>
			</div>
		);
	}
}

export default SearchBar;