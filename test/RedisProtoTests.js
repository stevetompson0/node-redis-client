/**
 * Created by steve on 2016-05-17.
 */
'use strict';
const expect = require('chai').expect;

const RedisProto = require('../RedisProto');
const proto = new RedisProto();


describe('RedisProtoTestSuite', function() {

  beforeEach(function() {
    // clear the data inside the interpreter before new tests
    proto.clear();
  });

  describe('RedisProto-interpret-error-response(-)', function() {

    it('should interpret an error command', function() {
      proto.push('-ERR unknown command \'help\'\r\n');
      proto.next();
      expect(proto.result).to.deep.equal({ error: 'ERR unknown command \'help\'' });
    });

  });



});