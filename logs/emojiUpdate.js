const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('emojiUpdate', async (oldEmoji,newEmoji)=>{
    if(oldEmoji.name===newEmoji.name) return;
    await sendLog(client, createEmbed('Emoji Updated', `Before: ${oldEmoji.name}\nAfter: ${newEmoji.name}`));
  });
};
