const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('inviteDelete', async (invite)=>{
    await sendLog(client, createEmbed('Invite Deleted', `Code: ${invite.code}`));
  });
};
