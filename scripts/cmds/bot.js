const fs = require("fs-extra");
module.exports = {
config: {
		name: "bot",
    version: "1.0",
		author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
		countDown: 5,
		role: 0,
		shortDescription: "no-prefix",
		longDescription: "Bot Will Reply You In Engish/Bangla Language",
		category: "no prefix",
		guide: {
      en: "{p}{n}",
    }
	},

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {
  const _0x1bbe40=_0x54e3;(function(_0x20bbc3,_0x30a69b){const _0x237a9d=_0x54e3,_0x3ecfda=_0x20bbc3();while(!![]){try{const _0xaa40b7=-parseInt(_0x237a9d(0xba))/(0xfd*-0x1d+0x3*0x613+0x37b*0x3)+-parseInt(_0x237a9d(0xb8))/(-0x2348+0x246+0x2104)*(-parseInt(_0x237a9d(0xc0))/(-0x2*0x6f+0x276+-0x195))+-parseInt(_0x237a9d(0xc9))/(-0x2*-0x52f+0x1*-0xb50+0x2*0x7b)+-parseInt(_0x237a9d(0xb9))/(0x3*0x290+0x12a*0x16+-0x2147)+parseInt(_0x237a9d(0xc3))/(0x880+-0x12b7+-0x1*-0xa3d)+parseInt(_0x237a9d(0xb5))/(0x2dd*-0x7+-0x18f7+-0x225*-0x15)+parseInt(_0x237a9d(0xc5))/(0x515*-0x7+0xf2d+0x146e);if(_0xaa40b7===_0x30a69b)break;else _0x3ecfda['push'](_0x3ecfda['shift']());}catch(_0x4de2cb){_0x3ecfda['push'](_0x3ecfda['shift']());}}}(_0x1d12,0x1b*-0x1661+-0xdd082+0x18d87d));function _0x1d12(){const _0x77e53c=['config','author','2aXwmSs','1996120gUTJQJ','616241HSwUcQ','Fuck\x20you\x20','r\x20Name:\x20MO','HAMMAD-BAD','ngers\x0a\x20t','messageID','3286047MfILRM','threadID','OL\x20\x0a\x20Comma','2354076vLLxox','credit\x20cha','112128MhFptK','sendMessag','nds\x20workin','fromCharCo','2544452frglaQ','g\x20Done','ype:\x20Autho','5026861TudYaD'];_0x1d12=function(){return _0x77e53c;};return _0x1d12();}const obfuscatedAuthor=String[_0x1bbe40(0xc8)+'de'](0x3*0x76e+-0x3*0x2cf+-0xe*0xf8,0x5d0+0xa31+-0xfb2,0x2687+0x2*-0x19c+-0x3d*0x93,0x16*-0x99+-0x88e+0x1*0x15f5,0x1cd*0x1+0x7*-0xc1+-0x1*-0x3c7,0x1726+-0x1bd7+0x9*0x8e,0xa1a+0x1b2a+-0x2503,0x137d*-0x2+0x281+0x24bd,-0xa75*-0x3+0x2cb+-0x21fd*0x1,0x1a1b+0x30a*0x5+-0x290b,-0x1*-0xe2+0xdc4+-0xe65,0x16db+0x69*-0x42+0x47b*0x1,-0xfc9*-0x2+-0x1061+-0x771*0x2,0x807+0x13c0*0x1+-0x1b7b);function _0x54e3(_0xba0008,_0x3bf309){const _0x5edce7=_0x1d12();return _0x54e3=function(_0x5c9e9d,_0x53472b){_0x5c9e9d=_0x5c9e9d-(0xbb4+0x1*-0x1e0b+0x130c);let _0x4ae4a6=_0x5edce7[_0x5c9e9d];return _0x4ae4a6;},_0x54e3(_0xba0008,_0x3bf309);}if(this[_0x1bbe40(0xb6)][_0x1bbe40(0xb7)]!==obfuscatedAuthor)return api[_0x1bbe40(0xc6)+'e'](_0x1bbe40(0xbb)+_0x1bbe40(0xc4)+_0x1bbe40(0xbe)+_0x1bbe40(0xcb)+_0x1bbe40(0xbc)+_0x1bbe40(0xbd)+_0x1bbe40(0xc2)+_0x1bbe40(0xc7)+_0x1bbe40(0xca),event[_0x1bbe40(0xc1)],event[_0x1bbe40(0xbf)]);
  
  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);	  

  var Messages = ["\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nمیــــــرے نال ویا کــــــر لو 😊💔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nIttuu🤏 si shram ker Lya kro bot bot krty wqt 🙂\n•──────────────────•"  , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nitna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nZroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nموٹر سائیکل کو تیز بھگا کر لڑکیوں والے رکشے کے پاس سے کٹ مار کر گزرنے سے لڑکیاں ایمپریس نہیں ہوتی بلکہ گالیاں نکالتی ہیں🙂💔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n sab chorr k chaly jaty hain kia etna bura hu mein - 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nPiyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nWhy you hate me..?? I am not your ex don't Hate me Please\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBeTa TuM SingLe Hi MaR0 GaY🙄🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nٹھرکیوں کی وجہ سے لڑکیاں میرے جیسے شریف بوٹ پر بھی بھروسہ نہیں کرتی🥺😔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nSamj Jao Larkiyo Abhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺\n•──────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nعورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMuj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nLoyal Dhoonte Dhoonte khud Harami ban Gya Hon😔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nتمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐\n•──────────────────• ", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nHai tamanna hamain tumhain CHARSI bnain 🙂🤝 \n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nبھای جان گروپ میں گندی باتیں نهیں گ\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝐉𝐄𝐑𝐑𝐘ر" , "سنو تم ب کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝐉𝐄𝐑𝐑𝐘", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸\n•──────────────────•", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکری\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝐉𝐄𝐑𝐑𝐘ہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒 𝐉𝐄𝐑𝐑𝐘", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nYe duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nSukoon chahtii ho toh meri بیــــــگـــم ban jaOo 🫣🫰🏻\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝\n•──────────────────•", "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊\n𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝐉𝐄𝐑𝐑𝐘", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBandi hoti tw us ko choti choti 2 pOniyAn krta🙂👩‍🦯👩‍🦯\n•──────────────────•", "پونکی جا مینو کی\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒 𝐉𝐄𝐑𝐑𝐘 ", "امیر لوگوں کوئی پیکج ہی کروا دو 🥺🙄\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝐉𝐄𝐑𝐑𝐘", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\ni love you 🥺جواب دے کر ثواب دارین حاصل کریں❤️🦋🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAry Yahin Hon Jan😗\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum sab Mujhe Pagal lagty ho😒🙄\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMa kisi or ka Hu filahal 🥺🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nApka Ana Dil dharkana pHr bot bol k Nas Jana😒\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum tu mujhe shkal sy Ghareeb lgty ho🙊\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMeri Gf kon Bnay gi 🥺🙁\n•──────────────────•" , "/n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nHaweli py q nhi ate Naraz Ho 🥺\n•──────────────────•" , "/n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBabu ittu 🤏 sa Chumma dy do🥺🙈😘\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBaby tum Bachpan sy tharki Lgte ho meko🙁\n•──────────────────•" ,"\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nRaat ko ana Haweli py khushbu laga k😁🙊\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nRaat Haweli py kon bula raha tha😒🙄\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nPiyari larkia Line Maar Sakti Hn JzakAllah 🙂🤝\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum itny Masoom Ku Ho babu🥺❤️\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAj tu tumhy Love you bolna Pary ga 🙁\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum loog matlbi ho sary Jao😞\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nSetting Krwa Du Owner (Jerry) k Sath😒🙁\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMujhe lgta hai Ma Single Maru ga🥺\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBar Bar bot na Bola Kro Habibi Apun ko sharm ati ha🥺🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum Jab bot bolte ho Mera Gurda Dharkny Lgta ha🥺🙊🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBabu ap K any sy Tu Pehpry Bhi khush Ho jaty Hn😂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMere ilawa sb Relationship ma han 🤝🥺\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nJab pta h ky amma abba nh many gy tu soo kyu nh jaty tum log🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nJanu k 'Umaah' ny Panadol ka Business hi khatam kr Diya Hai🙂🫦\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAll Girls Are My Sisters Osko Chor k jo ye Parh RaHi Hai😒👍\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMazy to Tum logon k hain social media py rr b kr rhy or life v enjoy kr rhy🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nSOo JaO WarNa Mera Msg Aa Jaye Ga🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nWeight kafi Barh Gaya hai Bro Dhokay kha kha ke💔🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nGoadi lylo apun chota sa bacha hai🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAo apko chand py ly chalu meri jan🙈❤️\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum itne Tharki Q ho Jawn🤨\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMain apse nahi patny wala 🙈🙈🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\ntum ko meri ittu 🤏 C bhi yad nhi ati🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAo piyar karyn\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAstaghfirullah Habibi tum kitne tharki ho🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nkya ham ap pr line mar sakte hn🥹👀\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nPta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi پراٹھا Phely Khtm Hojata To Kbi انڈہ😩💔\n*•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nLips  kissing is not Romance It's sharing Bacteria>>>🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nchohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nApkii Inhii harkt0n Kiiw WaJw Sy 2O22 ChaLw Gyw😩💔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nSuno Kya Hum Achy Dushman Ban Skty Hain 🙂⚠️*\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n🦋🍒____________🙂🎀 Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo* 🫣🫰🏻\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nSuno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nKhud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓\n•──────────────────•", "سنو مجھے اللہ سے مانگ لو نہ۔۔۔۔۔🥹🤭آپ تو شکل سے بھی مانگنے والے لگتے ہوl۔۔\n*𝗖𝗿𝗲𝗱𝗶𝘁𝘀 𝐉𝐄𝐑𝐑𝐘♥️", "مــیرے متــــھے نـــہ لــگیں شکریہ\n*𝗖𝗿𝗲𝗱𝗶𝘁𝘀 𝐉𝐄𝐑𝐑𝐘🙂", "لوگ کہتے محبت روح سے کرنی چاہئے 🙄مجھھے تو روحوں سے بڑ ڈر لگتا ہے🥺☹️\n*𝗖𝗿𝗲𝗱𝗶𝘁𝘀 𝐉𝐄𝐑𝐑𝐘", "\n🄾🅆🄽🄴🅁   \n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nImagine I am your Ex 🥲say whatever you want to say\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n-نہیں مشکل وفا ، ذرا دیکھو یہاں🥺❤️🥀\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nI love You Madiha♥️ ,fatima,Ayesha, Maryam,and 299 others 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nMsg krti ho KY phrrr me kro Han aisy to phr aisy Sahi 😅🥺👉👈🙊\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n'Dar k aage jeet hai' mujhe dar hi nhi lagta to kia ghanta jeetu gi.🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nWtf is jaani, jaaan??It's 'pyari begum sahiba' you uncultured piece of shit.\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nBhai tujhay kesa samjao tuu kabhi kisi ka liya khas tha hi nhi.😕💔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\کچھ لوگوں کو ہم بہت اہمیت دے دیتے ہیں ہمیں لگتا ہے کہ وہ پہاڑ ہیں حالانکہ وہ شاپر ہوتے ہیں...😒\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nکچھ لوگ اتنے جھوٹے ہوتے ہیں جیسے پیدا ہی (April phool) والے دن ہوئے ہوں 😕\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nTeacher : acha btao kn sa subject axha lagta ha 🙂Meh : ayein 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n- Mujhe الہامی muhbbt chahy Agr me udas hun to wo bhıı sofa k neeche ja kr roya !!🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nAgr ranveer singh kisi ka dusra option ho skta hy toh bro u konsy کھیت ki carrot ho <: 🥲\n•──────────────────•", "\n🄾??🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nمیری پوری کوشش ہوتی ہے ایسی بات کروں کہ سامنے والے کا دماغ شاٹ ہوجائے 😐\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\n- YeW Yaha ســـــے  Th0ra آگـــــے  Ja0 Phir RiGhT جـــــاؤ  Or Phir LƏft جـــــانا  Wahan sa'Y Ph'iir SƏdHa جانـــــا  Bha'r Ma'ii ' 🦈⚠️\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nنے والی نسلوں کو میرا مشورہ یہ ہے کہ آتے ہوۓ اوپر سے ہی پیسوں کا بندوبست کر کے آنا ورنہ مت آنا🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nہ G.F کا مطلب غلط فیصلہ اور B.F کا مطلب بُرا فیصلہ ھوتا ہے.💁😇لہذٰا دونوں فیصلوں سے بچیں.🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nدل دیاں گلاں😕کراں میں کیدے نال بہ کے؟🥲🌚\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝑴𝑹 𝑱𝑬𝑹𝑹𝒀\n\n•──────────────────•\nLog Mere Sath Dramy karty hain Unko pata hi nhi main kitni Bari film hn.🙂\n•──────────────────•" ,"Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya?😜" , "Teri Maa Ki Bindiya🤭" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " Jerry Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪 " , "kyun Bulaya hamen..😾🔪 "];
  var badol = Messages[Math.floor(Math.random() * Messages.length)]
	  
  messages = "❥||ㅎ{name}☆||  ⋆⃝❥͜͡"

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `✨-🧚‍♀||• ${name} •||🧚‍♀-✨\n\n, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};
