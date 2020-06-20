module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'cursoNodeMySQL',
            dialect: 'mysql',
            user: 'root',
            password: '1234'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}