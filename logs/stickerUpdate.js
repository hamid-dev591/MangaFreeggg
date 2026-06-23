const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');

module.exports=(client)=>{
  client.on('stickerUpdate', async (oldSticker,newSticker)=>{
    if(oldSticker.name===newSticker.name) return;
    await sendLog(client,createEmbed("Sticker Updated",`Before: ${oldSticker.name}\nAfter: ${newSticker.name}`));
  });
};
