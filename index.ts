import * as Typings from "@4th-law/typings"
import config = require("config")
import * as _ from "lodash"

export default class SensorTemplate extends Typings.Sensor {
  protected _category = "SENSOR" as NProfile.ECategory.SENSOR
  protected _type = "[insert type]" as NProfile.EType.OPTICAL
  protected _make: string
  protected _model: string
  protected _id: string
  protected _version: string
  // _sampleInterval should be _samplePeriod, needs to be changed in typings
  protected _sampleInterval = config.get("profile.sampleInterval")
  protected _lastDataPoint = null as any
  protected _specs: object

  public constructor() {
    super()
  }

  public get data() {
    return this._lastDataPoint as NData.ISensor
  }

  public get info() {
    return {
      category: this._category,
      type: this._type,
      make: this._make,
      model: this._model,
      id: this._id,
      version: this._version,
      sampleInterval: this._sampleInterval,
      specs: this._specs,
    } as NProfile.IInfo
  }
}
