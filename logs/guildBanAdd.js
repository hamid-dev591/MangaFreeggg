const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('guildBanAdd', async (ban)=>{
    await sendLog(client, createEmbed('Member Banned', `User: ${ban.user.tag}`));
  });
};
