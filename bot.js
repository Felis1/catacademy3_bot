const { Telegraf } = require('telegraf');
const bot = new Telegraf('1420857612:AAFpEx-R5FniN4OCBGBwxlpE-v0jAfKQOR4');
bot.start((ctx) => {
    ctx.reply('Please send us a screenshot 📄 of your payment 💰 and your phone ☎️ number. We will contact you ASAP. Thank you very much, and we will see you in the course!😻😽');
    ctx.replyWithSticker('CAACAgIAAxkBAAKG5F_cbrrw__ecLqMM6mBqQ06l40fOAAIIAAPp2BMoePnrnGhu-XEeBA');
});

bot.launch();
