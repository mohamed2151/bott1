client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("518758073750519808");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`نورتنا`), 4000)        
}
});
