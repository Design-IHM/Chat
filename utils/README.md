## Explications :

1. **Configuration de la base de données (database.js)**:
    - Utilise le module `mysql` pour se connecter à la base de données MySQL.
    - Définit les informations de connexion (hôte, utilisateur, mot de passe, nom de la base de données).
    - Crée une connexion et gère les erreurs potentielles.
    - Exporte la connexion pour permettre son utilisation dans d'autres parties de l'application.

    
2. **Gestion des jetons JWT (jwt.js)**:
    - Utilise le module `jsonwebtoken` pour générer et vérifier les jetons JWT.
    - La fonction `generateToken` prend l'ID de l'utilisateur en paramètre et renvoie un jeton JWT signé avec une clé secrète et une durée d'expiration d'1 heure.
    - La fonction `verifyToken` prend un jeton JWT en paramètre, le vérifie avec la clé secrète et renvoie les données décodées si le jeton est valide, ou `null` en cas d'erreur.
