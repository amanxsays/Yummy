install a react app's configuration file called package.json
npm init
test command jest

now lets install a bundler which help to bundle our app and send it to production level
npm install -D parcel
here d show its a web dependency used while development

now the role of here package-lock.json whill work on current version and updated automatically if used ^
now u can also see node_modules this is the package type or database for react where the parcel is installed and fetched from server 

but u can see more folders beside parcel and these are the dependencies of parcel which parcel need for itself to work properly
future those dependecies have its own dependencies 
its called  TRANSITIVE DEPENDENCIES
//same those dependencies will have its own package.json as dependencies

Note that the node module should now be pused to git hub it's very bulky folder
so for this make a .gitignore folder
and write /node_modules inside it

now if u have package-lock.json
and package.json u can get and can say regenrate node_modules itself using npm install -D parcel
so thats why we dont push node_modules on git hub

now to activate parcel type: npx parcel index.html
npx is used to execute that package and remember to delete main line in json

//now it the best way to connect react and dont use than cdn link stuff
int that cdn link if version which upadated then it fill not able to update but now using npm just write

npm install react

and the new version is now updated all over your app
now we have downloaded react dependencues
now do the same for react DOM

npm install react-dom
or
nom i react-dom

now remove cdn part if it is in your index.html
and 

import React from "react";
import ReactDOM from "react-dom/client";
in App.js

now u will get a error that browser dont know import so just change
<script src="App.js"></script>

to

<script type="module" src="App.js"></script>

to have a https server
- npx parcel index.html --https

as browser understands that im not using your javascript but my module

- to build ur project for production just add nuild keyword
- npx parcel build index.html
and bcz of this build u will get a folder named dist which includes compressed form for production of all your codes


now the .parcel-cache and dist both are temporary regenratable folders
so ignore it by adding them in git ignore

-- now for older browser we need browserlist in package.json
"browserslist" : [
    "last 2 versions"
  ]

- now let's get rid of 
    npx parcel index.html 
    or 
    npx build parcel index.html

    so u have to make the start and build in script in package.json

    now we just have to write 
      - npm start or npm run start (can skip run for start only)
      -npm run build

- JSX is different from html but html like and makes easy to code in react
    const jsxHeading =<h1 id="jsx" >THIS IS FROM JSX 👌</h1>;
    now (actually babel) parcel is converting it so that browser can understand