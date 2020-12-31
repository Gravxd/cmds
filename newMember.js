client.on('guildMemberAdd', member => {
  const role = member.guild.roles.find(r => r.id === 'roleidhere')
  member.addRole(role.id)
})


// This can be used if you want a message + role to be given


client.on('guildMemberAdd', member => {
   const role = memeber.guild.roles.find(r => r.id === 'roleidhere')
   member.addRole(role.id)
   const welcomeChannel = member.guild.channels.find(c => c.id === 'welcomechannelid')
   welcomeChannel.send(`Welcome ${member} to the server!`)
})
