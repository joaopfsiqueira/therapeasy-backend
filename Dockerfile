ARG IMAGE=node:20-alpine
#Define uma etapa de construção na imagem baseada no valor da variável IMAGE. Esta etapa é nomeada como build. Ele usa a imagem node:20-alpine como base para construir a aplicação.
FROM $IMAGE as build 

#Define o diretório de trabalho para a etapa de construção como /build.
WORKDIR /build

#Copia o arquivo package.json do diretório local para o diretório de trabalho da etapa de construção.
COPY package.json .

#Instala as dependências do projeto.
RUN npm i

#Copia o restante dos arquivos do diretório local para o diretório de trabalho da etapa de construção.
COPY . .

#Executa o comando de construção do projeto.
RUN npm i && \
    npm run build

# application environment
FROM $IMAGE

#Define o diretório de trabalho para a etapa de execução como /project.
WORKDIR /project

#Copia os arquivos da etapa de construção para a etapa de execução.
COPY --from=build build /project

CMD ["node", "dist/server.js"]