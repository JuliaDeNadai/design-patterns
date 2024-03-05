import * as readline from "readline"
import { CheckPermissionMiddleware } from "./middlewares/check-permission-middlleware";
import { CheckUserMiddleware } from "./middlewares/check-user-middleware";
import { Server } from "./servers/server";


declare var process: { stdin: any; stdout: any }
const server = new Server()

function setPromptQuestions(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question("Digite seu email: ", email => {
        rl.question("Digite sua senha:", password => {
            server.logIn(email, password)

            rl.close()
        })
    })

    rl.on("close", () => setPromptQuestions)
}

const middleware = new CheckUserMiddleware()

middleware.linkWith(new CheckPermissionMiddleware())
server.setMiddleware(middleware)


setPromptQuestions()