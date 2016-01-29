/**
 * generateCryptedString
 * Creates an array based on another array using steps and direction.
 *
 * @name encrypt
 * @function
 * @param {Number} steps The offset range (How many characters you want to jump).
 * @param {Number} direction If positive jump right. If negative jump left.
 * @param {String} arrAlph The base array that will be used for encryption.
 * @param {String} arr The array to be encrypted.
 * @returns {Array} Encrypted array.
 */
function encrypt (steps, direction, arrAlph, arr) {
    var generatedString = [];
    for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arrAlph.length; j++) {
	    if (arr[i] == arrAlph[j]) {
		if (direction > 0) {
		    if (!arrAlph[j + steps]) {
			var count = arrAlph.length - j - 1;
			generatedString[i] = arrAlph[steps - count - 1];
		    } else {
			generatedString[i] = arrAlph[j + steps]
		    }
		} else {
                    if (!arrAlph[j - steps]) {
                        var count = arrAlph.length - steps;
                        generatedString[i] = arrAlph[count + j];
                    } else {
                        generatedString[i] = arrAlph[j - steps];
                    }
                }
	    }
	}
    }
    return generatedString;
}

/**
 * decryptCryptedString
 * Creates an array based on another array using steps and direction.
 *
 * @name decrypt
 * @function
 * @param {Number} steps The offset range (How many characters you want to jump).
 * @param {Number} direction If positive jump right. If negative jump left.
 * @param {String} arrAlph The base array that will be used for decryption.
 * @param {String} arr The array to be decrypted.
 * @returns {Array} Decrypted array.
 */
function decrypt (steps, direction, arrAlph, arr) {
    var generatedString = [];
    for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arrAlph.length; j++) {
	    if (arr[i] == arrAlph[j]) {
		if (direction > 0) {
		    if (!arrAlph[j - steps]) {
			var count = arrAlph.length - j - 1;
			generatedString[i] = arrAlph[steps - count - 1];
		    } else {
			generatedString[i] = arrAlph[j - steps]
		    }
		} else {
                    if (!arrAlph[j + steps]) {
                        var count = arrAlph.length - j - 1;
                        generatedString[i] = arrAlph[steps - count - 1];
                    } else {
                        generatedString[i] = arrAlph[j + steps]
                    }
                }
            }
	}
    }
    return generatedString;
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;
