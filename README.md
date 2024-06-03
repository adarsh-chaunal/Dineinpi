# Dineinpi

## Setup
Create Backend

Create a node module:
```npm init -y```

Install packages or dependencies:
```npm i express cors dotenv mongodb mongoose```

Install dev dependencies:
```npm i ts-node typescript nodemon @types/express @types/cors @types/node --save-dev```

Change the main value in package.json to './src/index.ts'

Change value in script from '"test": "echo \"Error: no test specified\" && exit 1"' to '"dev": "nodemon"'.
This allow us to run applicaiton using ```npm run dev```

Create 'tsconfig.json' file
```npx tsc --init```

We have used shadcn component library in this project, additional configuration steps can be found in the installation documentation of Vite library.

We will use 'lucide-react' for icons
```npm i lucide-react```


