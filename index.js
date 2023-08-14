
import './Settings'

import Settings from "./Settings";
import sendToDiscord from './src/toDiscord';

register("chat", (player, message, event) => {
	if (!Settings.moduleEnabled) { return }
	if (player.includes("*") || player.includes("From ") || player.includes("To ") || player.includes("Officer > ") || message.includes("/party chat <message>") || player.includes("Guild Name") || player.includes("Online Members") || player.includes("Total Members") || player.includes("Offline Members") || player.includes("Find out more here") || player.includes("Mute ID")) { return }
	if (!TabList.getFooter().includes("You are in")) { return }
	
	if (player.includes("Party > ")) {
		if (Settings.partyChat === true) {
			sendToDiscord(player, message, Settings.webhookLink, Settings.username, Settings.footer, Settings.thumbnailStart, Settings.thumbnailEnd, Settings.avatarIcon, Settings.embedColor);
		} else {
			return
		}
	} else if (player.includes("Guild > ")) {
		if (Settings.guildChat === true) {
			sendToDiscord(player, message, Settings.webhookLink, Settings.username, Settings.footer, Settings.thumbnailStart, Settings.thumbnailEnd, Settings.avatarIcon, Settings.embedColor);
		} else {
			return
		}
	} else {
		sendToDiscord(player, message, Settings.webhookLink, Settings.username, Settings.footer, Settings.thumbnailStart, Settings.thumbnailEnd, Settings.avatarIcon, Settings.embedColor);
	}
	

}).setCriteria("${player}: ${message}");

register("command", () => Settings.openGUI()).setName("h2d");


ChatLib.chat("&a&lHousing2Discord Loaded! &8(&f/h2d&8)")
