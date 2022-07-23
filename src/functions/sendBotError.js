/**
 * send an error to a webhook ❗
 * @param {import("discord.js").BaseInteraction | string} interaction this interaction; if this value is typeof string then it'll show as the source instead 🗯️
 * @param {import("discord.js").WebhookClientData} WebhookClientData webhook data to send this error to 📋
 * @param {Error} error the error that happened 📣
 * @param {boolean} [sendInteractionResponse=true] whether to use the interaction to show an error (to the user) or not 💭
 * @returns {Promise<void>} an error sent to the webhook, plus a response to the user if specified 📋
 */
module.exports = async (interaction, WebhookClientData, error, sendInteractionResponse = true) => {
   // imports
   const { BaseInteraction, WebhookClient, InteractionType, EmbedBuilder, Formatters } = require("discord.js");
   const { emojis, choice, noop, strip } = require("../../");


   // data validation
   if (!(interaction instanceof BaseInteraction || typeof interaction === `string`))
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › sendBotError: not a valid \`interaction\` parameter value ⚠️`);

   if (!WebhookClientData.id && !WebhookClientData.token && !WebhookClientData.url)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › sendBotError: not a valid \`WebhookClientData\` parameter value ⚠️`);

   if (!error instanceof Error)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › sendBotError: not a valid \`error\` parameter value ⚠️`);


   // this webhook
   const webhook = new WebhookClient(WebhookClientData);


   // what type of interaction this is
   const interactionType = (() => {
      switch (true) {
         case interaction.type === InteractionType.ApplicationCommandAutocomplete: return [ `autocomplete interaction`, `autocomplete`         ];
         case interaction.isButton?.():                                            return [ `button`,                   `button`               ];
         case interaction.isChatInputCommand?.():                                  return [ `slash command`,            `chat-input`           ];
         case interaction.isMessageContextMenuCommand?.():                         return [ `message command`,          `message-context-menu` ];
         case interaction.type === InteractionType.ModalSubmit:                    return [ `modal`,                    `modal-submit`         ];
         case interaction.isSelectMenu?.():                                        return [ `select menu`,              `select-menu`          ];
         case interaction.isUserContextMenuCommand?.():                            return [ `user command`,             `user-context-menu`    ];
         default:                                                                  return [ `interaction`,              `unknown`              ];
      };
   })();


   // name of this command/its custom id/whatever
   const name = [
      interaction.commandName,
      interaction?.options?.getSubcommandGroup?.(false),
      interaction?.options?.getSubcommand?.(false)
   ]
      .filter(Boolean)
      .join(` `)
   || interaction.customId;


   // wacky responses
   const response = choice([
      `${emojis.blushy} ahhhhh! what just happened?!`,
      `${emojis.spiky_speech_bubble} that wasn't supposed to happen..`,
      `${emojis.sweats} well, this is awkward..`,
      `${emojis.hug} don't worry! this thing'll be fixed soon~`,
      `${emojis.boooo} boooo!`,
      `${emojis.stop} stop right there, criminal scum!`,
      `${emojis.music_notes} what the hell am i doin' here? i don't belong here..~`,
      `${emojis.national_park} how about going out for some air while you wait for this to be fixed?`,
      `${emojis.aie} take that! -and this!`,
      `${emojis.pbjt} ..ahh, that's apples mate.`,
      `${emojis.shhh} shhh! this is top secret stuffs!!`,
      `${emojis.ow} this is like watching a train wreck in slow motion, man`,
      `${emojis.dab} \\*BAM\\*`,
      `${emojis.yoshifall} not good!`,
      `${emojis.scree} \\*confused sergal screaming noises\\*`,
      `${emojis.slurp} \\*slurp\\*`,
      `${emojis.nom} nom, nom, eat this.. nom, nom.`,
      `${emojis.woah} got damn!`,
      `${emojis.pawbs} look at all these beans`,
      `${emojis.ooh} i think this code here is, well, drunken`,
      `${emojis[`BWAH`]} BLOODY HELL!`,
      `${emojis.onoes} oh noes! another error!`,
      `${emojis.wrench} so this is what happens when you entrust a furry with development, huh`,
      `${emojis.airplane[1]} destination: unknown`,
      `${emojis.loading} ||y||||o||||u|||| ||||h||||a||||v||||e|||| ||||b||||e||||e||||n|||| ||||e||||n||||t||||e||||r||||t||||a||||i||||n||||e||||d||||!||`,
      `${emojis[`EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE`]} ooh boy, another bug to squash!`,
      `${emojis.happ}${emojis.happ}${emojis.happ}`,
      `${emojis[`FOX`]} here's a fox for moral support~`,
      `${emojis.hwat} no amount of washi tape can fix this!`,
      `${emojis.facepaw} sorry we've left you astray!`,
      `${emojis.muh} either the dumb furry dev got something wrong or you broke this (accidentally?)`,
      `${emojis.pfff} we, too, really have no idea as to what has happened..`,
      `${emojis.oi} EY! ERROR!`,
      `${emojis.yeet} ..i can't think of a witty comment including the word "yeet" \\*~ dev furry\\*`,
      `${emojis.yaya} welcome! you've just discovered our secret party!`,
      `${emojis.bap} this ain't it, stop!`,
      `${emojis.cutie} there's gotta be some room for cute furry boys....right?`,
      `${emojis.bah} well, you don't see \\*that\\* every day!`
   ]);


   // embeds
   const embeds = [
      // user
      new EmbedBuilder()
         .setColor(`#f60000`)
         .setDescription(strip`
            ${emojis.rip} **an error occurred with this ${interactionType[0]}..**
            > ${response}
         `)
         .setFooter({
            text: `🆔 ${interaction.id}`
         }),

      // dev
      new EmbedBuilder()
         .setColor(`#f60000`)
         .setDescription(strip`
            ${emojis.rip} **ayo!! error!!**
            > ${emojis.spiky_speech_bubble} \`${interaction instanceof BaseInteraction ? `${interactionType[1]}\`/\`${name}` : interaction}\`
            > ${emojis.calendar_spiral} ${Formatters.time(Math.round((interaction.createdTimestamp || Date.now()) / 1000))}

            \`\`\`js
            ${error}
            \`\`\`
         `)
         .setFooter({
            text: interaction instanceof BaseInteraction ? `🆔 ${interaction.id}` : null
         })
   ];


   try {
      if (interaction instanceof BaseInteraction && sendInteractionResponse)
         try {
            // attempt to defer the reply ephemerally, if not then assume the interaction has been replied to already
            await interaction.deferReply({
               ephemeral: true
            });

         } catch {
            noop;

         } finally {
            // this *could* have a chance of throwing an error (user deleting message, guild deleted..)
            try {
               await interaction.editReply({
                  content: null,
                  embeds: [
                     embeds[0]
                  ],
                  files: [],
                  components: []
               });

            } catch {
               noop;
            };

            noop;
         };


   } finally {
      // send to webhook
      void await webhook.send({
         embeds: [
            embeds[1]
         ]
      });
   };
};