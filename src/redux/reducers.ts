import * as _ from 'lodash'

export default (mapper: Object) =>
  _.entries(mapper).reduce(
    (wrapper: any, [key, value]: [string, any]) =>
      _.assign(wrapper, { [key]: value.reducer }),
    {}
  )
