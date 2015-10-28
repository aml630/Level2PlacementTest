describe('pingPong', function() {
  it("is false for an input that is not divisible by 15", function() {
    expect(pingPong(16)).to.equal(false);
  });
});
