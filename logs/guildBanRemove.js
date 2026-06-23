const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('guildBanRemove', async (ban)=>{
    await sendLog(client, createEmbed('Ban Removed', `User: ${ban.user.tag}`));
  });
};
