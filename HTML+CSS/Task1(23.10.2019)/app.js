const process = require( 'process' );
const express = require( 'express' );
require( 'dotenv' ).config();
const app = express();


const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: 'index.html',
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
  	res.set( 'Hello', 'world' );
    res.set( 'x-timestamp', Date.now() );
    // res.set( 'content-type', 'application/pfd' );
  }
};
app.use( express.static( 'public', options ) );

app.get( '/', ( req, res ) => {
	res.end( `done.` );
} );

app.get( '*', ( req, res ) => {
	res.end( `?` );
} );

app.listen( process.env.PORT, () => {
	console.log( `Server started ${ process.env.PORT }!` );
} );