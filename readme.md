<!-- steps 

first step

node package initialization
run npm init  

second step 

git initialize config

run git init

third step 

git initialize config

run git init
create gitignore file 
generate gitignore node js code from this website link : https://mrkandreev.name/snippets/gitignore-generator/#Node 

fourth step 

create public/temp/.gitkeep directory and files

fiver step 

create env file 

six step

create src folder from current directory  
create this files in src folder 
files name = appp.js constants.js index.js
optional 
create files with git bash 
run touch app.js constants.js index.js

seven step 

add module base type in package.json 
<!--"type": "module",

eight step 

install nodemon dev dependency package 
<!--run  npm i -D nodemon

nine step  

nodemon configuration 
add script command in pckage.json script key 
"dev": "nodemon src/index.js",

ten step

create folders 
create folders in src folder
create db controlles middleware models routes utils
optional 
create files with git bash 
mkdir db controlles middleware models routes utils

eleven step 

install prettier 
npm  i -D prettier 
configuration prettier 
create .prettierrc file in main direcotry
add this code in .prettierrc file
{
    "singleQuote": false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "semi": true
}
create .prettierignore file in main direcotry
add this code in prettierignore file
./vs code 
./node_modules
./dist 

*.env
.env
.env.* 

eleven step 

<!-- db connection create  -->
add db credentials in .env file
and add port name in .env file
add this code in .env file
PORT=8000
MONGODB_URI=mongodb://localhost:27017
and add DB_NAME=your db name in constants.js file
<!-- install packages  -->
dotenv
express
mongooos

npm i express mongoose dotenv

-->
