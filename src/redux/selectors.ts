import * as _ from 'lodash'
import reduxData from '@config/redux-data'
import { capitalize } from '@common/pipes'
import { defaultInitialState } from './slices'

const baseName = 'select'
const selectorNames = _.keys(defaultInitialState)

export default () =>
  reduxData.reduce((wrapper: any, { key }) => {
    selectorNames.map((name: string) => {
      const propertyName = baseName.concat(capitalize(key), capitalize(name))
      wrapper[propertyName] = (state: any) => state[key][name]
    })
    return wrapper
  }, {})
