/*
 * Basado en código bajo licencia Apache 2.0.
 * Archivo original: parte de mi TFG.
 */

import React from 'react';
import {render} from 'enzyme';
import AppRubix from './../AppRubix';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<AppRubix />);
});