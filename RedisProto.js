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

  // accept new response text
  push(text) {
    // combine the unused text with the new text and split by \r\n
    const newLines = (this.text + text).split('\r\n');
    // the last item of newLines must be empty
    newLines.pop();
    // concatenate new lines to unresolved lines
    this.lines = this.lines.concat(newLines);

  }

  // output next valid result or false
  next() {
    const lines = this.lines;

    // check whether lines is empty
    if (!lines[0]) {
      return false;
    }

    const first = lines[0];

    switch (first[0]) {
      case '-': {
        // remove the first line and return the error message
        this.lines = lines.slice(1);
        this.result = {error: first.slice(1)};
        return;
      }
      default: {
        return this.result=false;
      }
    }

  }




}

module.exports = RedisProto;
