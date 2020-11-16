var fs = require("fs");

function secretWinnerName() {
    return fs.readFileSync('secretwinner.txt', 'utf-8');

}

function setWinnerName(winnerName) {
    fs.writeFile('secretwinner.txt', winnerName, function(err) {
        if (err) {
           return console.error(err);
        }
    });
}


module.exports = {
    name: "secret",
    execute(client, message, secretWord) {
        if(message.content.toLowerCase().includes(secretWord)) {
            var winner = secretWinnerName();
            console.log(winner);
            if(winner === ""){
                message.channel.send("OMGGG HOLY MOLLY YOU FOUND THE SECRET WORD CONGRATS");
                message.reply("Contact us to receive a prize!");
                message.react('😄');
                message.react('🥳');
                message.react('🎉');
                message.react('✨');
                message.react('🔥');
                message.channel.send("\“The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.\”            ― Edsger W. Dijkstra");
                
                console.log(winner)
                setWinnerName(winner)
            } else {
                message.channel.send("Sorry, " + winner + " already found the secret word!")
            }
            
        }
        if(message.content.toLowerCase().includes("fuck")) {
            message.channel.send("Don't swear this is a christian server");
        }
        if(message.content.toLowerCase().includes("haha") || message.content.toLowerCase().includes("xd")) {
            message.channel.send("XXDDDDDDD");
        }
        return;
    },
};