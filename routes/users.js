const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');


router.get('/login', function (req, res, next) {
    res.render('template', {
        locals: {
            title: 'Sign In',
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: 'partial-login'
        }


    });
});

router.get('/signup', function (req, res, next) {
    res.render('template', {
        locals: {
            title: 'Sign Up',
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: 'partial-signup'
        }


    });
});

router.post('/login', async function(req,res,next) {
    const {email, password} = req.body;

    const user = new reviewerModel(null, null, null, email, password);
    const loginResponse = await user.userLogin();
    console.log('login response is: ', loginResponse);

    if (!!loginResponse.isValid) {
        req.session.is_logged_in = isValid;
        req.session.user_id =loginResponse.user_id;
        req.session.name = loginResponse.name;
        req.session.email = loginResponse.email;
        res.redirect(200, '/')
    } else {
        res.sendStatus(403);
    }
    res.sendStatus(200);
})

router.post('/signup', async (req, res) => {
    const {name, email, trust, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = new reviewerModel(null, name, email, trust, password);
    console.log('this is the user ', user);
    user.newUser()
    res.status(200)
});




router.get('/logout', function (req, res){
    req.session.destroy();
    res.redirect('/')
;})

module.exports = router;