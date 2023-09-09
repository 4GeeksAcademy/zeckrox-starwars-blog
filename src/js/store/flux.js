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

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomeData: () => {
				const store = getStore();
				let storeKeys = Object.keys(store)

				
				storeKeys.forEach(element => {
					if(element!="films"){
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

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
