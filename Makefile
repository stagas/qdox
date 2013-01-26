
build: bin
	@npm install -g

test:
	@./node_modules/.bin/mocha \
		--require should \
		--timeout 3s \
		--slow 1s \
		--bail \
		--reporter spec

.PHONY: test 
