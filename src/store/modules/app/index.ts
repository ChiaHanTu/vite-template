interface AppState {
  reloadFlag: boolean
  settingDrawerVisible: boolean
  siderCollapse: boolean
  mixSiderFixed: boolean
}
export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    reloadFlag: true,
    settingDrawerVisible: false,
    siderCollapse: false,
    mixSiderFixed: false
  }),
  actions: {
    /**
     * reload
     * @param duration - 重載的延遲時間(ms)
     */
    async reloadPage(duration = 0) {
      this.reloadFlag = false
      await nextTick()
      if (duration) {
        setTimeout(() => {
          this.reloadFlag = true
        }, duration)
      } else {
        this.reloadFlag = true
      }
      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 })
      }, 100)
    },
    openSettingDrawer() {
      this.settingDrawerVisible = true
    },
    closeSettingDrawer() {
      this.settingDrawerVisible = false
    },
    toggleSettingDrawerVisible() {
      this.settingDrawerVisible = !this.settingDrawerVisible
    },
    setSiderCollapse(collapse: boolean) {
      this.siderCollapse = collapse
    },
    toggleSiderCollapse() {
      this.siderCollapse = !this.siderCollapse
    },
    setMixSiderIsFixed(isFixed: boolean) {
      this.mixSiderFixed = isFixed
    },
    toggleMixSiderFixed() {
      this.mixSiderFixed = !this.mixSiderFixed
    }
  }
})
