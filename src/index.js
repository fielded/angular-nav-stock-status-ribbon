import angular from 'angular'

import stockStatusRibbon from './stock-status-ribbon.component'
import stockStatusTrend from './stock-status-trend.component'

angular
  .module('angularNavStockStatusRibbon', [])
  .component('stockStatusRibbon', stockStatusRibbon)
  .component('stockStatusTrend', stockStatusTrend)
