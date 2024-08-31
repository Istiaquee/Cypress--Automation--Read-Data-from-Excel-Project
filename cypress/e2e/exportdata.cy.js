import fn from "../Pom/fn";

// cypress/integration/login.spec.js
describe('Login Test', () => {
    it('should login with credentials from Excel file', () => {
        const dataEx = new fn();
        dataEx.readData();
    });
});
