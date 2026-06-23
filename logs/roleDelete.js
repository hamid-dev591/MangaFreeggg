const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');
module.exports=(client)=>{
client.on('roleDelete',async(role)=>{
await sendLog(client,createEmbed('Role Deleted',`Role: ${role.name}`));
});
};
