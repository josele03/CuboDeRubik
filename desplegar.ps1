# build-and-deploy.ps1
cd my-website
$env:GIT_USER = "josele03"
npm run build
npm run deploy
