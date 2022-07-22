import * as _ from 'lodash'
import { createSlice } from '@reduxjs/toolkit'

export const defaultInitialState = {
  isFetching: false,
  one: {},
  many: [],
}

export default (mapper: Object) =>
  _.entries(mapper).reduce(
    (slice: any, [key, value]: [string, any]) =>
      _.assign(slice, {
        [key]: createSlice({
          name: key,
          initialState: defaultInitialState,
          reducers: {},
          extraReducers: (builder) => {
            _.keys(value).forEach((funcName: string) => {
              builder.addCase(value[funcName].pending, (state) =>
                _.assign(state, { isFetching: true })
              )
              builder.addCase(value[funcName].fulfilled, (state, action) => {
                const payload = action.payload
                const source = Array.isArray(action.payload)
                  ? { many: payload }
                  : { one: payload }
                return _.assign(state, { isFetching: false }, source)
              })
              builder.addCase(value[funcName].rejected, (state) =>
                _.assign(state, { isFetching: false })
              )
            })
          },
        }),
      }),
    {}
  )
