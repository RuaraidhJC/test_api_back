const schema = {
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "name": {
            "type": "string",
        },
        "avantage" : {
            "type": "object"
        },
        "restrictions": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "@age": {},
                "@meteo": {},
                "@date": {},
            }
        }
    }
}

module.exports = schema;