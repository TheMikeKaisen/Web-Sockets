import { WebSocketServer } from "ws";

// to create a new web socket server
// this is just like we use : const app = express();
const wss = new WebSocketServer({port: 8080});

// to connect to the server that we just created!
// this basically states that whenever there is a connection ( whenever you connect to the specified port)
// print user connected on the console.
wss.on("connection", function(socket){
    console.log("user connected!")

    // whenever a user connects, i am sending a random value every 1 second to the user.
    setInterval(() => {
        socket.send(Math.random());
    }, 1000);

    // to receive a message sent by the user
    // NOTE: we are using socket here("socket" as in the name received as a parameter while wss.on("connection", function(socket)))
    socket.on("message", function(msg){
        console.log(msg.toString());
    })
})