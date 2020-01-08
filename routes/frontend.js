var express    = require('express')   ;
var router= express.Router();

module.exports = function( passport ){
    router.use( function(req, res, next ){
		//console.log('executing route:');
		if ( req.user )
		{
			//console.log('user found :',req.user );
			// got the user
		}
		next();
    });
    router.get('/home',function(req,res,next){
        res.send('HELLO !!');
        next();
    });
    router.get('/auth/twitter', passport.authenticate('twitter'));
    router.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect : '/#/profile',failureRedirect : '/login' }));

    return router;
}