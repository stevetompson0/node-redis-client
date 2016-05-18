/**
 * Created by steve on 2016-05-17.
 */
'use strict';

/**
 * RedisProto -- a class used to interpret responses from Redis server
 */
class RedisProto {

  constructor() {
    this.text = '';  // Partial command to be concatenated with the next input
    this.lines = [];  // Commands that have been interpreted
  }

  // clear the stored data for testing
  clear() {
    this.text = '';
    this.lines = [];
    this.result = null;
  }




}

module.exports = RedisProto;
