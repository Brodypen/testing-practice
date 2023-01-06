const add = require('../scripts/calculator').add;
const subtract = require('../scripts/calculator').subtract;
const multiply = require('../scripts/calculator').multiply;
const divide = require('../scripts/calculator').divide;
describe("Testing calculator", () => {
    it("Testing add", () => {
        expect(add(1, 2)).toBe(3);
    });
    it("Testing subtract", () => {
        expect(subtract(1, 2)).toBe(-1);
    });
    it("Testing multiply", () => {      
        expect(multiply(1, 2)).toBe(2);
    });
    it("Testing divide", () => {
        expect(divide(1, 2)).toBe(0.5);
    });
});