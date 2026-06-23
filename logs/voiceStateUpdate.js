const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');
module.exports=(client)=>{
client.on('voiceStateUpdate',async(oldState,newState)=>{
let msg=''; if(!oldState.channel&&newState.channel) msg=`<@${newState.id}> joined ${newState.channel}`; else if(oldState.channel&&!newState.channel) msg=`<@${newState.id}> left ${oldState.channel}`; else if(oldState.channelId!==newState.channelId) msg=`<@${newState.id}> moved ${oldState.channel} ➜ ${newState.channel}`; if(!msg) return; await sendLog(client,createEmbed('Voice Update',msg));
});
};
