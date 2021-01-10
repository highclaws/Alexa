# STEP 1

###### Install ask-cli 
npm i - g ask-cli

###### Create first skill by ask-cli 
ask new -n ask-utils-example

###### run en local 

ask dialog -l fr-FR 

ask dialog -l en-US

ask dialog  

# STEP 2

###### git disponible -> c'est fait automatiquement par amazon par besoin d'initialisé le repo.
git add .

git commit -m "toto"

git push (vers amazon)

###### dossier de configuration config 
.ask generer par la ci 

.vscode pour debug sur vscode

ask-resources.json -> hmmm configuration

# STEP 3

###### Dossier skill-package  gerer notre skill et les models d'entrainement -> Machine learning :)
information sur la skill, description, permission utilisateur choix des langages etc

/skill-package/skill.json

Le projet dispose actuellement de 2 langue, le francais et l'anglais.

/skill-package/interactionModels/custom/en-US.json

/skill-package/interactionModels/custom/fr-FR.js

###### Le dossier lambda fait tourner notre server alexa avec des handlers.

constants.js -> ajout des permissions, et des valeurs a sauvegarder

interceptors.js -> différents méthode pour pouvoir acceder a des données de notre appareil : localisation

localisation.js -> stock un objet en json pour envoyer des msg personnalisé, anglais ou francais selon la localisation

local-debugger.js -> pour debuggé x)

logic.js -> methode pour faire des requetes avec axios

util.js -> methode pour garder en memoire notre session sur une bdd getPersistenceAdapter etc