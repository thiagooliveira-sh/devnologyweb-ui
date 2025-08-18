FROM node:20.17.0-alpine3.19 as builder

COPY . /tmp
WORKDIR /tmp

RUN npm i && npm run build

FROM node:20.17.0-alpine3.19

COPY --from=builder /tmp/build/static ./build/static 

EXPOSE 3001

CMD ["npm", "start"]