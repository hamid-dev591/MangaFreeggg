const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('inviteCreate', async (invite)=>{
    await sendLog(client, createEmbed('Invite Created', `Code: ${invite.code}`));
  });
};
