const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');
module.exports=(client)=>{client.on('guildMemberAdd',async m=>{const e=createEmbed('Member Joined',`Welcome <@${m.id}>\nAccount: ${m.user.tag}`,'#00ff66');await sendLog(client,e);});};