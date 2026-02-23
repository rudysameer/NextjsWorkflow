const { env } = require("process");

module.exports = {
  apps : [
  {
    name   : "ecoapp-1",
    script : "pnpm",
    args : "start",
    watch: false,
    env: {
      NODE_ENV: "production",
      PORT: 3000
    },
    env_development: {
      NODE_ENV: "development",
      PORT: 3001
    }
  }

]
}
