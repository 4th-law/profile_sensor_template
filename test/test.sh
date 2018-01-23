 #!/bin/sh
set -eux pipefail

echo "COMPILING SOURCE"
yarn build-src

echo "STARTING TESTS"
NODE_ENV=test ./node_modules/.bin/nyc ./node_modules/.bin/mocha --exit

if [ -z ${CODACY_PROJECT_TOKEN+x} ]; then
  echo "No CODACY_PROJECT_TOKEN, coverage not sent"
else
  ./node_modules/.bin/nyc report --reporter=lcov
  cat ./.coverage/lcov.info | ./node_modules/.bin/codacy-coverage --language typescript ;
fi
