/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

const path = require('path');
const getMockName = require('../getMockName');

describe('getMockName', () => {
  it('extracts mock name from file path', () => {
    expect(
      getMockName(path.join('a', '__mocks__', 'c.js'), true)
    ).toBe('c');

    expect(
      getMockName(path.join('a', '__mocks__', 'c', 'd.js'), true)
    ).toBe(path.join('c', 'd'));
  });

  it('does nothing if uniqueMockNames is not enabled', () => {
    expect(
      getMockName(path.join('a', '__mocks__', 'c.js'), false)
    ).toBe('a/__mocks__/c.js');
  });
});
