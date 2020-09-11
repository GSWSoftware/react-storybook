import React from 'react'
import { Message } from '.'
import { GlobalStyle } from '../../../styles/global'

export default {
  title: 'Message',
  component: Message
}

export const MessageV1 = () => (
  <>
    <div style={{ background: 'black' }}>
      <Message
        author='Tim Habey'
        content='Fala Parsas meu cachorro pediu o link daquela treta que os anão saem no soco alguém tem?'
        date={'01/01/2020'}
      ></Message>

      <GlobalStyle />
    </div>
  </>
)
