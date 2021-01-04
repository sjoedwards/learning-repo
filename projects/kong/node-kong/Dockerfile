FROM node:carbon

# # create work directory
WORKDIR /usr/src/app

# # copy package.json
COPY package.json ./
RUN npm install

# # copy source code
COPY . .

# EXPOSE 10000
ARG SERVICE
ENV SERVICE=${SERVICE:-1}
CMD ["npm", "start"]
