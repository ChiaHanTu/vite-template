import { App } from "vue";

import RelaxedLayout from "@relaxed/layout";
import { ColorPicker } from "@erkelost/colorpicker";
/**
 * 全局注册自定义组件 待完善
 * @param app
 */
const registerComponents = [RelaxedLayout, ColorPicker];
export function setupCustomComponents(app: App) {
  registerComponents.forEach((component) => {
    app.component(component.name, component);
  });
}
