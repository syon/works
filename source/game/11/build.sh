export PATH=$PATH:/usr/local/bin

cd `dirname $0`

CMD="tsc ts/*.ts --removecomments -out js/game.js"

echo `$CMD 2>&1`
