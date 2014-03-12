run-test: mocha-run

mocha-run:
	@./node_modules/.bin/mocha test/test.js  -R spec

