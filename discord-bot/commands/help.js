const HELP_TEXT = "Available commands:"
+ "\n !help: print this message"
+ "\n !codeml: welcoming and general info"
+ "\n !challenge [#]: challenges info, where [#] are optional values from 1 to 6"
+ "\n "
+ "\n Commandes disponibles:"
+ "\n !help: afficher ce message"
+ "\n !codeml: informations générales"
+ "\n !challenge [#]: informations sur les challenges, où [#] sont des valeurs optionelles de 1 à 6"

module.exports = {
    name: "help",
    description: "Help command",
    execute(message, args) {
        message.channel.send(HELP_TEXT)
    },
};