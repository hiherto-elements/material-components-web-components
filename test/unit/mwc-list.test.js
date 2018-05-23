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
import {ListItem} from '@hiherto-components/mwc-list/mwc-list-item.js';
import {ListItemSeparator} from '@hiherto-components/mwc-list/mwc-list-item-separator.js';

let element;

suite('mwc-list-item');

beforeEach(() => {
  element = document.createElement('mwc-list-item');
  document.body.appendChild(element);
});

afterEach(() => {
  document.body.removeChild(element);
});

test('initializes as an mwc-list-item', () => {
  assert.instanceOf(element, ListItem);
});

suite('mwc-list-item-separator');

beforeEach(() => {
  element = document.createElement('mwc-list-item-separator');
  document.body.appendChild(element);
});

afterEach(() => {
  document.body.removeChild(element);
});

test('initializes as an mwc-list-item-separator', () => {
  assert.instanceOf(element, ListItemSeparator);
});
