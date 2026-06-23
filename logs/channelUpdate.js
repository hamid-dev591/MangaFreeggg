const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');
module.exports=(client)=>{
client.on('channelUpdate',async(oldChannel,newChannel)=>{
if(oldChannel.name===newChannel.name) return; await sendLog(client,createEmbed('Channel Updated',`**Before:** ${oldChannel.name}\n**After:** ${newChannel.name}`));
});
};
