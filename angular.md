# Angular

## Arborescence
| Dossier | informations |
| - | - |
| src | toutes les codes de l'application
| Karma | Framefowrk de tests unitaires |
| package.json | Le fichier répéertoriant les modules |
| tsconfig.json | Le fichier de configuration de TypeScript |


## Arborescence /src
| Dossier | informations |
| - | - |
| app | Dossier logique applicatif
| assets | Images ou Fonts |
| environment | Permet de changer d'environement pour une mise en production |
| index.html | Le point d'entré de votre app |
| style.css | Le css générale de votre application |
| test.ts | Le fichier qui régit les tests de votre application
| main.ts | Fichier principale de l'application

## Arborescence /app [ Composant ]
| Dossier | informations |
| - | - |
| app.component.html | Affichage du composant principale |
| app.component.css | Css du composant app |
| app.component.ts | Logique du composant app |
| app.component.spec.ts | Test du composant app |
| app.module.ts | Le module principale de votre application |
| app-routing.module.ts | Le module qui permet de géré le routage de votre application |


## Fonctionnement Angular :
| Outils | informations | Commandes
| - | - |
| Component | Permet de crée des parties de l'appllication tel que des pages mais aussi des petits composants qui pourrons être réutiliser | ng g component < nom-composant > |
| Service | Les services sont des outils partagé et disponible à travers toutes l'application et permettent donc de partagé de l'informations et des fonctions | ng g service < nom-service > |
