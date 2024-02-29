describe('hooks', () => {
    before(() => {
        cy.log('runs once before all tests in the block')
    });

    after(() => {
        cy.log('runs once after all tests in the block')
    });

    beforeEach(() => {
        cy.log('runs before each test in the block')
    });

    afterEach(() => {
        cy.log('runs after each test in the block')
    });

    it('Exemple test 1', () => {
        cy.log('Exemple test 1')
    });

    it('Exemple test 2', () => {
        cy.log('Exemple test 2')
    });
});