import { Listener } from "discord-akairo";
import { ETIME } from "constants";

export default class ReadyListener extends Listener {
  public constructor() {
    super("ready", {
      emitter: "client",
      event: "ready",
      category: "client",
    });
  }

  public exec(): void {
    console.log(`${this.client.user.tag} is now online.`);
  }
}
