// 獲取全局加載接口
export function getGlobalFileExport(Modules: any) {
  const currentModuleFiles = Object.values(Modules)
  return currentModuleFiles.reduce((cur: any, pre: any) => {
    return {
      ...cur,
      ...pre
    }
  }, {})
}
