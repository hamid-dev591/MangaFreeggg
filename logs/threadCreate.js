const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('threadCreate', async (thread)=>{
    await sendLog(client,createEmbed("Thread Created",`Name: ${thread.name}`));
  });
};
