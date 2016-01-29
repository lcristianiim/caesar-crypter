const caesarCrypter = require("../lib")
    , tester = require("tester")
    ;

tester.describe("Caesar cipher", test => {
    test.should("Encrypt", () => {
        test.expect(caesarCrypter.encrypt(3,1,"abcdefgh","ab")).toBe(['d','e']);
    }),
    test.should("Decrypt", () => {
        test.expect(caesarCrypter.decrypt(3,1,"abcdefgh","de")).toBe(['a','b']);
    });
});
