import React from 'react'
import { Layout } from '.'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Layout',
  component: Layout
}

export const LayoutV1 = () => (
  <>
    <Layout />
    <GlobalStyle />
  </>
)

LayoutV1.parameters = {
  jest: ['layout.spec.tsx']
}
