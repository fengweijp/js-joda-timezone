/*
 * @copyright (c) 2016, Philipp Thürwächter, Pattrick Hüper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */

import { ZoneRulesProvider, ZoneId } from 'js-joda';

import plug from '../src/plug';

plug({ ZoneRulesProvider, ZoneId });