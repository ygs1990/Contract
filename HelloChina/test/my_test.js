var HelloChina = artifacts.require("HelloChina");

contract('HelloChina', function(accounts) {
  it("should assert true", function(done) {
    var my_test = HelloChina.deployed();
    assert.isTrue(true);
    done();
  });
});
