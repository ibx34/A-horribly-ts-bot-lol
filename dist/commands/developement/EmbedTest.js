"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class EmbedTest extends discord_akairo_1.Command {
    constructor() {
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
                    default: (msg) => msg.member,
                },
            ],
        });
    }
    exec(message, { member }) {
        return message.util.send(new discord_js_1.MessageEmbed()
            .setTitle(`here is the id ${member.user.id}`)
            .setColor("RANDOM")
            .setDescription("Pretty epic ngl"));
    }
}
exports.default = EmbedTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1iZWRUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2RldmVsb3BlbWVudC9FbWJlZFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFFekMsMkNBQXVEO0FBRXZELE1BQXFCLFNBQVUsU0FBUSx3QkFBTztJQUM1QztRQUNFLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSw0QkFBNEI7Z0JBQ3JDLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRTtvQkFDUCxNQUFNO2lCQUNQO2FBQ0Y7WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRTtnQkFDSjtvQkFDRSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNO2lCQUN0QzthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksQ0FDVCxPQUFnQixFQUNoQixFQUFFLE1BQU0sRUFBMkI7UUFFbkMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDdEIsSUFBSSx5QkFBWSxFQUFFO2FBQ2YsUUFBUSxDQUFDLGtCQUFrQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQzVDLFFBQVEsQ0FBQyxRQUFRLENBQUM7YUFDbEIsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQ3JDLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFuQ0QsNEJBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZUVtYmVkLCBHdWlsZE1lbWJlciB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlZFRlc3QgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcInRlc3RcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJ0ZXN0XCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJkZXZlbG9wZW1lbnlcIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcIkp1c3QgYSBsaXR0bGUgdGVzdCBjb21tYW5kXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwiK3Rlc3RcIixcclxuICAgICAgICBleGFtcGxlOiBbXHJcbiAgICAgICAgICBcInRlc3RcIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgIGFyZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJtZW1iZXJcIixcclxuICAgICAgICAgIHR5cGU6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICBtYXRjaDogXCJyZXN0XCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiAobXNnOiBNZXNzYWdlKSA9PiBtc2cubWVtYmVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjKFxyXG4gICAgbWVzc2FnZTogTWVzc2FnZSxcclxuICAgIHsgbWVtYmVyIH06IHsgbWVtYmVyOiBHdWlsZE1lbWJlciB9LFxyXG4gICk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0VGl0bGUoYGhlcmUgaXMgdGhlIGlkICR7bWVtYmVyLnVzZXIuaWR9YClcclxuICAgICAgICAuc2V0Q29sb3IoXCJSQU5ET01cIilcclxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJQcmV0dHkgZXBpYyBuZ2xcIiksXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=