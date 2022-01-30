import { PermissionString, ApplicationCommandData, ButtonInteraction, ContextMenuInteraction, SelectMenuInteraction, ApplicationCommandOptionChoice } from "discord.js";
import { createClient } from "redis";

type RedisClientType = ReturnType<typeof createClient>;


export type settings = {
   includeImages: boolean;
   ephemeral:     boolean;
   colours:       [ string, string, string ];
   locale:        string;
};


export type common = [
   typeof import("../config.json"),
   RedisClientType
];


export type connections = {
   sessionId:           string;
   userId:              string;
   voiceChannelId:      string;
   timestamp:           number;
   isEligible:          boolean;
   remainingEarnCycles: number;
};


interface BaseCommand {
   name:         string;
   category:     string;
   subcategory?: string;
   description:  string;

   permissions: {
      bun:    PermissionString[];
      member: PermissionString[]
   };

   isWorking:      boolean;
   isGuildCommand: boolean;
   cooldown:       number;
   apis?:          string[];

   usage: string;

   getAutocompleteChoices?: (interaction: ApplicationCommandData) => Promise<ApplicationCommandOptionChoice[]>;

   comment: string;

   data?: ApplicationCommandData;

   default: (interaction: ApplicationCommandData, settings: settings, common: common) => Promise<void>;
};


export type Command = BaseCommand | ContextMenuCommand;


export interface SubcommandParent extends Omit<Command, "category" | "subcategory" | "description" | "permissions" | "isWorking" | "cooldown" | "apis" | "usage" | "getAutocompleteChoices" | "comment" | "default"> {
   isParent: true
};


export interface ButtonCommand extends Omit<Command, "category" | "subcategory" | "description" | "permissions" | "isWorking" | "isGuildCommand" | "cooldown" | "apis" | "usage" | "getAutocompleteChoices" | "data" | "comment" | "default"> {
   default: (interaction: ButtonInteraction, settings: settings, common: common) => Promise<void>;
};


export interface ContextMenuCommand extends Omit<Command, "category" | "subcategory" | "description" | "permissions" | "isWorking" | "cooldown" | "apis" | "usage" | "getAutocompleteChoices" | "comment" | "default"> {
   default: (interaction: ContextMenuInteraction, settings: settings, common: common) => Promise<void>;
};


export interface SelectMenuCommand extends Omit<Command, "category" | "subcategory" | "description" | "permissions" | "isWorking" | "isGuildCommand" | "cooldown" | "apis" | "usage" | "getAutocompleteChoices" | "data" | "comment" | "default"> {
   default: (interaction: SelectMenuInteraction, settings: settings, common: common) => Promise<void>;
};