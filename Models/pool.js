const { Pool } = require("pg");
const PORT= 3000;

// all of these should be secured in env var
module.exports = new Pool({
    connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
});

