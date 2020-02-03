import _ from 'lodash';
import React, {Component} from 'react';

import './styles.css';

export class NameList extends Component {
	onNameListItemClick = (event) => {
		const name = _.get(event, 'target.innerText');
		this.props.onNameListItemClick(name);
	}

	render() {
		return (
			<ul className="typeahead-name-list">
				{this.props.users.map(({name, id}) => {
					return (
						<li
							key={id}
							className="typeahead-name-list-item"
							onClick={this.onNameListItemClick}>{name}</li>
					);
				})}
			</ul>
		);
	}
}

export default NameList;