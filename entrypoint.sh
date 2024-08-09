#!/bin/sh
cd ./home
# Instala as dependências
npm install
# Instale o Jest
npm install jest


# Executar os testes Jest 
# npm run test 
# # Executa as migrações do banco de dados
# npm run migrate

# Inicia o servidor
npm run start:dev
