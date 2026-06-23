const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('emojiDelete', async (emoji)=>{
    await sendLog(client, createEmbed('Emoji Deleted', `Emoji: ${emoji.name}`));
  });
};
