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
					fetch("https://www.swapi.tech/api/"+element+"?page=1&limit=100")
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
					fetch("https://www.swapi.tech/api/"+element+"?page=1&limit=100")
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
			},

			addFavorite: (item, category) => {
				const store = getStore();
				let transformedItem = item;
				transformedItem.category=category
				for(let i=0; i<store.favorites.length ;i++){
					if(item==store.favorites[i]) return getActions().removeFavorite(item)
				}
				setStore( {...store, favorites:[item, ...store.favorites]} )
			},

			removeFavorite: (item) => {
				const store = getStore();
				 setStore( {...store, favorites:store.favorites.filter(elm => elm != item)} )
			},
		}
	};
};

export default getState;
