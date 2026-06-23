const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('emojiCreate', async (emoji)=>{
    await sendLog(client, createEmbed('Emoji Created', `Emoji: ${emoji.name}`));
  });
};
