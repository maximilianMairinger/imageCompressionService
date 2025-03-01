import { merge } from "webpack-merge"
import commonMod from "./rollup.node.common.config.mjs"


export default merge(commonMod, {
  input: 'app/src/imageCompressionService.ts',
  output: {
    file: 'app/dist/cjs/imageCompressionService.js',
    format: 'cjs'
  },
})