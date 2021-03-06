/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

const invariant = require('fbjs/lib/invariant');

function validateCallback(callback: ?Function) {
  invariant(
    !callback || typeof callback === 'function',
    'Invalid argument passed as callback. Expected a function. Instead ' +
      'received: %s',
    callback,
  );
}

export default validateCallback;
