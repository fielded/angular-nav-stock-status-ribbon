import stockStatusRibbonTemplate from './stock-status-ribbon.html'
import controller from './stock-status-ribbon.controller'

const stockStatusRibbon = {
  template: stockStatusRibbonTemplate,
  bindings: {
    data: '<',
    config: '<'
  },
  controller
}

export default stockStatusRibbon
