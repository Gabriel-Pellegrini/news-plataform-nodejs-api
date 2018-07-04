FROM node:8.11.2

LABEL maintainer="Gabriel Pellegrini" 

ENV HOME=/home/app

WORKDIR $HOME/portal/

COPY . $HOME/portal

RUN npm install npm

RUN npm install -g nodemon

RUN npm install express 

RUN nṕm install mysql 


