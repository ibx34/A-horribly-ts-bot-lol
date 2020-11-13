import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class PingCommand extends Command {
  public constructor() {
    super("ping", {
      aliases: ["ping"],
      category: "user commands",
      description: {
        content: "Check my ping",
        usage: "+ping",
        example: [
          "ping",
        ],
      },
      ratelimit: 3,
      // cooldown
    });
  }

  public exec(message: Message): Promise<Message> {
    return message.util.send(
      `Ping - Pong is a vert interesting game. Here is my ping btw: \`${this.client.ws.ping}ms\``,
    );
  }
}
