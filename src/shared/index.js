import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import http from "http";
// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router";

// http.createServer((req, res) => {
//     // This context object contains the results of the render
//     const context = {};

//     const html = ReactDOMServer.renderToString(
//       <StaticRouter location={req.url} context={context}>
//         <App />
//       </StaticRouter>
//     );

//     // context.url will contain the URL to redirect to if a <Redirect> was used
//     if (context.url) {
//       res.writeHead(302, {
//         Location: context.url
//       });
//       res.end();
//     } else {
//       res.write(html);
//       res.end();
//     }
//   })
//   .listen(4000);

//   http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World!');
//     res.end();
//   }).listen(8080);




// import express from 'express'
// // import cors from 'cors'
// import * as React from 'react'
// import ReactDOM from 'react-dom/server'
// import { matchPath } from 'react-router-dom'
// // import { StaticRouter } from 'react-router-dom/server';
// import { StaticRouter } from "react-router";
// // import serialize from 'serialize-javascript'
// import App from './App';

// const app = express()

// app.use()
// // app.use(express.static('dist'))

// app.get('*', async (req, res, next) => {
// //   const activeRoute = routes.find((route) => matchPath(route.path, req.url)) || {}

// //   const promise = activeRoute.fetchInitialData
// //     ? activeRoute.fetchInitialData(req.path)
// //     : Promise.resolve()

// //   promise((data) => {
//     const markup = await ReactDOM.renderToString(
//       <StaticRouter location={req.url} >
//         <App  />
//       </StaticRouter>
//     )

//     res.send(`
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <title>SSR with React Router</title>
//           <script src="/bundle.js" defer></script>
//           <link href="/main.css" rel="stylesheet">
//         </head>

//         <body>
//           <div id="app">${markup}</div>
//         </body>
//       </html>
//     `)
// //   }).catch(next)
// })

// const PORT = process.env.PORT || 3000

// app.listen(PORT, () => {
//   console.log(`Server is listening on port: ${PORT}`)
// })