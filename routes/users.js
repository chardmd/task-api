module.exports = app => {

    const Users = app.db.models.Users;

    app.route('/user')
        .all(app.auth.authenticate())
        .get((req, res) => {
            // '/tasks/1': Find a task
            Users.findById(req.user.id, {
                attributes: ['id', 'name', 'email']
            })
            .then(result => {
                if (result) {
                    res.json(result);
                } else {
                    res.sendStatus(404);
                }
            })
            .catch(error=> {
               res.status(412).json({msg: error.message});
            });
        })
        .delete((req, res) => {
            // 'tasks/1': Delete a task
            Users.destroy({where: req.params.id})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });

    app.post('/users', (req, res) => {
        // 'tasks/1': Update a task
        Users.create(req.body)
            .then(result => {
                res.json(result);
            })
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });

};