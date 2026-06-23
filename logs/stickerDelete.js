const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('stickerDelete', async (sticker)=>{
    await sendLog(client,createEmbed("Sticker Deleted",`Name: ${sticker.name}`));
  });
};
