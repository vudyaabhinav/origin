import express from 'express'
import cookieParser from 'cookie-parser'
import expressWs from 'express-ws'

const app = express()
expressWs(app)
app.use(cookieParser())

import linkerRoutes from './linker-routes'

const port = 3008

app.use('/wallet-linker', linkerRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

export default app