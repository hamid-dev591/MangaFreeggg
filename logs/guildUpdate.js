const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('guildUpdate', async (oldGuild,newGuild)=>{
    if(oldGuild.name===newGuild.name) return;
    await sendLog(client, createEmbed('Server Updated', `Before: ${oldGuild.name}\nAfter: ${newGuild.name}`));
  });
};
