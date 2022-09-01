import { createServer } from 'http'
import { createApplication } from './app'
import { InMemoryTodoRepository } from './todo-management/todo.repository'
require('dotenv').config()

const httpServer = createServer()

createApplication(
	httpServer,
	{
		todoRepository: new InMemoryTodoRepository()
	},
	{
		cors: {
			origin: String(process.env.CORS_ALLOW_LIST).split(',')
		}
	}
)

httpServer.listen(process.env.PORT || 3000)
console.log(`start on ${process.env.PORT || 3000}`)
