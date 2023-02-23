client.on('guildMemberAdd', (member) => {
   const role = member.guild.roles.cache.get("")//Role Id
   member.roles.add(role).catch(() => { })})