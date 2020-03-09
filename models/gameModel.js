const db = require('./con.js');

class gameReview {
    constructor (id, name, genre, year_published, author, rating) {
        this.id = id;
        this.name = name;
        this.genre = genre; 
        this.year_published = year_published;
        this.author = author;
        this.rating = rating;
    }
    static async getgame() {
        try {
            const respose = await db.any(`SELECT * FROM games;`);
            return respose;

        } catch (error) {
            console.error('ERROR', error);
            return error;
        }
    }
    static async getgameIdgame() {
        try {
            const response = await db.any(`SELECT * FROM games WHERE id = 1;`);
            return response
        } catch(error) {
            console.error('ERROR', error);
            return error 
        }
    }
    static async getgameIdSaga() {
        try{
            const response = await db.any(`SELECT * FROM gameS WHERE ID = 2;`);
        } catch(error) {
            console.error('ERROR', error);
            return error
        }
    }

};

module.exports = gameReview;