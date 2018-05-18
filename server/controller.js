module.exports = {
    register: (req,res) => {
        const {username, password, profile_picture} = req.body
        console.log(username, password, profile_picture)
        req.app.get('db').register_user([username, password, profile_picture])
            .then( (user) => {
                res.status(200).send(user[0])
            })
    }
}