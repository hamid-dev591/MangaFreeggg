module.exports = async (client, embed) => {
  const channel = client.channels.cache.get(process.env.LOG_CHANNEL_ID);
  if (!channel) return;
  await channel.send({ embeds: [embed] }).catch(() => {});
};
