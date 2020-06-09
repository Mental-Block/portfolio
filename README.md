# portfolio

## run locally: 

FROM ROOT:
  backend: 
 - cd backend && npm i && npm start || node server
 
 frontend: 
 - cd frontend && npm i && npm start 
 
Note: by defualt as there is no database connected to the application as it is an .env so fetching Data... will be the defualt response.    
