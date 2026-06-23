const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');
module.exports=(client)=>{client.on('messageDelete',async m=>{if(!m.guild||m.author?.bot)return;const e=createEmbed('Message Deleted',`**User:** <@${m.author?.id}>\n**Channel:** ${m.channel}\n\n${m.content||'*No text*'}`);await sendLog(client,e);});};