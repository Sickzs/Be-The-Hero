const express = require('express')

const ongController = require('./controllers/ongController')

const IncidentController = require('./controllers/IncidentController')

const profileController = require('./controllers/profileController')

const sessionController = require('./controllers/sessionController')

const routes = express.Router()

routes.post('/sessions', sessionController.create )

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/profile', profileController.index)
    
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete )
    module.exports = routes
/*
 Metodos HTTP:

 GET: Buscar/listar uma informação do back-end
 POST: Criar uma informação no back-end
 PUT: Alterar uma informação no back-end
 DELETE: Deletar uma informação no back-end
*/

/*
Tipos de parâmetros:

Query: Parâmetros nomeados envaidos na rota após o "?" (Filtros, paginação,)
Route Params: Parâmetros utilizados para identificar recursos
Request body: Corpo da requisição, utilizado para crair ou alterar recursos
*/

/*
 SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 NoSQL: MongoDB, CouchDB, etv
*/

/*
 Driver: SELECT * FROM users 
 Query Builder: table('users').select('*').where()
*/
