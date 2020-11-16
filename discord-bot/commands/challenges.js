const CHALLENGES = [
    "Challenge 1: Clustering http://www.kaggle.com/c/codeml-challenge1 \n",
    "Challenge 2: Anomaly detection | Détection d'anomalies http://www.kaggle.com/c/codeml-challenge2 \n",
    "Challenge 3: Political sentiment analysis | analyse de sentiments politiques http://www.kaggle.com/c/codeml-challenge3 \n",
    "Challenge 4: Sentiment analysis | Analyse de sentiments http://www.kaggle.com/c/codeml-challenge4 \n",
    "Challenge 5: CNN http://www.kaggle.com/c/codeml-challenge5 \n",
    "Challenge 6: Imagenet Classification http://www.kaggle.com/c/codeml-challenge6 \n",
];

const ALL_CHALLENGES = CHALLENGES.join('');

module.exports = {
    name: "challenge",
    description: "Informations on challenges",
    execute(message, args) {
        if(args.length===0) {
            message.channel.send(ALL_CHALLENGES);
            return;
        }
        var res = "";
        
        for(const arg of args) {
            parsedArg = parseInt(arg)
            if (parsedArg >= 1 & parsedArg <= 6) {
                res = res.concat(CHALLENGES[parsedArg - 1])
            }
        }
        if(res === "") {
            message.reply("Invalid command. Enter \"!challenge [#]\" where [#] are values between 1 and 6. \n"
            + "Commande invalide. Entrez \"!challenge [#]\" où [#] est une valeur entre 1 et 6.\n"
            +" Ex: \"!challenge 1 4 2\"");
            return;
        }
        message.channel.send(res);
    },
};