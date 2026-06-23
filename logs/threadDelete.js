const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('threadDelete', async (thread)=>{
    await sendLog(client,createEmbed("Thread Deleted",`Name: ${thread.name}`));
  });
};
