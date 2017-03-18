module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => {
            console.log(`N TASK API - PORT ${app.get('port')}`);
        });
    });
}