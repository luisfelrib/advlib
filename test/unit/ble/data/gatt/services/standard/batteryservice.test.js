/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var batteryservice = require("../../../../../../../lib/ble/data/gatt/"+
                                        "services/standard/batteryservice.js");
var assert = require('assert'); 


// Inputs for the scenario
var INPUT_DATA = {
  serviceData: { 
    uuid: "180f",
    data: "1204eb150000" 
  }
};

// Expected outputs for the scenario
var EXPECTED_DATA = {
  serviceData: {
    uuid: "180f",
    data: "1204eb150000",
    specificationName: "Battery Service"
  }
};

describe('ble data gatt standard batteryservice', function() {

  // Test the process function
  it('should parse BLE advertiser data batteryservice', function() {
    var advertiserData = INPUT_DATA;
    batteryservice.process(advertiserData);
    assert.deepEqual(advertiserData, EXPECTED_DATA);
  });
});