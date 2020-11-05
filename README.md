# Node [Weather] REST API

### Running Your API Locally:

1. Install [Node.js and npm](https://nodejs.org/en/)
  
1. Install [PostgreSQL Database](https://www.postgresql.org/download/)

1. Install [Postman Client REST](https://www.postman.com/downloads/)
 
### Start a local development server:

1. Clone this repository 
```bash
git clone https://github.com/isaquielfernandes/node-rest-api.git
```
2. `npm install` in the project root folder on local
3. TypeORM(ormconfig.json)
```json
// database config
{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "your db username",
    "password": "your db passaword",
    "database": "weatherdb",
    "synchronize": true,
    "logging": false,
    "entities": [
       "src/entity/**/*.ts"
    ],
    "migrations": [
       "src/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ]
}
```
4. `npm run dev` to start
5.  Browse to [http://localhost:3000](http://localhost:3000/)
6. `npm run build` to build to production locally

### URL:
 * `GET /forecast/` 
 * `GET /forecast/:city`  - Para pesquisar previsao de tempo por name de cidade
