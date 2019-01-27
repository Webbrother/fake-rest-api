FROM mhart/alpine-node:latest

RUN mkdir /server-mock

# set the working dir
WORKDIR /server-mock

# copy package.json and package-lock.json to install node_modules
COPY package.json /server-mock
#COPY package-lock.json /server-mock

RUN npm install -g typescript && npm install -g ts-node #https://stackoverflow.com/a/44764064/2179748

RUN npm install

COPY . /server-mock

CMD ["npm", "start"]
