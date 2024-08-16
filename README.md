## Démonstration de l'utilisation de la librairie WebDrivier IO pour le test technique de la compagnie Notarius.

Ce répertoire contient les fichiers pour exécuter 2 tests qui vont tester la connexion et la déconnexion d'un utilisateur standard sur le site https://www.saucedemo.com/. 

*** Ce projet de test fonctionne sur node 18.20. Veuillez-vous assurer que vous utilisez cette version sur votre système

### Pour exécuter les tests suivre les étapes ci-dessous:
1- Initialiser node.js via npm init -y 

2- installer Web Driver IO via la commande npm init wdio.

3- choisir toutes les options par défaut dans le wizard d'installation

4- ouvrir le fichier wdio.conf.js

5- à la ligne 126. rajouté l'objet suivant au paramètre reporter         [
            'allure', {
                outputDir: 'allure-results'
            }
        ]
        de façon à ce que la totalité du paramètre reporter contienne:     reporters: ['spec',
        [
            'allure', {
                outputDir: 'allure-results'
            }
        ]
    ],

6- Pour lancer les tests exécuter la commande suivante dans votre terminal: npx wdio run .\wdio.conf.js --spec .\test\specs\loginLogout.spec.js

7- pour voir le rapport générer par allure lancer la commande suivante dans votre terminal: allure open

