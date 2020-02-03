import _ from 'lodash';
import React, {Component} from 'react';

import NameList from '../NameList';
import {getUsers} from '../../libs/Network';

export class Typeahead extends Component {
	state = {
		users: [],
		typedText: '',
		isNameListOpen: false
	}

	setUsersByTypedText = () => {
		return getUsers(this.state.typedText)
			.then((users) => {
				this.setState({users});
			});
	}

	onNameListItemClick = (name) => {
		const typedText = `${name}`;
		const isNameListOpen = false;
		this.setState({typedText, isNameListOpen});
	}

	onTypedText = (event) => {
		const typedText = _.get(event, 'target.value', '');
		const isNameListOpen = true;
		this.setState({typedText, isNameListOpen}, this.setUsersByTypedText);
	}

	renderNameList() {
		if (this.state.isNameListOpen) {
			return (
				<NameList
					users={this.state.users}
					typedText={this.state.typedText}
					onNameListItemClick={this.onNameListItemClick}/>
			);
		}
	}

	renderInputField() {
		return (
			<div>
				<input value={this.state.typedText} onChange={this.onTypedText} />
				{this.renderNameList()}
			</div>
		);
	}

	render() {
		return <div>{this.renderInputField()}</div>;
	}
}

export default Typeahead;