import { configureStore } from '@reduxjs/toolkit'

import bootstrap from '@common/ioc'
import genThunks from './thunks'
import genSlices from './slices'
import genReducers from './reducers'
import genActions from './actions'
import genSelectors from './selectors'

const container = bootstrap()
const thunks = genThunks(container)
const slices = genSlices(thunks)
const reducer = genReducers(slices)

export const actions = genActions(thunks)
export const selectors = genSelectors()

export const store = configureStore({
  reducer,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
