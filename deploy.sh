export NVM_DIR="$HOME/.nvm"
source $NVM_DIR/nvm.sh
nvm use 20.9.0
cd bms/
git pull
pnpm install
pnpm run build
pm2 restart http-server
pm2 restart ws-server
pm2 restart fd-server