import React from 'react'
import { ChannelData } from '.'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'ChannelData',
  component: ChannelData
}

export const ChannelDataV1 = () => (
  <>
    <ChannelData />
    <GlobalStyle />
  </>
)
