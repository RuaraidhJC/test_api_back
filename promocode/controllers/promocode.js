let schema = {
    "name": "WeatherCode",
    "avantage": { "percent": 20 },
    "restrictions": {
        "@and": [
            {
                "@age": {
                    "lt": 30,
                    "gt": 15
                }
            },
            {
              "@or": [
                {
                    "@age": {
                        "eq": 40
                    }
                },
                    {
                    "@age": {
                        "lt": 30,
                        "gt": 15
                    }
                }
            ]
        },
        {
            "@date": {
                "after": "2019-01-01",
                "before": "2020-06-30"
            }
        },
      ]
    /*  "@meteo": {
        "is": "clear",
        "temp": {
          "gt": "15"
        }
      }*/
    }
  }

  let schema2 = {
    "name": "WeatherCode",
    "avantage": { "percent": 20 },
    "restrictions": {
      "@and": [
        {
            "@age": {
            "lt": 30,
            "gt": 15
            }
        },
        {
            "@or": [
                {
                    "@age": {
                        "eq": 40
                    }
                },
                {
                    "@age": {
                        "lt": 18,
                        "gt": 15
                    }
                },
                {
                    "@and": [
                        {
                            "@age": {
                                "lt": 30,
                                "gt": 15
                            }
                        },
                        {
                            "@age": {
                                "lt": 30,
                                "gt": 15
                            }
                        },
                    ]
                }
              ]
        },
        {"@date": {
            "after": "2019-01-01",
            "before": "2020-06-30"
        }},
      ]
    /*  "@meteo": {
        "is": "clear",
        "temp": {
          "gt": "15"
        }
      }*/
    }
  }


const promocodeChecker = (data, restrictions) => {
    const checker = require('./checkers/or-checker.js');
    return checker(data, restrictions["@and"]);
}

module.exports = promocodeChecker;