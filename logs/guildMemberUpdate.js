const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('guildMemberUpdate', async (oldMember,newMember)=>{
    if(oldMember.nickname===newMember.nickname && oldMember.roles.cache.size===newMember.roles.cache.size) return;
    const embed=createEmbed("Member Updated",`User: ${newMember.user.tag}\nNickname: ${oldMember.nickname||'None'} ➜ ${newMember.nickname||'None'}`);
    await sendLog(client,embed);
  });
};
