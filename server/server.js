import { createServer } from 'http'
import { handler } from './routers.js'


export default createServer(handler)