const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [

			],
			planets: [

			],
			
			species: [

			],
			starships: [

			],
			vehicles: [

			],
			films: [

			],
			favorites: [

			],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomeData: () => {
				const store = getStore();
				let storeKeys = Object.keys(store)
				
				storeKeys.forEach(element => {
					if(element!="films" && element!="favorites"){
					fetch("https://www.swapi.tech/api/"+element)
					.then(function(response) {
						if (!response.ok) {
						throw Error(response.statusText)}
						return response.json()
					})
					 .then(function(responseAsJson) {
						setStore({[element]: responseAsJson.results})
					})
			}
				if(element=="films"){
					fetch("https://www.swapi.tech/api/"+element)
					.then(function(response) {
						if (!response.ok) {
						throw Error(response.statusText)}
						return response.json()
					})
					 .then(function(responseAsJson) {
						setStore({[element]: responseAsJson.result})
					})
			}
		})
	},
			titleCase: (string) => {
					return string[0].toUpperCase() + string.slice(1).toLowerCase();
				  }
				  
		}
	};
};

export default getState;
