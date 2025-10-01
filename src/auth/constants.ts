const crypto = require('crypto');

// Generate 32 random bytes (256 bits) and convert to a hexadecimal string
export const jwtConstants = {
    secret: crypto.randomBytes(32).toString('hex')
}
