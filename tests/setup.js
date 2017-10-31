/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */

require('babel-register');
require('babel-polyfill');

const chai = require('chai');
const Adapter = require('enzyme-adapter-react-16');
const enzyme = require('enzyme');

enzyme.configure({ adapter: new Adapter() });

global.expect = chai.expect;
global.shallow = enzyme.shallow;
global.mount = enzyme.mount;
global.render = enzyme.render;
