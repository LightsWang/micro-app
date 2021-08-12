/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useState } from 'react'
import { Spin } from 'antd'
import config from '../../config'

function Vue3 () {
  const [showLoading, hideLoading] = useState(true)
  const [data, changeData] = useState({from: '来自基座的初始化数据'})

  return (
    <div>
      {
        showLoading && <Spin />
      }
      <micro-app
        name='vue3'
        url={`${config.vue3}micro-app/vue3`}
        data={data}
        onMounted={() => hideLoading(false)}
        baseurl='/micro-app/demo/vue3'
        // shadowDOM
        // destory
        // inline
        disableScopecss
        // disableSandbox
        // macro
      >
      </micro-app>
    </div>
  )
}

export default Vue3