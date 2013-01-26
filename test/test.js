
/**
 * Test.
 */

var fs = require('fs')
var exec = require('child_process').exec
var read = fs.readFileSync

describe('empty', function () {
  it("should read index.js", function (done) {
    exec('cd test/fixtures && node ../../bin/qdox', function (err, stdout, stderr) {
      stdout.should.include('index')
      stdout.should.not.include('mul')
      done()
    })
  })
})

describe('with --stdin', function () {
  it("should read stdin", function (done) {
    exec('cat test/fixtures/math.js | node bin/qdox --stdin', function (err, stdout, stderr) {
      stdout.should.include('sum')
      stdout.should.not.include('mul')
      done()
    })
  })
})

describe('with --dev', function () {
  it("should read private", function (done) {
    exec('cat test/fixtures/math.js | node bin/qdox --dev', function (err, stdout, stderr) {
      stdout.should.include('sum')
      stdout.should.include('mul')
      done()
    })
  })
})

describe('with -ds *', function () {
  it("should search for all", function (done) {
    exec('cat test/fixtures/math.js | node bin/qdox -ds *', function (err, stdout, stderr) {
      stdout.should.include('sum of two numbers')
      stdout.should.include('Multiply')
      done()
    })
  })
})

describe('with test/fixtures/index.js', function () {
  it("should read file", function (done) {
    exec('node bin/qdox test/fixtures/index.js', function (err, stdout, stderr) {
      stdout.should.include('index')
      done()
    })
  })
})

describe('with -F test/fixtures/index.js', function () {
  it("should read file", function (done) {
    exec('node bin/qdox -F test/fixtures/index.js', function (err, stdout, stderr) {
      stdout.should.include('index')
      done()
    })
  })
})
