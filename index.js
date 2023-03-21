var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
	client.request('SET_ACTIVITY', {
		pid: process.pid,
		activity : {
			details : "Hi, I am details",
			assets : {
				large_image : "icon",
				large_text : "Hi, I am large_text"
			},
			buttons : [{label : "BUTTON1" , url : "https://www.youtube.com/results?search_query=1"},{label : "BUTTON2" , url : "https://www.youtube.com/results?search_query=2"}]
		}
	})
})
client.login({ clientId : "791884082823954432" }).catch(console.error);
