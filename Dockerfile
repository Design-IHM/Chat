FROM node:20

# Crée un dossier de travail dans le conteneur
WORKDIR /app

# Copie le fichier package.json et le fichier package-lock.json (si disponible)
 COPY package*.json ./

 # Installe les dépendances du projet
 RUN npm install

 # Copie le reste des fichiers du projet dans le conteneur
 COPY . .

 # Expose le port 3000
 EXPOSE 3001

 # Démarre l'application
 CMD ["node", "start"]
