import { VideoDeviceInstance, InstanceModel } from "@/views/video/Instance/typings"
import { defineStore } from "pinia"
import { detail } from '@/api/video/instance'
import { onlyMessage } from "@/utils/comm"

export const useInstanceStore = defineStore({
  id: 'video',
  state: () => ({
    current: {} as VideoDeviceInstance,
    detail: {} as VideoDeviceInstance,
    tabActiveKey: 'Info'
  }),
  actions: {
    setCurrent(current: VideoDeviceInstance) {
      this.current = current
      this.detail = current
    },
    async refresh(id: string) {
      const resp: any = await detail(id)
      if(resp.status === 200){
        this.current = resp.result
        this.detail = resp.result
      }
    },
    setTabActiveKey(key: string) {
      this.tabActiveKey = key
    },
  }
})