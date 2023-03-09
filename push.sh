#!/bin/sh

git config user.name 'zjl-coder'
git config user.email '1301034106@qq.com'

npx prettier --write ./src/.vuepress/components/* ./src/.vuepress/menu/* ./src/.vuepress/*.js

git add .
git commit -m "feat: update"
git push