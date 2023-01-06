import { caesarCipher } from "../scripts/caesarCipher";
describe("Testing caesarCipher", () => {
    it("Testing caesarCipher", () => {
        expect(caesarCipher("frostandice", 1)).toBe("gsptuboejdf");
    });
    it("Testing caesarCipher", () => {
        expect(caesarCipher("frostandice", 2)).toBe("htquvcpfkeg");
    });
    it("Testing caesarCipher", () => {
        expect(caesarCipher("frostandice", 3)).toBe("iurvwdqglfh");
    });
});