import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { MessageEmbed, GuildMember } from "discord.js";

export default class EmbedTest extends Command {
  public constructor() {
    super("test", {
      aliases: ["test"],
      category: "developemeny",
      description: {
        content: "Just a little test command",
        usage: "+test",
        example: [
          "test",
        ],
      },
      ratelimit: 3,
      args: [
        {
          id: "member",
          type: "member",
          match: "rest",
          default: (msg: Message) => msg.member,
        },
      ],
    });
  }

  public exec(
    message: Message,
    { member }: { member: GuildMember },
  ): Promise<Message> {
    return message.util.send(
      new MessageEmbed()
        .setTitle(`here is the id ${member.user.id}`)
        .setColor("RANDOM")
        .setDescription("Pretty epic ngl"),
    );
  }
}
