module.exports = {
    name: "codeml",
    description: "CodeML description",
    execute(message, args) {
        message.channel.send("Welcome to CodeML! Visit https://codeml.ca/ for more information!"
        + "\n If you want information about our challenges, try !challenge"
        + "\n Bienvenue à CodeML! Visitez https://codeml.ca/ pour plus d'informations!"
        + "\n Pour avoir de l'information sur les challenges, tapez !challenge"
        )
    },
};