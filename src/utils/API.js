const API = {
	getRooms: async function(){
		const response = await fetch(`http://localhost:3001/api/homecards`);
		const myJson = await response.json();
		return myJson.data.homecards;
	},
}

export default API;