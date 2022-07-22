import * as _ from 'lodash'
import { capitalize } from '@common/pipes'

export default (mapper: Object) =>
  _.entries(mapper).reduce((acc: any, [key, value]: [string, any]) => {
    _.keys(value).forEach((funcName: string) => {
      acc[key.concat(capitalize(funcName))] = value[funcName]
    })
    return acc
  }, {})
