FROM node:10-alpine

WORKDIR /var/www/html/app

RUN npm install -g @angular/cli

COPY package.json /var/www/html/app

RUN npm install --no-bin-links

EXPOSE 4200

ENTRYPOINT ["tail", "-f", "/dev/null"]
