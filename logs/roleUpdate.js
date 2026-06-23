const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');
module.exports=(client)=>{
client.on('roleUpdate',async(oldRole,newRole)=>{
if(oldRole.name===newRole.name) return; await sendLog(client,createEmbed('Role Updated',`**Before:** ${oldRole.name}\n**After:** ${newRole.name}`));
});
};
