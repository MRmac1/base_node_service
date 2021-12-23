FROM node:12.19.0
COPY . /app
WORKDIR /app
EXPOSE 3000
RUN yarn config set registry https://registry.npm.taobao.org && yarn
CMD ["node", "server.js"]