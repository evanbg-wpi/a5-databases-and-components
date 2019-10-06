const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.encrypt = function(string){
    bcrypt.hashSync(string, saltRounds)
};
exports.compareString = function(encrypted, decrypted){
    return bcrypt.compareSync(decrypted, encrypted)
}