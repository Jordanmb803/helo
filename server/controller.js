module.exports = {
    register: (req, res) => {
        const { username, password, profile_picture } = req.body
        console.log(username, password, profile_picture)
        req.app.get('db').register_user([username, password, profile_picture])
            .then((user) => {
                res.status(200).send(user[0])
            })
    },
    login: (req, res) => {
        const { username, password } = req.params
        req.app.get('db').get_user([username, password])
            .then(user => {
                res.status(200).send(user[0])
            })
    },
    getPosts: (req, res) => {
        const { id } = req.params
        const { string } = req.query
        if (req.query.userpost === true && string) {
            // req.app.get('db').get_all_posts([string, id])
            //     .then(posts => {
            //         res.status(200).send(posts)
            //     })
            console.log('1st if')
        }
        if (req.query.userpost === false && !req.query.string) {
            console.log('2nd if')
        }
        if (req.query.userpost === false && req.query.string) {
            console.log('3rd if')
        }
        if (req.query.userpost === true && !req.query.string) {
            console.log('4th if')
        }
    }
}