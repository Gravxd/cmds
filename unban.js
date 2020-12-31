const { RichEmbed } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
    name: "unban",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`you got no perms`)
        if (message.deletable) message.delete();
        if (!args[0]) return message.channel.send(`no member`).then(m => m.delete(10000));
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`no perms`).then(m => m.delete(10000));
        }
        const ihavenoperms = new RichEmbed()
        .setColor("RED")
        .setDescription(`**Error!**\nI do not have permission to unban members.`);
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(ihavenoperms).then(m => m.delete(10000));
        const unBan = args[0];
        if(!unBan) return message.channel.send(nomember).then(m => m.delete(10000));
        const embed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setDescription(`**Success!**\n\n<@${unBan}> has been unbanned.`);
            message.guild.unban(unBan)
            message.channel.send(embed);    
    }
}
 // this command is in a command handler format however you can easily convert to a normal command within an `index.js` for example.
