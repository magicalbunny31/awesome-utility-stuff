/**
 * hello there, curious user! 👋
 * this thing here was made specifically for bun 🐰🐾 and fox kit 🦊🐾
 * so if you've somehow gotten ahold of this package.. 📦
 * ..and trying to figure out how it all works.. ❓
 * ..it might be hard! sorry heheh 🐰🦊🐺🦌
 * ~ magicalbunny31 🐾
 */


/**
 * send an error response ❗
 * @param {import("../../types/index").ApplicationCommandInteraction} interaction interaction to edit 🗨️
 * @param {import("../../types/index").BotErrorInfoInteraction | import("../../types/index").BotErrorInfoAPI | import("../../types/index").BotErrorInfoError} data data to send for this error 📋
 */
module.exports = async (interaction, data) => {
   const { type, colours, webhook: webhookData, prefix, botName, data: errorData } = data;

   const [ primary, secondary ] = colours;


   // imports
   const { MessageEmbed, WebhookClient, Formatters } = require("discord.js");
   const colour = require("color");
   const { emoji, emojis, choice, httpStatusInfo, noop, number, strip, wait } = require("../../");


   // random responses
   const responses = {
      executing: [
         `executing..`, `executing command..`, `executing command ${errorData.emoji} \`${prefix}${errorData.commandName}\`..`,
         `running..`, `running command..`, `running command ${errorData.emoji} \`${prefix}${errorData.commandName}\`..`,
         `using..`, `using command..`, `using command ${errorData.emoji} \`${prefix}${errorData.commandName}\`..`
      ],

      waiting: [
         `waiting for a response..`, `..is this thing even on?`, `watching really awesome fox videos..`,
         `questioning life choices..`, `awaiting for a response..`, `..it's still loading`,
         `continuing waiting..`, `come on, stupid server`, `give it some time, it'll load eventually`,
         `looking at cute foxes..`, `hold on while this loads..`, `..does the bar below really mean anything?`,
         `reading the latest discord blog post..`, `loading a command for another user..`, `analysing data..`,
         `processing some information..`, `relaxing in the sun..`, `debugging my code..`,
         `taking a quick break..`, `eating cinnamon rolls..`, `petting foxes..`,
         `reading the database..`, `calling a thread worker..`, `thinking on what to do next..`,
         `paws ${emojis.pawbs}`, `FOX FOX FOX ${emojis[`FOX`]}`, `${emojis.bugsquash1}${emojis.bugsquash2}${emojis.bugsquash3}`,
         `${emojis.congaparrot}${emojis.congaparrot}${emojis.congaparrot}${emojis.congaparrot}${emojis.congaparrot}`,
         `zzz..~ ${emojis.foxsnug}`, `look at this box! ${emojis.foxbox}`, `playing a game..`,
         `${emojis.default}${emojis.pbjt}${emojis.russian}${emojis.cheer}${emojis.laughing}${emojis.floss}${emojis.juggling}${emojis.dab}`,
         `${emojis.furdancing}${emojis.furdancing}${emojis.furdancing}${emojis.furdancing}${emojis.furdancing}`,
         `${emojis.typing}`, `thinking..`, `${emojis.typing} ${botName.replace(emoji, e => `\\${e}`)} is thinking..`
      ],

      nearlyThere: [
         `nearly there..`, `so close!`, `completion is imminent!`,
         `about to finish!`, `one more step..`, `can't wait to see the end result~`,
         `one second away from completion!`, `${errorData.emoji} \`${prefix}${errorData.commandName}\` is about to return something!`,
         `pre-finish party! ${emojis.yaya}`, `i'm stoked for the result!`, `look! it's happening!`,
         `just one more second!`, `woah!`, `i'm excited for this!`
      ],

      what: [
         `huh ${emojis.muh}`, `..huh`, `..huh?`, `..huh?!`, `huh?`,
         `what just happened?`, `what just happened?!`, `that wasn't supposed to happen`,
         `hmmph`, `hmmph.`, `hmmph..`, `hmmph!`,
         `ack`, `ack.`, `ack..`, `ack!`,
         `eep!`, `eep!!`,
         `..uh`, `so, uh..`, `..uhm`, `uhm..`,
         `uh-oh..`, `oh-oh`,
         `whoops!`,
         `aw heck`, `aw heck.`, `aw heck..`,
         `drat`, `drat.`, `drat..`, `drat!`,
         `it was soo close..`, `not fairrrr..`, `why must it be like this?`, `this is so unfair!`,
         `but....i..`, `oof ${emojis.yoshifall}`, `oof ${emojis.rip}`, `oof!`,
         `pff!! ${emojis.pfff}`, `bwah! ${emojis.pfff}`, `bwah! ${emojis[`BWAH`]}`,
         `whyyyyyy ${emojis.nuuu}`, `ahh! ${emojis.blushy}`,
         `what ${emojis.hwat}`, `what ${emojis.what}`, `..what`, `..what?`, `..whaat?`, `..what?!`, `whaat?!`, `what?`, `whaat?`,
         `wait what`, `well....whatever ${emojis.shrug}`,
         `i guess some things aren't never meant to be ${emojis.shrug}`,
         `oh noes ${emojis.onoes}`, `oh noes!`,
         `grr ${emojis.pout}`, `aaaaaaaaahh!! ${emojis.scree}`, `arrgh`,
         `where's the good ending?`, `where's the good ending?!`, `this is stupid`,
         `..was that right? no? aw, heck.`, `that wasn't supposed to happen..`,
         `i couldn't get everything back in one piece..`, `i'm sorry!`,
         `apologies for that..`, `..i was too lazy to get that, yeah..`,
         `in case of error, i have to stop; so that's what i did`,
         `sorry about that..`, `i blame the internet for that happening!`,
         `what happened here?`, `oh, this is horrible!`, `you know what, i'll take the blame for messing up that..`,
         `i'm off beam, it seems`, `no way!`, `i'm shook.`, `hmmm.. ${emojis.furthinking}`,
         `uhm.. ${emojis.sweats}`, `noo! ${emojis.stop}`, `oi! ${emojis.oi}`, `stop it!! ${emojis.bap}`,
         `soo....you see.. ${emojis.sweats}`, `stupid, stupid, stupid! ${emojis.ow}`,
         `fur fox sake! ${emojis.yeet}`, `rip ${emojis.rip}`, `noooo ${emojis.noooo}`
      ],

      title: [
         `what happened?`, `what just happened?`,
         `something happened?`, `huh? something happened?`,
         `an error occurred?`,
         `did something go wrong?`,
         `what went wrong?`,
         `there was an error?`,
         `hmm?`,
         `something wrong?`,
         `wait, there was an error?`
      ],

      error: [
         `something awful happened with ${errorData.emoji} \`${prefix}${errorData.commandName}\`..`,
         `a error occurred while i tried to run ${errorData.emoji} \`${prefix}${errorData.commandName}\`..`,
         `i came across an error with ${errorData.emoji} \`${prefix}${errorData.commandName}\`..`,
         `command ${errorData.emoji} \`${prefix}${errorData.commandName}\` gave me an error..`,
         `i found an uncaught exception with ${errorData.emoji} \`${prefix}${errorData.commandName}\`..`,
         `a mistake was found with ${errorData.emoji} \`${prefix}${errorData.commandName}\`..`,
         `the command ${errorData.emoji} \`${prefix}${errorData.commandName}\` is a fallacy! it doesn't work!`,
         `i regret to inform you but ${errorData.emoji} \`${prefix}${errorData.commandName}\` is erroring right now..`,
         `sorry, but ${errorData.emoji} \`${prefix}${errorData.commandName}\` is currently broken..`
      ],

      suggestion: [
         `you should try using it again later!`,
         `i suggest you try again later!`,
         `try using the command again later!`,
         `give it a while and try again in a bit kitto~`,
         `maybe try using the command again in a bit!`,
         `rest for now and use the command later..`,
         `be patient as the command may need some time to cool off..`,
         `try using it again later....i'll say`,
         `it might fix itself in a bit, so wait a bit for now`,
         `wait a while as it could fix itself!`
      ],

      owner: [
         `in the meantime, i'll go notify my owner of this..`,
         `as you ponder on that, i'll make a note of this interaction..`,
         `excuse me for a second, let me go yap at my owner..`,
         `while you wait, i'll see if i can find a solution..`,
         `now, let me find out the source of this error..`,
         `..but don't fret! i'm sure my owner can fix this in a jiffy!`,
         `stay calm, my owner probably knows what went wrong~`,
         `sorry you had to experience the error; i hope it'll be fixed soon!`,
         `..now, where's my owner when you need him?`,
         `well i gotta go tell my owner of what happened now..`
      ]
   };


   // error
   const statusInfo = httpStatusInfo(errorData.apiName, errorData.responseCode);

   const error = type === `api`
      ? `${statusInfo.code} ${statusInfo.shortDescription}`
      : errorData.error;

   const suggestion = type === `api`
      ? `\n` + strip`
         » **code** › \`${statusInfo.code} ${statusInfo.shortDescription}\`
         » **api** › **\`${errorData.apiName}\`**
         » **description** › ${statusInfo.description}
         » **possible fix** › ${statusInfo.fix}
         » **more info** › [link](${statusInfo.link} "${statusInfo.link} 🔗\nview more detailed information about this error on Mozilla's MDN docs! 🐾")
      `
      : choice(responses.suggestion);


   // embeds
   const embeds = {
      user: [
         new MessageEmbed({
            color: primary,
            description: strip`
               ${emojis.loading} **${choice(responses.executing)}**
               **\`  0%\` »** □□□□□□□□□□ **» \`100%\`**
            `
         }),

         new MessageEmbed({
            color: secondary,
            fields: [{
               name: `${choice(responses.title)} ${emojis.bomb}`,
               value: strip`
                  ${choice(responses.error)} ${emojis.yoshifall}
                  ${suggestion}

                  ${choice(responses.owner)}
                  > **id** › \`${interaction.id}\` ${emojis.furthinking}
               `,
               inline: false
            }]
         })
      ],

      bun: [
         new MessageEmbed({
            color: primary,
            fields: [{
               name: `caught exception! ${emojis.bang}`,
               value: strip`
                  » **origin** › \`${
                     type === `interaction`
                        ? `${errorData.interactionType}/${errorData.commandName}` // interaction
                        : type === `api`
                           ? `${errorData.interactionType}/${errorData.commandName}/${errorData.apiName}` // api
                           : `${errorData.origin}` // error
                  }\`
                  » **type** › \`automated\`

                  » **date** › ${Formatters.time(Math.round(interaction.createdTimestamp / 1000))}
                  » **id** › \`${interaction.id}\`
               `,
               inline: false
            }]
         }),

         new MessageEmbed({
            color: `#ff0000`,
            description: Formatters.codeBlock(`js`, error)
         })
      ]
   };


   // user-facing error
   const sendUserError = async () => {
      const waitingResponses = choice(responses.waiting, 4);
      let percentage = 0;

      // creates an awesome bar
      const generateBar = percentage => {
         const numberOfBlocks = Math.round(percentage / 10);
         return `${`■`.repeat(numberOfBlocks)}${`□`.repeat(10 - numberOfBlocks)}`;
      };

      await wait(500);

      // array of random number ranges for generating the percentage
      const randomNumberRanges = [
         [ 20, 25 ],
         [ 25, 30 ],
         [ 10, 15 ],
         [ 15, 20 ]
      ];

      for (let i = 0; i < 4; i ++) {
         percentage += number(...randomNumberRanges[i]);

         embeds.user[0].description = strip`
            ${emojis.loading} **${waitingResponses[i]}**
            **\` ${percentage}%\` » ${generateBar(percentage)} » \`100%\`**
         `;

         await interaction.editReply({
            embeds: [ embeds.user[0] ]
         });

         await wait(1000);
      };

      for (let i = 0; i < 2; i ++) {
         if (i) // will run on second interaction
            embeds.user[0].color = primary === `#ff0000`
               ? colour(primary).darken(.5).hex()
               : `#ff0000`; // change the colour slightly if the primary colour is already #ff0000

         embeds.user[0].description = strip`
            ${!i ? emojis.loading : emojis.no} **${!i ? choice(responses.nearlyThere) : choice(responses.what)}**
            **\` 99%\` »** ■■■■■■■■■□ **» \`100%\`**
         `;

         await interaction.editReply({
            embeds: [ embeds.user[0] ]
         });

         await wait(1000);
      };

      await wait(1000); // 1000ms + 1000ms = 2000ms (2s)

      embeds.user[0].description = strip`
         ${emojis.no} **${emojis.foxsleep}**
         **\` 99%\` »** ■■■■■■■■■□ **» \`100%\`**
      `;

      await interaction.editReply({
         embeds: embeds.user
      });
   };


   // server-side error
   const sendServerError = async () => {
      const webhook = new WebhookClient(webhookData);

      return await webhook.send({ //? send this embed with the error to a webhook
         username: `» ${botName} › errors`,
         embeds: embeds.bun
      });
   };


   try {
      try {
         // attempt to defer the reply ephemerally, if not then assume the interaction has been replied to already
         await interaction.deferReply({
            ephemeral: true
         });

      } catch {
         noop;

      } finally {
         if ([ `interaction`, `api` ].includes(type))
            await sendUserError(); // this *could* have a chance of throwing an error (user deleting message, guild deleted..)

         throw noop; // throw to catch
      };


   } catch {
      await sendServerError();
   };
};