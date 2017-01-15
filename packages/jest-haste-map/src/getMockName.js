/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';

const path = require('path');

const mocksPattern = '__mocks__';

const getMockName = (filePath: string, uniqueMockNames: boolean) => {
  let mockName = filePath;
  if (uniqueMockNames) {
    const mockPath = filePath.split(mocksPattern)[1];
    const name = mockPath.lastIndexOf(path.extname(mockPath));
    mockName = mockPath.substring(1, name);
  }
  return mockName;
};

module.exports = getMockName;
