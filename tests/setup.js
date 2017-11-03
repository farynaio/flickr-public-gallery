/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */

require('babel-register');
require('babel-polyfill');
require('source-map-support/register');

const chai = require('chai');
const Adapter = require('enzyme-adapter-react-16');
const enzyme = require('enzyme');
const sinon = require('sinon');

enzyme.configure({ adapter: new Adapter() });

global.expect = chai.expect;
global.shallow = enzyme.shallow;
global.mount = enzyme.mount;
global.render = enzyme.render;
global.spy = sinon.spy;
global.stub = sinon.stub;

['.jpeg', '.jpg', '.png', '.gif', '.svg', '.css', '.scss'].forEach(item => require.extensions[item] = () => null);
