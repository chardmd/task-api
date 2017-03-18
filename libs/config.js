module.exports = {
    database: 'task',
    username: "",
    password: "",
    params: {
        dialect: 'sqlite',
        storage: 'task.sqlite',
        define: {
            underscored: true
        }
    },
    jwtSecret: 'ta$K-AP1',
    jwtSession: { session: false}
};