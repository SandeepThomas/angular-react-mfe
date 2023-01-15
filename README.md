# angular-react-mfe

Angular 15 React 18 mfe integration

### app versions

host: angular v15.1.0

remote: react v18.2.0


### folders

angular: host app

craco: react app using craco v7.0.0

nx-react: react app using nx monorepo v15.4.5

### how to test

- in each folder, run 'npm install' & run 'npm start' 
- verify craco running at http://localhost:3000/
- verify nx running at http://localhost:4200/
- open angular host at http://localhost:4000/

### result
- craco integration works
- nx integration throws container undefined error
