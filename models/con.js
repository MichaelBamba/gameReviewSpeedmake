require('dotenv').config();


const pgp = require('pg-promise')({
    query: function(e){
        console.log('QUERY:', e.query)
    }
});
const option  = {
    host: 'localhost',
    database: 'game_reviews'
};

const db=pgp(option);

    module.exports =db