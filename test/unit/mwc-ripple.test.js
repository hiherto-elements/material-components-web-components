/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {assert} from 'chai';
import {Ripple} from '@hiherto-components/mwc-ripple';
import {RippleSurface} from '@hiherto-components/mwc-ripple/mwc-ripple-surface.js';

let element;

suite('mwc-ripple');

beforeEach(() => {
  element = document.createElement('mwc-ripple');
  document.body.appendChild(element);
});

afterEach(() => {
  document.body.removeChild(element);
});

test('initializes as an mwc-ripple', () => {
  assert.instanceOf(element, Ripple);
});

suite('mwc-ripple-surface');

beforeEach(() => {
  element = document.createElement('mwc-ripple-surface');
  document.body.appendChild(element);
});

afterEach(() => {
  document.body.removeChild(element);
});

test('initializes as an mwc-ripple-surface', () => {
  assert.instanceOf(element, RippleSurface);
});
