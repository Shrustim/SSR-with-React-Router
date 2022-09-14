import express from 'express'
import cors from 'cors'
import * as React from 'react'
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from 'react-router-dom/server';
// import { matchPath } from 'react-router-dom'
// import { StaticRouter } from 'react-dom/server';
// import serialize from 'serialize-javascript'
import App from '../shared/App'

const app = express()

app.use(cors())
app.use(express.static('dist'))

app.get('*', (req, res, next) => {
  // This context object contains the results of the render
  const context = {};
  const OG_DESCRIPTION = "Hii Test SSR OG image"
  const OG_TITLE = "SSR with React Router"
  const OG_IMAGE = "https://i.pinimg.com/550x/6a/17/da/6a17dae692f202256ffc2912c372c414.jpg"
  const markup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
         </StaticRouter>
      );
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with React Router</title>
          <script src="/bundle.js" defer></script>
          <link href="/main.css" rel="stylesheet">
          <meta name="description" content="${OG_DESCRIPTION}" />
          <meta property="og:title"       content="${OG_TITLE}" />
          <meta property="og:description" content="${OG_DESCRIPTION}" />
          <meta property="og:image" content="${OG_IMAGE}" />
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
 })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})