import defaultConfig from './config.js'

class stockStatusRibbonController {
  constructor () {
    this.config = Object.assign({}, defaultConfig, this.config)
  }
}

export default stockStatusRibbonController
