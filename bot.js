const { Bot } = require("grammy");
const bot = new Bot(process.env."7643629116:AAHh8ED9gQSb3YPbmgk1a47Ih5fqf7s4JLs"); // Get token from env variable
// Make an array of jokes

jokes = [
  "Why don’t skeletons fight each other? Because they don’t have the guts!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don’t programmers like nature? Too many bugs!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "What do you call fake spaghetti? An impasta!",
  "Why don’t eggs tell jokes? Because they might crack up!",
  "Why did the math book look sad? It had too many problems!",
  "Why can’t your nose be 12 inches long? Because then it would be a foot!",
  "What do you call a lazy kangaroo? A pouch potato!",
  "Why did the golfer bring an extra pair of pants? In case he got a hole in one!",
  "Why did the coffee file a police report? It got mugged!",
  "Why do cows have bells? Because their horns don’t work!",
  "What do you call a fish with no eyes? Fsh!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why don’t you ever see elephants hiding in trees? Because they’re so good at it!",
  "What’s orange and sounds like a parrot? A carrot!",
  "Why can’t you trust an atom? Because they make up everything!",
  "What do you call a factory that makes good products? A satisfactory!",
  "Why did the banana go to the doctor? Because it wasn’t peeling well!",
  "How do you organize a space party? You planet!",
];

// Register listeners to handle messages
bot.command("start", (ctx) => ctx.reply("Welcome! Type /joke to get a joke!"));
bot.command("joke", (ctx) => ctx.reply(jokes[Math.floor(Math.random() * jokes.length)]));


// Start the bot (using long polling)
bot.start();
