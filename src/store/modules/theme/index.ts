import { defineStore } from 'pinia'
import LocalCache from '@/utils/cache'
import { getThemeSettings } from './helpers'
import { useAppStore } from '../app'
type ThemeState = Theme.Setting

export const useThemeStore = defineStore('theme-store', {
  state: (): ThemeState => getThemeSettings(),
  actions: {
    resetThemeStore() {
      this.$reset()
    },
    setDarkMode(darkMode: boolean) {
      this.darkMode = darkMode
    },
		toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
    setFollowSystemTheme(visible: boolean) {
      this.followSystemTheme = visible
    },
    autoFollowSystemMode(darkMode: boolean) {
      if (this.followSystemTheme) {
        this.darkMode = darkMode
      }
    },
    setLayoutMinWidth(minWidth: number) {
      this.layout.minWidth = minWidth
    },
    setLayoutMode(mode: EnumType.ThemeLayoutMode) {
      const app = useAppStore()
      if (mode === 'vertical-mix') {
        app.setSiderCollapse(true)
      }
      this.layout.mode = mode
    },
    setSiderInverted(isInverted: boolean) {
      this.sider.inverted = isInverted
    },
    setHeaderInverted(isInverted: boolean) {
      this.header.inverted = isInverted
    },
    setTabMoveable(isMoveable: boolean) {
      this.tab.tabMoveable = isMoveable
    },
    setThemeColor(themeColor: string) {
      LocalCache.setCache('color', themeColor)
      this.themeColor = themeColor
    },
    setIsFixedHeaderAndTab(isFixed: boolean) {
      this.fixedHeaderAndTab = isFixed
    },
    setReloadVisible(visible: boolean) {
      this.showReload = visible
    },
    setHeaderHeight(height: number | null) {
      if (height) {
        this.header.height = height
      }
    },
    setHeaderCrumbVisible(visible: boolean) {
      this.header.crumb.visible = visible
    },
    setHeaderCrumbIconVisible(visible: boolean) {
      this.header.crumb.showIcon = visible
    },
    setTabVisible(visible: boolean) {
      this.tab.visible = visible
    },
    setTabHeight(height: number | null) {
      if (height) {
        this.tab.height = height
      }
    },
    setTabIsCache(isCache: boolean) {
      this.tab.isCache = isCache
    },
    setSiderWidth(width: number | null) {
      if (width) {
        this.sider.width = width
      }
    },
    setSiderCollapsedWidth(width: number) {
      this.sider.collapsedWidth = width
    },
    setMixSiderWidth(width: number | null) {
      if (width) {
        this.sider.mixWidth = width
      }
    },
    setMixSiderCollapsedWidth(width: number) {
      this.sider.mixCollapsedWidth = width
    },
    setMixSiderChildMenuWidth(width: number) {
      this.sider.mixChildMenuWidth = width
    },
    setHorizontalMenuPosition(position: EnumType.ThemeHorizontalMenuPosition) {
      this.menu.horizontalPosition = position
    },
    setFooterIsFixed(isFixed: boolean) {
      this.footer.fixed = isFixed
    },
    setFooterHeight(height: number) {
      this.footer.height = height
    },
    setPageIsAnimate(animate: boolean) {
      this.page.animate = animate
    },
    setPageAnimateMode(mode: EnumType.ThemeAnimateMode) {
      this.page.animateMode = mode
    }
  }
})
