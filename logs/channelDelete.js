const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');
module.exports=(client)=>{
client.on('channelDelete',async(channel)=>{
await sendLog(client,createEmbed('Channel Deleted',`Deleted: ${channel.name}`));
});
};
