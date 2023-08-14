import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @ColorProperty, @CheckboxProperty, @SelectorProperty, Color } from 'Vigilance';
import sendToDiscord from './src/toDiscord';

@Vigilant("Housing2Discord")
class Settings {
	
	@SwitchProperty({
		name: "Enable Module",
		description: "Should the module be active and running.",
		category: "Settings",
	})
	moduleEnabled = true;
	
	@SwitchProperty({
		name: "Send Guild Chat",
		description: "Should the module be sending Guild Chat Messages to discord?",
		category: "Settings",
	})
	guildChat = false;
	
	@SwitchProperty({
		name: "Send Party Chat",
		description: "Should the module be sending Party Chat Messages to discord?",
		category: "Settings",
	})
	partyChat = false;
	
    @TextProperty({
        name: "Webhook Link",
        description: "Paste the Discord Webhook Link that coresponds to the channel you want Housing Messages to appear!",
        category: "Settings",
        subcategory: "Required",
        placeholder: "Paste your Discord Webhook Link here!"
    })
    webhookLink = "";
	
	@TextProperty({
        name: "Username",
        description: "The name of the webhook when its sent.",
        category: "Display",
    })
    username = "Housing -> Disc";
	
	@TextProperty({
        name: "Footer Text",
        description: "The message shown in tiny font at the bottom of the embed.",
        category: "Display",
    })
    footer = "Created By Al3xWarrior";
	
	@TextProperty({
        name: "Avatar Icon",
        description: "The image displayed in the Embeds Profile Picture",
        category: "Display",
    })
    avatarIcon = "https://crafatar.com/avatars/d4a0032cfa5b4561b4e12ab18dfd4d81?size=100.png";
	
	@TextProperty({
        name: "Thumbnail Start of URL",
        description: "Used to display the Thumbnail Image of the user who send the message.",
        category: "Display",
        subcategory: "Advanced",
        placeholder: ""
    })
    thumbnailStart = "https://mc-heads.net/head/";
	
	@TextProperty({
        name: "Thumbnail End of URL",
        description: "Used to display the Thumbnail Image of the user who send the message.",
        category: "Display",
        subcategory: "Advanced",
        placeholder: ""
    })
    thumbnailEnd = "/100.png";
	
	@TextProperty({
        name: "Webhook Link",
        description: "Paste the Discord Webhook Link that coresponds to the channel you want Housing Messages to appear!",
        category: "Settings",
        subcategory: "Required",
        placeholder: "Paste your Discord Webhook Link here!"
    })
    webhookLink = "";
	
	@SelectorProperty({
        name: "Embed Color",
        description: "Change the color of the embed message",
        category: "Display",
        options: [
            "Red",
            "Orange",
            "Yellow",
            "Green",
            "Blue",
            "Purple",
            "Rainbow"
        ]
    })
    embedColor = 0

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Settings", "&eChange settings within the module")
        this.setSubcategoryDescription("Settings", "Required", "&cThese settings are required to be edited before use!")
		this.setCategoryDescription("Display", "&eChange settings related to how the embed looks!")
        this.setSubcategoryDescription("Display", "Advanced", "&cWARNING: Its recomended you look at the code for a better understanding of how modules inside of here work.")
    }
}

export default new Settings();