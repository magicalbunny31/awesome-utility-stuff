/**
 * defer `Discord.ActionRow` `Discord.Component`s on a `Discord.Message` 💭
 * @param {string} customId custom_id of a `Discord.Component` to display as deferred 🚩
 * @param {string[] | import("discord.js").ActionRow[]} valuesOrComponents default option values of the select menu 📋 // `Discord.Component`s (in `Discord.ActionRow`s) to defer 🔘
 * @param {import("discord.js").ActionRow[]} components `Discord.Component`s (in `Discord.ActionRow`s) to defer 🔘
 * @returns {import("discord.js").ActionRow[]} deferred `Discord.Component`s (in `Discord.ActionRow`s) ✅
 */
module.exports = (customId, valuesOrComponents, components) => {
   // imports
   const { emojis } = require("../../");
   const { ActionRow, BaseSelectMenuComponent, ButtonComponent, parseEmoji } = require("discord.js");


   // parameters
   const values          = components ? valuesOrComponents : undefined;
   const deferComponents = components || valuesOrComponents;


   // data validation
   if (typeof customId !== `string`)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › deferComponents: not a valid \`customId\` parameter value ⚠️`);

   if (values && !values.every(value => typeof value === `string` || value instanceof String))
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › deferComponents: not a valid \`values\` parameter value ⚠️`);

   if (!deferComponents.every(component => component instanceof ActionRow))
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › deferComponents: not a valid \`components\` parameter value ⚠️`);


   // find indexes
   const foundActionRowIndex = deferComponents.findIndex(component => component.components.some(component => component.customId === customId));

   const foundComponent      = deferComponents[foundActionRowIndex].components.find     (component => component.customId === customId);
   const foundComponentIndex = deferComponents[foundActionRowIndex].components.findIndex(component => component.customId === customId);


   // no foundComponent
   if (!foundComponent)
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › deferComponents: component not found ⚠️`);


   if (foundComponent instanceof ButtonComponent) { // this is a button
      deferComponents[foundActionRowIndex].components[foundComponentIndex].data.emoji = parseEmoji(emojis.loading);


   } else if (foundComponent instanceof BaseSelectMenuComponent) { // this is a select menu
      const options = deferComponents[foundActionRowIndex].components[foundComponentIndex].data.options;

      for (const option of options)
         option.default = false;

      for (const option of options)
         if (values.includes(option.value))
            Object.assign(option, {
               emoji: parseEmoji(emojis.loading),
               default: true
            });


   } else // uhm uh uhh can't defer this component
      throw new TypeError(`@magicalbunny31/awesome-utility-stuff › deferComponents: can't defer this component - try deferring the interaction instead ⚠️`);


   // disable all components
   for (const actionRow of deferComponents)
      for (const component of actionRow.components)
         component.data.disabled = true;


   // return the deferred components
   return deferComponents;
};