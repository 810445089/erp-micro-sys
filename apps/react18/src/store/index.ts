

import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import globalSlice from './globalSlice'

export const store = configureStore({
    reducer: {
        global: globalSlice
    },
    // 关闭序列化检查（解决 redux-persist 的非序列化数据警告）
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


