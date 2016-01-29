const caesarCrypter = require("../lib");

// Encrypt the 'ab' message using base string 'abcdefgh', step 1, direction -1
console.log(caesarCrypter.encrypt(1,-1,"abcdefgh","ab")); // [ 'h', 'a' ]
// Decrypt the 'ha' message using base string 'abcdefgh', step 1, direction -1
console.log(caesarCrypter.decrypt(1,-1,"abcdefgh","ha")); // [ 'a', 'b' ]
