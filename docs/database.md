---
outline: deep
---

# Database
Ratchet is able to connect to SQLite, MySQL and PostgreSQL databases.

This way you can not only store and read persistent data, but you can also easily integrate your systems with web applications that share the same database.

## `dbConnect` <Badge type="info" text="function" />
This function creates a database connection object that other functions can be used with, or fails and returns `nil` value.

Allowed database type inputs are: `sqlite3`, `sqlite`, `mysql`, `postgres`, `postgresql`

Connection string can be a file path for SQLite, or a space separated list of [parameters](#connection-parameters).
Refer to examples below to use them properly.

Syntax:
```lua
DatabaseConnection|nil dbConnect( string databaseType, string connectionString )
```

Example:
::: code-group
```lua [SQLite]
local db = dbConnect("sqlite3", "data/test.db")
```
```lua [MySQL]
local db = dbConnect("mysql", "db=test user=root password=123")
```
```lua [Postgres]
local db = dbConnect("postgres", "dbname=mydatabase")
```
:::


## Connection parameters
Important things are the name of the database; username and password if applicable.
Most likely you don't need anything else. And if you don't understand them, then you certainly don't need them.
All of these options are optional except for the `dbname` which is required in all database types.

### SQLite
- `dbname` or `db` - this parameter is required unless the entire connection string is just the database name, in which case it must not contain any `=` signs
- `timeout` - set busy timeout in seconds ([link](https://www.sqlite.org/c3ref/busy_timeout.html))
- `readonly` - open database in read-only mode instead of the default read-write (note that the database file must already exist in this case)
- `nocreate` - open an existing database without creating a new one if it doesn't already exist (by default, a new database file is created)
- `synchronous` - set the pragma synchronous flag ([link](https://www.sqlite.org/pragma.html#pragma_synchronous))
- `shared_cache` - enable or disabled shared pager cache ([link](https://www.sqlite.org/c3ref/enable_shared_cache.html))
- `vfs` - set the SQLite VFS used to as OS interface ([link](https://www.sqlite.org/vfs.html))
- `foreign_keys` - set the pragma foreign_keys flag ([link](https://www.sqlite.org/pragma.html#pragma_foreign_keys))

Boolean options `readonly`, `nocreate`, and `shared_cache` can be either specified without any value, which is equivalent to setting them to `1`, or set to one of `1`, `yes`, `true` or `on` to enable the option or `0`, `no`, `false` or `off` to disable it. Specifying any other value results in an error.

### MySQL
- `dbname`, `db` or `service` (required)
- `user`
- `password` or `pass`
- `host`
- `port`
- `unix_socket`
- `sslca`
- `sslcert`
- `local_infile` - should be `0` or `1`, `1` means `MYSQL_OPT_LOCAL_INFILE` will be set
- `charset`
- `reconnect` - if set to `1`, set `MYSQL_OPT_RECONNECT` to reconnect on connection loss
- `connect_timeout` - should be positive integer value that means seconds corresponding to `MYSQL_OPT_CONNECT_TIMEOUT`
- `read_timeout` - should be positive integer value that means seconds corresponding to `MYSQL_OPT_READ_TIMEOUT`
- `write_timeout` - should be positive integer value that means seconds corresponding to `MYSQL_OPT_WRITE_TIMEOUT`
- `ssl_mode` - should be one of the name constants `DISABLED`, `PREFERRED`, `REQUIRED`, `VERIFY_CA` or `VERIFY_IDENTITY` corresponding to `MYSQL_OPT_SSL_MODE` options (note that this option is currently not supported when using MariaDB)

### Postgres
Too many options to list, refer to:

https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-PARAMKEYWORDS


## Usage

### `query` <Badge type="info" text="function" />
Standard SQL query. Only use this if you're not passing any user supplied arguments into the query string, otherwise use [prepared statements](#prepare) for better security.

Syntax:
```lua
void DatabaseConnection:query( string query [, function ( bool success, string error, table|nil rows ) ] )
```

Example:
```lua {2}
local db = dbConnect("sqlite3", "data/test.db")
db:query("SELECT `value` FROM `settings` WHERE `key` = 'motd'", function(success, error, rows)
    print(rows[1].value)
end)
```

### `exec` <Badge type="info" text="function" />
SQL query is executed and no result is expected, instead a number of affected rows is returned.
This is mainly useful for `INSERT`, `DELETE` and `UPDATE` queries.

Syntax:
```lua
void DatabaseConnection:exec( string query [, function ( bool success, string error, int affected ) ] )
```

Example:
```lua {2}
local db = dbConnect("sqlite3", "data/test.db")
db:exec("UPDATE `settings` SET `value` = 'Hello world!' WHERE `key` = 'motd'", function(success, error, affected)
    print(affected)
end)
```

### `prepare` <Badge type="info" text="function" />
Prepared statements are very useful to prevent [SQL injection](https://en.wikipedia.org/wiki/SQL_injection).
Every `?` in the query string will be replaced by corresponding value in the data table in order.

Syntax:
```lua
void DatabaseConnection:prepare( string query, table data [, function ( bool success, string error, table|nil rows ) ] )
```

Example:
```lua {2}
local db = dbConnect("sqlite3", "data/test.db")
db:prepare("SELECT `value` FROM `settings` WHERE `key` = ?", { "motd" }, function(success, error, rows)
    print(rows[1].value)
end)
```

### `close` <Badge type="info" text="function" />
Safely close a database connection when it's no longer needed.

Syntax:
```lua
void DatabaseConnection:close()
```

Example:
```lua
local db = dbConnect("sqlite3", "data/test.db")
db:close()
```

### `isConnected` <Badge type="info" text="function" />
Check whether database connection is still active.

Syntax:
```lua
bool DatabaseConnection:isConnected()
```

Example:
```lua
local db = dbConnect("sqlite3", "data/test.db")
print(db:isConnected())
```

### `poolSize` <Badge type="info" text="function" />
Return a number of active concurrent connections to the specific database under one connection object.
This will never exceed 10 by design.

Syntax:
```lua
int DatabaseConnection:poolSize()
```

Example:
```lua
local db = dbConnect("sqlite3", "data/test.db")
print(db:poolSize())
```
