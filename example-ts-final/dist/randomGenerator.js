var token = "#";
var base = 36;
class TokenGenerator {
    constructor(base, token) {
        this.base = base;
        this.token = token;
    }
    generateToken() {
        return token + Math.random().toString(base).substr(2, 7);
    }
}
var generator = new TokenGenerator(base, token);
function generateRandomId() {
    return generator.generateToken();
}
//# sourceMappingURL=randomGenerator.js.map