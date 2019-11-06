
import React, { Component } from 'react';
import piggy from '../porco.png'


class Nav extends Component {

	render() { 
		return ( 
			<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			{/* <button onClick={sortByWeight}>Sort By Weight</button>
			<button onClick={}>Sort By Name</button> */}
			<button className="filterWrapper" onClick={this.props.filterGreased}>Filter By Greased</button>
			<button className="filterWrapper" onClick={this.props.sortByName}>Sort By Name</button>
			<select onChange={props.onSortedChange}>
				option value='name' 
				</select> 
			
			
			</div>
		);
	}
}
 
export default Nav;
