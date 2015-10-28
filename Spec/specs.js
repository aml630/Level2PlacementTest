describe('pingPong', function() {
  it("is true for an input that is divisible by 15", function() {
    expect(pingPong(15)).to.equal(true);
  });

  it("is true for an input that is divisible by 5", function() {
    expect(pingPong(5)).to.equal(true);
  });

  it("is true for an input that is divisible by 3", function() {
    expect(pingPong(3)).to.equal(true);
  });
  it("is false for any input not divisible by 3, 5, or 15", function() {
    expect(pingPong(16)).to.equal(false);
  });




});
