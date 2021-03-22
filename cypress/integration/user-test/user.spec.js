const faker = require('faker');


describe('Scenarios for user service validation', () => {
  let userCreated;

  it('Create user and confirm', () => {
    const userToBeCreated = {
      "name": faker.name.firstName(),
      "email": faker.internet.email(),
      "gender": "Female",
      "status": "Active"
    };
    cy.createUser(userToBeCreated)
      .then((response) => {
        expect(response.body.code).to.eq(201)
        userCreated = response.body.data;
        cy.searchAllUser(response.body.data.id).should((result) => {
          expect(result.body.code).to.eq(200)
          expect(result.body.data[0].id).is.not.be.null;
          expect(result.body.data[0].email).to.eq(userToBeCreated.email)
        })
      })
  })

  it('Update user and confirm', () => {
    const name = faker.name.firstName();
    cy.updateUser(userCreated.id, name)
      .then((response) => {
        expect(response.body.code).to.eq(200)
        cy.searchOneUser(userCreated.id).should((result) => {
          expect(result.body.data.name).to.eq(name)
          expect(result.body.data.created_at).to.not.equal(result.body.data.updated_at)
        })
      })
  })

  it('Delete user and confirm', () => {
    cy.deleteUser(userCreated.id)
      .then((response) => {
        expect(response.body.code).to.eq(204)
        cy.searchAllUser(userCreated.id).should((result) => {
          expect(result.body.code).to.eq(200)
          expect(result.body.meta.pagination.total).to.eq(0)
          expect(result.body.data).to.be.empty
        })
      })
  })
})