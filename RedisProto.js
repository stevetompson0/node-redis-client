/**
 * Created by steve on 2016-05-17.
 */

/**
 * RedisProto -- a class used to interpret responses from Redis server
 */
class RedisProto {

  constructor() {
    self.text = '';  // Partial command to be concatenated with the next input
    self.lines = [];  // Commands that have been interpreted
  }


}

module.exports = RedisProto;
