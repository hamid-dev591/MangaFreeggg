const createEmbed=require('../utils/embed');
const sendLog=require('../utils/sendLog');
module.exports=(client)=>{
client.on('roleCreate',async(role)=>{
await sendLog(client,createEmbed('Role Created',`Role: ${role.name}`));
});
};
