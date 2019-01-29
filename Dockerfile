FROM node:slim

# A bunch of `LABEL` fields for GitHub to index
LABEL "com.github.actions.name"="WIP"
LABEL "com.github.actions.description"="Set WIP pull requests to pending"
LABEL "com.github.actions.icon"="edit"
LABEL "com.github.actions.color"="orange"
LABEL "repository"="http://github.com/wip/action"
LABEL "homepage"="http://github.com/wip/action"
LABEL "maintainer"="Gregor Martynus (https://github.com/gr2m)"

# install
COPY package*.json ./
RUN npm ci --only=production

# start
COPY . .
ENTRYPOINT ["node", "/index.js"]
