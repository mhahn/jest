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

import type {Path} from 'types/Config';

const path = require('path');

const mocksPattern = '__mocks__';

const getMockName = (filePath: string, rootDir: Path) => {
  let mockName;

  const replaced = path.normalize(filePath.replace(mocksPattern, ''));
  if (path.dirname(replaced) === rootDir) {
    const mockPath = filePath.split(mocksPattern)[1];
    const endIndex = mockPath.lastIndexOf(path.extname(mockPath));
    mockName = mockPath.substring(1, endIndex);
  } else {
    mockName = replaced.substr(0, replaced.lastIndexOf(path.extname(replaced)));
  }
  return mockName;
};

module.exports = getMockName;
