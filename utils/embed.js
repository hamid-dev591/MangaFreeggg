const { EmbedBuilder } = require("discord.js");

module.exports = (
  title,
  description,
  color = "#ff0000",
  fields = [],
  footer = "HamidDev Network Log"
) => {
  const embed = new EmbedBuilder()
    .setColor(color)
    .setTitle(`🔴 ${title}`)
    .setDescription(description)
    .setTimestamp()
    .setFooter({ text: footer });

  if (fields.length) embed.addFields(fields);

  return embed;
};
