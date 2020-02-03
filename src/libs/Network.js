import _ from 'lodash';
import fetch from 'isomorphic-fetch';

export const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = (typedText) => {
	return fetch(USERS_ENDPOINT)
		.then((response) => response.json())
		.then((users) => {
			return _.chain(users)
				.filter(({name}) => _.includes(`${name}`.toLowerCase(), `${typedText}`.toLowerCase()))
				.valueOf();
		})
		.catch((error) => {
			console.log({error});
		})
}
