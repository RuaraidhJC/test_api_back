# test_api_back

Project bootstrapped with ExpressJs

requirements:
  - Docker
  - docker-compose

install & run:
  - docker-compose up -d

backend is available at http://localhost:3000/

IMPORTANT:
  - since top level requirement is effectively an @and, for now ALL promocode schemas MUST start with an @and directive
 
done:
  - POST /promocode/ -> takes a valid json object and saves it to db
  - POST /promocode/request -> takes a json object with 'promocode_name' and 'arguments object'. Returns object with status info + available promo is success
  - barebone error handling for the promo request
  - persistence with SQL db
  - docker deployment

todo:
  - input schema validation
  - weather microservice
  - integrate weatherChecker
  - unit tests
  - cleanup