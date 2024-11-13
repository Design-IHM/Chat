# Chat

Ce projet est une application web qui permet à un médecin de mener une consultation virtuelle avec un patient IA dans un environnement 3D immersif.

## Prérequis

- Docker
- Docker Compose

## Déploiement avec Docker

1. Clonez le dépôt Git du projet :
   ```bash
       git clone https://github.com/Design-IHM/Chat-Box.git
       cd Chat-Box
   ```

2. Construisez et lancez les conteneurs Docker avec Docker Compose :
   ```bash
      docker compose up 
              ou 
      docker-compose up -build
   ```
   
3. Pour arreter le container on execute:
    ```bash
        docker compose down 
              ou
        docker-compose down
    ```
