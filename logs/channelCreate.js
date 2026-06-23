const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');
module.exports=(client)=>{
client.on('channelCreate',async(channel)=>{
await sendLog(client,createEmbed('Channel Created',`Created: ${channel}`));
});
};
