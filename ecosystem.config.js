module.exports = {
    apps : [
        {
          name: "myapp",
          script: "./dist/server.js",
          watch: true,
          env: {
            "NODE_ENV": "production",
          }
        }
    ]
  }