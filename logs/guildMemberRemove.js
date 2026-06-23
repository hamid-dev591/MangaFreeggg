const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');
module.exports=(client)=>{client.on('guildMemberRemove',async m=>{const e=createEmbed('Member Left',`User: ${m.user.tag}`);await sendLog(client,e);});};