import assert from 'assert';
import App from './app';

describe('Calculator', function() {
  before(function() { });

  describe('add(a,b)', function() {
    it('should return 3 when passed params are 1,2', function() {
      assert.equal(App.add(1, 2), 3);
    });
  });

  after(function() { });
});
