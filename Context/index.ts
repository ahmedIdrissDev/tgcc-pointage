import { ContextStoreProvider } from '@/types'
import { create } from 'zustand'
export const ContextStoreDataProvider = create<ContextStoreProvider>((set)=>({
    data:[] ,
    setdata(data) {
     set({data:data})
    },
}))