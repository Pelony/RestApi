'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'pg'),

  /*
  |--------------------------------------------------------------------------
  | Sqlite
  |--------------------------------------------------------------------------
  |
  | Sqlite is a flat file database and can be a good choice for a development
  | environment.
  |
  | npm i --save sqlite3
  |
  */
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath(`${Env.get('DB_DATABASE', 'development')}.sqlite`)
    },
    useNullAsDefault: true,
    debug: Env.get('DB_DEBUG', false)
  },

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'ec2-34-201-95-176.compute-1.amazonaws.com'),
      port: Env.get('DB_PORT', '5432'),
      user: Env.get('DB_USER', 'cjlqtohojvcqbn'),
      password: Env.get('DB_PASSWORD', '393359afb65a8cd3a319f968c30bb10fcf47c6660d9c79cc08723ef1ed6d461f'),
      database: Env.get('DB_DATABASE', 'daulgkjmqatt00')
    },
    debug: Env.get('DB_DEBUG', false)
  },

  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', 'ec2-34-201-95-176.compute-1.amazonaws.com'),
      port: Env.get('DB_PORT', '5432'),
      user: Env.get('DB_USER', 'cjlqtohojvcqbn'),
      password: Env.get('DB_PASSWORD', '393359afb65a8cd3a319f968c30bb10fcf47c6660d9c79cc08723ef1ed6d461f'),
      database: Env.get('DB_DATABASE', 'daulgkjmqatt00')
    },
    debug: Env.get('DB_DEBUG', false)
  }
}
