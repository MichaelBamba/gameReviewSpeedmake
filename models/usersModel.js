const db = require('./con'),
bcrypt = require('bcryptjs');

class Reviewers {
    constructor(id, name, email, trust, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.trust = trust;
        this.password = password;
    }
    
    
    checkPassword(hashedPassword) {
        bcrypt.compareSync(this.password, this.name);
    }


    async newUser() {
        try {
            const response = await db.one('INSERT INTO reviewer (name, email, trust, password) VALUES ($1, $2, $3, $4) RETURNING id;', [this.name, this.email, this.trust, this.password]);
            return response
        } catch (error) {
            console.error('ERROR', error)
            return error
        }
    }
    async userLogin() {
        try {
            const response = await db.one('SELECT id, name, email, password FROM reviewer WHERE email = $1;', [this.email]);
            console.log('response', response);


            const isValid = this.checkPassword(response.password);
            if (!!isValid) {
                const {id, name, email} = response;

            return {isValid, user_id: id, name, email};
            } else {
                return {isValid}
            }
        } catch (error) {
            console.error('ERROR', error)
            return error
        }
    }
}

module.exports = Reviewers;