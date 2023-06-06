

const loginSchema = {
    tags: ['Login'],
    summary: 'This api gives login with different login methods',
    description: `<h3> This API let users to login in their selected method Like: password, email, phone , SSO </h3>`,
    body: {
        type: "object",
        properties: {
            user_name: {
                type: "string"
            },
            password: {
                type: "string"
            }
        },
        required: [
            "user_name", "password"
        ],
        "additionalProperties": false
      },
      response: {
        
      }
    };
        
   module.exports = { loginSchema } 
