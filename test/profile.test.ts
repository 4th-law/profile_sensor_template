import * as Typings from "@4th-law/typings"
import chai = require("chai")
import mocha = require("mocha")
const expect = chai.expect
const assert = chai.assert
const should = chai.should()

import profile from "../index"

let sensor: any

const hookBefore = () => {
  sensor = new profile()
}

const hookAfter = () => {
  // code...
}

describe("Sensor Profile Template", () => {
  before(hookBefore)
  after(hookAfter)

  it("should return info about the sensor when the info function is called", (done) => {
    const info = sensor.info
    assert.typeOf(info.category, "string")
    assert.typeOf(info.type, "string")
    assert.typeOf(info.make, "string")
    assert.typeOf(info.model, "string")
    assert.typeOf(info.id, "string")
    assert.typeOf(info.version, "string")
    assert.typeOf(info.sampleInterval, "number")
    if (info.specs) {
      assert.typeOf(info.specs, "object")
    }
    done()
  })

  it("should return the latest data point from the system", (done) => {
    const data = sensor.data
    assert.typeOf(data.name, "string")
    assert.typeOf(data.id, "string")
    assert.typeOf(data.ts, "number")
    data.data.should.exist
    done()
  })
})
