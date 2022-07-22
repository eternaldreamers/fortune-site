import * as _ from 'lodash'
import { createAsyncThunk } from '@reduxjs/toolkit'
import reduxData from '@config/redux-data'
import { Container } from 'inversify'

export default (container: Container) =>
  reduxData.reduce((wrapper: any, thunk) => {
    const AnyService: any = container.get(thunk.type)

    const AnyReducer = thunk.methods.reduce(
      (reducer: any, funcName: string) =>
        _.assign(reducer, {
          [funcName]: createAsyncThunk(
            thunk.key.concat('/', funcName),
            async (args) => await AnyService[funcName](args)
          ),
        }),
      {}
    )

    return _.assign(wrapper, { [thunk.key]: AnyReducer })
  }, {})
