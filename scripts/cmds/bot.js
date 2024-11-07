const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "ts",
    version: "1.0",
    author: "XNIL",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot Will Reply You In English/Bangla Language",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    }
  },
  onStart: async function () { },
  onChat: async function ({ api, event, Users }) {
    var { threadID, messageID, senderID } = event;
    const time = moment.tz("Asia/Dhaka").format("HH:mm:ss L"); // Corrected time format
    var idgr = `${event.threadID}`;
    var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
    const responses = [
      "میــــــرے نال ویا کــــــر لو 😊💔",
      "Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†"
    ];
    const xnil = responses[Math.floor(Math.random() * responses.length)];

    console.log(`Received message: ${event.body}`); // Debugging log

    if (["bot miss you", "bot miss u"].includes(event.body.toLowerCase())) {
      return api.sendMessage("️miss u more🥰", threadID, messageID);
    }

    if (["owner", "owner kon ha"].includes(event.body.toLowerCase())) {
      return api.sendMessage("️MR JERRY 🤧", threadID, messageID);
    }

    if (["does the bot have a brand", "does the bot fall"].includes(event.body.toLowerCase())) {
      return api.sendMessage("Yes <3", threadID, messageID);
    }

    const name = "BotName"; // Define the name variable if required
    const mess = `❥||ㅎ${name}☆||  ⋆⃝❥͜͡`;

    if (event.body.toLowerCase().startsWith("Bot") || event.body.toLowerCase().startsWith("bot")) {
      const msg = {
        body: `${xnil}`
      };
      return api.sendMessage(msg, threadID, messageID);
    }
  }
};
