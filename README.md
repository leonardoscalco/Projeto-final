# Projeto-final
Este repositório tem como conteúdo o trabalho final da disciplina de Técnicas de Programação do PPG em Computação Aplicada

O trabalho final da disciplina de técnicas de programação tem como objetivo proporcionar ao aluno a utilização das técnicas 
e boas práticas de programação aprendidas ao longo do semestre. Neste trabalho, a utilização será de extrema importância para a
sequência da pesquisa do presente mestrado, visto que será utilizada como princípio metodologico do estudo. 
A pesquisa será baseada em um estudo da rugosidade em superfícies rochosas. Neste cenário, serão geradas nuvens de pontos através de 
escanamento a laser, gerando inumeros pontos que serão plotados em um gráfico para leitura de suas respectivas alturas. 
Como objetivo, foi proposta a utilização da ferramenta docker-compose para gerenciamento de serviço e utilização de imagem, com a 
utilização de apenas um comando no docker. O resultado encontrado, foi de encontro ao proposto no princípio do trabalho, 
sendo utilizado um serviço para sua execução. É importante ressaltar que o gráfico utilizado neste trabalho não é o mesmo que
será utilizado na pesquisa subsequente, devido a falta de dados no presente momento. Desta forma, foi apresentado um modelo 
simplificado que será atualizado na sequência do estudo. Porém, a arquitetura envolvida na criação da aplicação continuará a mesma, 
possibilitando a simples troca do modelo gráfico e dos dados.
A seguir será detalhada a sequência metodologica da aplicação através de um esquema e subsequente explicação:

Figura 1: Fluxograma do presente trabalho final.
 
1 - Foi criado um arquivo Dockerfile para a criação da imagem a ser utilizada no serviço.

- No docker, foi utilizado o comando "touch .Dockerfile" para a criação do arquivo .Dockerfile.

- Foi construída a imagem a ser utilizada através do comando "docker build -t projeto-grafic ." 
e das instruções do arquivo Dockerfile.

- Foi utilizado node:10-alpine, devido a sua facilidade de conexão entre a programação e o servidor. 

- Com o comando "RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app", estão sendo criados os diretórios
necessários e as permissões necessárias para instalação do node.

- O comando "WORKDIR /home/node/app" indica o caminho onde será descarregada a imagem.

- Com a utilização do comando "COPY package*.json ./", é realizada a cópia dos arquivos.

- No arquivo .Dockerfile, foram instaladas as dependências necessárias para o projeto com o comando: "RUN npm install".

- O arquivo é indicado para ser exposto na porta 8080 do servidor.

- Através do comando "CMD [ "node", "app.js" ]" o arquivo irá rodar o node, através das informações obtidas no app.js.

- Utilização do comando "docker run --name projeto-grafic -p 8080:8080 projeto-grafic" para nomear a imagem e mapear a porta 8080.



2 - Criação do arquivo docker-compose, para que seja utilizada a imagem gerada para o serviço necessário.

- O arquivo utiliza a imagem criada "projeto-grafic".

- Foi utilizada a porta 8080 para exposição do gráfico.

- O mapeamento dos volumes foi realizado para o diretório app.js


3 - No arquivo app.js, foram feitos os direcionamentos dos caminhos para o servidor.

- Primeiramente, foi baixada a dependência "express", responsável pelo correto funcionamento de aplicativos web.

- Foram criadas variáveis para direcionar a utilização do "express" e do "router".

- O "router" foi necessário para o direcionamento do servidor para leitura no arquivo index.html

- o express foi utilizado para as funcionalidades do servidor.

- Após, foi conectado o arquivo com a porta 8080.


4 - No arquivo index.html, foi realizada a configuração da página web que irá receber o gráfico.

- Como biblioteca foi utilizado um gráfico de crescimento populacional através dos anos. Para isso, a blioteca foi baixada 
e foi utilizado o caminho "<script src="/app/Chart.js"></script>" para o seu mapeamento. Como alternativa, é sugerido importar a 
biblioteca através do comando "<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>".

- Além disso, foi mapeado o arquivo para o index.js que contém a base de dados a ser utilizada no trabalho. Isso foi feito
através do comando "<script src="/app/index.js"></script>".


5 - O arquivo Chart.js foi utilizado como biblioteca do trabalho, não possuindo mudanças do seu estado original.


6 - O arquivo index.js é utilizado como base de dados, sendo desenvolvido em JavaScrpt.

- Primeiro é feito a conexão entre os arquivos Chart.js e index.js 
através do linha: "let firstGrafic = document.getElementById('firstGrafic').getContext('2d')".

- Depois são listadas as informações contidas nos eixos dos gráficos.

- Na sequência são listados os dados que serão utilizados como categorias de classificação, sendo no exemplo, os anos.

- Após são listados os dados de acordo com a sua classificação e sua subsequente cor.


7 - Com todos os arquivos e serviço conectados, é possível acessar o gráfico através do comando "docker-compose up --build" no docker.
Esse comando, é responsável por conectar a aplicação e construir a imagem novemente em cada acesso.


8 - Após esse comando, é possível acessar o gráfico através do comando "://localhost:8080" no navegador.

Figura 2: Gráfico de crescimento populacional através dos anos.
