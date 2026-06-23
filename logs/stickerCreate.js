const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('stickerCreate', async (sticker)=>{
    await sendLog(client,createEmbed("Sticker Created",`Name: ${sticker.name}`));
  });
};
