
const BEARER_TOKEN = "2275e2cbbf8dc1d113b25fb018cdb2e07e088b35bb5f7b7c13ca160ed96a82ba";
const USER_ENDPOINT = "https://gorest.co.in/public-api/users";

Cypress.Commands.add('createUser', (user) => {
  cy.request({
    method: "POST",
    url: USER_ENDPOINT,
    auth: {
      bearer: BEARER_TOKEN
    },
    body: user
  }).as('userCreated')

})
Cypress.Commands.add('searchAllUser', (id) => {
  cy.request({
    method: "GET",
    url: `${USER_ENDPOINT}?id=${id}`,
    auth: {
      bearer: BEARER_TOKEN
    },
  })
})

Cypress.Commands.add('updateUser', (id, name) => {
  cy.request({
    method: "PUT",
    url: `${USER_ENDPOINT}/${id}`,
    auth: {
      bearer: BEARER_TOKEN
    },
    body: {
      name: name
    }
  })
})

Cypress.Commands.add('searchOneUser', (id) => {
  cy.request({
    method: "GET",
    url: `${USER_ENDPOINT}/${id}`,
    auth: {
      bearer: BEARER_TOKEN
    },
  })
})

Cypress.Commands.add('deleteUser', (id) => {
  cy.request({
    method: "DELETE",
    url: `${USER_ENDPOINT}/${id}`,
    auth: {
      bearer: BEARER_TOKEN
    },
  })
})