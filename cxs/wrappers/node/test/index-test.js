var chai = require('chai');
var fs = require('fs-extra');
var index = require('../src/index.js');
var assert = require('assert');
var parentDir = require('path');
var CXSRuntime = index.CXSRuntime;
var CXSRuntimeConfig = index.CXSRuntimeConfig;
var currentDir = parentDir.dirname(module.filename);
var ref = require('ref')
var Struct = require('ref-struct')


describe('call to cxs_init with provided path', function() {
    var path = parentDir.dirname(currentDir);
    path += "/lib/libcxs.so";
    var run = new CXSRuntime(new CXSRuntimeConfig(path));
    it('should return 0', function () {
        assert.equal(run.ffi.cxs_init(), 0)
    })
});


describe('call to cxs_connection_create ', function() {
    var path = parentDir.dirname(currentDir);
    path += "/lib/libcxs.so";
    var run = new CXSRuntime(new CXSRuntimeConfig(path));
    var intPtr = ref.alloc('int')
    it('should return 0', function () {
        assert.equal(run.ffi.cxs_connection_create("dog, cat, man", intPtr), 0)
    })
});

describe('call to cxs_connection_connect without the ability to connect', function() {
    var path = parentDir.dirname(currentDir);
    path += "/lib/libcxs.so";
    var run = new CXSRuntime(new CXSRuntimeConfig(path));
    it('should return 1', function () {
        assert.equal(run.ffi.cxs_connection_connect(2), 1)
    })
});

describe('call to cxs_connection_get_data ', function() {
    var path = parentDir.dirname(currentDir);
    path += "/lib/libcxs.so";
    var run = new CXSRuntime(new CXSRuntimeConfig(path));
    it('should return 0', function () {
        assert.equal(run.ffi.cxs_connection_get_data(2), 0)
    })
});

describe('call to cxs_connection_get_state ', function() {
    var path = parentDir.dirname(currentDir);
    path += "/lib/libcxs.so";
    var run = new CXSRuntime(new CXSRuntimeConfig(path));
    it('should return 0', function () {
        var intPtr = ref.alloc('int')
        assert.equal(run.ffi.cxs_connection_get_state(2, intPtr), 0)
    })
});

describe('call to cxs_connection_release without ability to release ', function() {
    var path = parentDir.dirname(currentDir);
    path += "/lib/libcxs.so";
    var run = new CXSRuntime(new CXSRuntimeConfig(path));
    it('should return 1', function () {
        assert.equal(run.ffi.cxs_connection_release(2), 1)
    })
});

// var CxsStatus = Struct({
//     'handle': 'int',
//     'status': 'int',
//     'msg': 'string'
// });
//
// var cxsStruct = new CxsStatus({
//     'handle': 8,
//     'status': 9,
//     'msg': "StringMSG"
// });


// describe('call to cxs_connection_list_state ', function() {
//     var path = parentDir.dirname(currentDir);
//     path += "/lib/libcxs.so";
//     var run = new CXSRuntime(new CXSRuntimeConfig(path));
//     var structPtr = ref.alloc(cxsStruct)
//
//     it('should return 0', function () {
//         assert.equal(run.ffi.cxs_connection_list_state(structPtr), 0)
//     })
// });