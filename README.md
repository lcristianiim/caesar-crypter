# caesar-crypter

Encrypts text using a Caesar cipher

## Installation

```sh
$ npm i caesar-crypter
```

## Example

```js
const caesarCrypter = require("caesar-crypter");

// Encrypt the 'ab' message using base string 'abcdefgh', step 1, direction -1
console.log(caesarCrypter.encrypt(1,-1,"abcdefgh","ab")); // [ 'h', 'a' ]
// Decrypt the 'ha' message using base string 'abcdefgh', step 1, direction -1
console.log(caesarCrypter.decrypt(1,-1,"abcdefgh","ha")); // [ 'a', 'b' ]

```

## Documentation

### `encrypt(steps, direction, arrAlph, arr)`
generateCryptedString
Creates an array based on another array using steps and direction.

#### Params
- **Number** `steps`: The offset range (How many characters you want to jump).
- **Number** `direction`: If positive jump right. If negative jump left.
- **String** `arrAlph`: The base array that will be used for encryption.
- **String** `arr`: The array to be encrypted.

#### Return
- **Array** Encrypted array.

### `decrypt(steps, direction, arrAlph, arr)`
decryptCryptedString
Creates an array based on another array using steps and direction.

#### Params
- **Number** `steps`: The offset range (How many characters you want to jump).
- **Number** `direction`: If positive jump right. If negative jump left.
- **String** `arrAlph`: The base array that will be used for decryption.
- **String** `arr`: The array to be decrypted.

#### Return
- **Array** Decrypted array.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## License
See the [LICENSE][license] file.

[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
