"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
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
        });
    }
    exec(message) {
        return message.util.send(`Ping - Pong is a vert interesting game. Here is my ping btw: \`${this.client.ws.ping}ms\``);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZ0NvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvdXNlciBjb21tYW5kcy9QaW5nQ29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUd6QyxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDOUM7UUFDRSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLE1BQU07aUJBQ1A7YUFDRjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBRWIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFnQjtRQUMxQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0QixrRUFBa0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQzVGLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUF0QkQsOEJBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJwaW5nXCIsIHtcclxuICAgICAgYWxpYXNlczogW1wicGluZ1wiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwidXNlciBjb21tYW5kc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiQ2hlY2sgbXkgcGluZ1wiLFxyXG4gICAgICAgIHVzYWdlOiBcIitwaW5nXCIsXHJcbiAgICAgICAgZXhhbXBsZTogW1xyXG4gICAgICAgICAgXCJwaW5nXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgICAvLyBjb29sZG93blxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoXHJcbiAgICAgIGBQaW5nIC0gUG9uZyBpcyBhIHZlcnQgaW50ZXJlc3RpbmcgZ2FtZS4gSGVyZSBpcyBteSBwaW5nIGJ0dzogXFxgJHt0aGlzLmNsaWVudC53cy5waW5nfW1zXFxgYCxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==