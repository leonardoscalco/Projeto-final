
# Utilização de node:10-alpine por ser recomendado para promover a conexão entre o servidor e a aplicação
FROM node:10-alpine

# Comando para criação do diretório do node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Caminho onde será descarregada a imagem
WORKDIR /home/node/app

# Copia os arquivos e instala as dependências necessárias
COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

# Mostra a porta onde será exposta a imagem
EXPOSE 8080

# O arquivo irá rodar o node, com informações obtidas no app.js
CMD [ "node", "app.js" ]