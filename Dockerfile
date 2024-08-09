# Use uma imagem base
FROM  node:20-alpine3.18
COPY ./package.json  home 
RUN cd home
RUN npm i -g @nestjs/cli@10.3.0
# RUN apk add libc6-compat
# ENV PATH=$PATH:/usr/local/lib/node_modules/jest/bin


# ENTRYPOINT [ "/home/e.sh" ]
# Mantenha o container em execução
# CMD ["sh", "-c", "while true; do sleep 10; done"]


