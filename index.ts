/** @module SensorTemplate */
/** profile_sensor_template */

/** 4th Law Typings module, to ensure consistency and decrease the probabiliby of errors */
import * as Typings from "@4th-law/typings-public"
import * as config from "config"

export default class SensorTemplate extends Typings.Sensor {
  /**
   * @param {NProfile.ECategory} _category - tells us if this is a sensor or actuator
   * @param {NProfile.EType} _type - tells us what kind of sensor this is (optical, mechanical, etc. see @4th-law/typings)
   * @param {string} _make - tells us the manufacturer of the particular sensor this profile is for
   * @param {string} _model - tells us the model of the sensor in question
   * @param {string} _id - tells us the product id for the sensor this profile is for
   * @param {string} _version - the version of this profile, in vX.X.X format
   * @param {number} _sampleInterval - the number of miliseconds between updates to _lastDataPoint
   * @param {NData.ISensor} _lastDataPoint - the last data point sampled by this profile
   * @param {object} _specs - any information specific to this profile, such as the resolution of a camera
   */
  protected _category = "SENSOR" as NProfile.ECategory
  protected _type = "[insert type]" as NProfile.EType
  protected _make: string
  protected _model: string
  protected _id: string
  protected _version: string
  // _sampleInterval should be _samplePeriod, needs to be changed in typings
  protected _sampleInterval: number
  protected _lastDataPoint: NData.ISensor
  protected _specs: object

  public constructor() {
    super()
    this._category = "SENSOR" as NProfile.ECategory
    this._type = "OPTICAL" as NProfile.EType
    this._make = "insert make"
    this._model = "insert model"
    this._id = "insert id"
    this._version = "v0.1.0"
    this._sampleInterval = config.get("profile.sampleInterval")
    this._specs = {}
  }
}
