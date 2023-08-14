import request from "requestv2/index";
//import Settings from "../Settings";

function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "0x";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function removePreviousTags(name) {
	var array = name.split(" ");
	
	if (array[array.length-1].includes("[")) {
		return array[array.length-2]
	} else {
		return array[array.length-1]
	}
}

export default function sendToDiscord(player, msg, webhookLink, username, footer, thumbStart, thumbEnd, avatarIcon, embedColor) {
	
	if (!webhookLink) { ChatLib.chat("&cThere is no webhook link setup in the config! Do /h2d to set that up!"); return }
	
	var embedColorFinal;
	
	if (embedColor === 0) {
		embedColorFinal = "0xFF0000";
	} else if (embedColor === 1) {
		embedColorFinal = "0xFFA500";
	} else if (embedColor === 2) {
		embedColorFinal = "0xFFFF00";
	} else if (embedColor === 3) {
		embedColorFinal = "0x008000";
	} else if (embedColor === 4) {
		embedColorFinal = "0x0000FF";
	} else if (embedColor === 5) {
		embedColorFinal = "0x800080";
	} else if (embedColor === 6) {
		embedColorFinal = getRandomColor();
	}
	

	request({
		url: webhookLink,
		method: "POST",
		headers: {
			"Content-type": "application/json",
			"User-Agent": "Mozilla/5.0",
		},
		body: {
			username: username,
			avatar_url:
				avatarIcon,
			content: " ",
			embeds: [
				{
					title: player,
					color: parseInt(embedColorFinal, 16),
					thumbnail: {
						url: thumbStart + removePreviousTags(player) + thumbEnd
					},
					description: msg,
					footer: {
						text: footer,
					},
					fields: [],
				},
			],
		},
	}).catch((err) => {
		ChatLib.chat("&cAn error occured!")
		ChatLib.chat(err)
		console.log("sendToDiscord error:", err);
	});
}
