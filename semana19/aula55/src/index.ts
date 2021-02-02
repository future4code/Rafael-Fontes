import express from 'express'
import cors from 'cors'
import { signup, login } from './controller/userController'
import { createTask,getTaskById } from './controller/taskController'
import { userRouter } from './data/routes/userRouter'
import { taskRouter } from './data/routes/taskRouter'

const app = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRouter)
app.use("/task", taskRouter)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})