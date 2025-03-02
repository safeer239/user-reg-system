const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

// Swagger configuration
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-Commerce API",
      version: "1.0.0",
      description: "API Documentation for the E-Commerce platform",
    },
    servers: [
      {
        url: "https://user-reg-system.onrender.com/",
        description: "Live Server",
      },
      {
        url: "http://localhost:8080/api-docs/",
        description: "Local Server",
      },
    ],
  },
  apis: ["./Routes/*.js"], // Path to the API route files
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  console.log("📄 Swagger Docs available at https://user-reg-system.onrender.com/api-docs");
};

module.exports = swaggerDocs;
