var token:String = "#";
var base: number = 36;

class TokenGenerator {
    base: number;
    token: String;
    constructor(base: number, token: String) {
        this.base = base;
        this.token = token;
    }
    generateToken() :string {
        return token + Math.random().toString(base).substr(2, 7);
    }
}

var generator: TokenGenerator = new TokenGenerator(base,token);

function generateRandomId(): string {
    return generator.generateToken();
}

