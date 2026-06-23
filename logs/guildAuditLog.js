const { AuditLogEvent }=require('discord.js');

module.exports=(client)=>{
  client.on('channelDelete', async (channel)=>{
    try{
      const logs=await channel.guild.fetchAuditLogs({type:AuditLogEvent.ChannelDelete,limit:1});
      const entry=logs.entries.first();
      if(entry){
        console.log(`${entry.executor.tag} deleted ${channel.name}`);
      }
    }catch(e){}
  });
};
