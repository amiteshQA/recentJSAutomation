# Add in logic to swap config file by input parameters
# write config.json for the given environment

ENV=$1

if [ -z "$1" ]; then
  ENV=test
fi

# write config
mv ./configs/$ENV-config.json ./configs/config.json

#run tests
mocha ./tests/new-zero-down-pricing.test.js

#revert config
mv  ./configs/config.json ./configs/$ENV-config.json
