class PromocodeError extends Error {
    constructor(message) {
        super(message)
        this.name = "PromocodeError"
    }
}
module.exports = new PromocodeError();