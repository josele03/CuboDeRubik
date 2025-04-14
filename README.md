```powershell
npx create-docusaurus@latest my-website classic
cd my-website

(local)
```powershell
npm start

(despliegue)
```powershell
$env:GIT_USER=your_github_username
npm run build
npm run deploy