/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

import * as ReactFiberTreeReflection from 'shared/ReactFiberTreeReflection';
import * as ReactInstanceMap from 'shared/ReactInstanceMap';
// TODO: direct imports like some-package/src/* are bad. Fix me.
import * as ReactFiberErrorLogger
  from 'react-reconciler/src/ReactFiberErrorLogger';
import ReactErrorUtils from 'shared/ReactErrorUtils';

import ReactDOM from './ReactDOM';
import ReactBrowserEventEmitter from '../events/ReactBrowserEventEmitter';
import ReactDOMComponentTree from './ReactDOMComponentTree';
import TapEventPlugin from '../events/TapEventPlugin';

Object.assign(
  (ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: any),
  {
    // These are real internal dependencies that are trickier to remove:
    ReactBrowserEventEmitter,
    ReactErrorUtils,
    ReactFiberErrorLogger,
    ReactFiberTreeReflection,
    ReactDOMComponentTree,
    ReactInstanceMap,
    // Used by www msite:
    TapEventPlugin,
  },
);

export default ReactDOM;
