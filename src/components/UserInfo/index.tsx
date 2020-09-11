import React from 'react'

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicrophoneIcon,
  HeadphoneIcon,
  SettingsIcon
} from './styles'

export const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>UserName1</strong>
          <span>#12345</span>
        </UserData>
      </Profile>
      <Icons>
        <MicrophoneIcon></MicrophoneIcon>
        <HeadphoneIcon></HeadphoneIcon>
        <SettingsIcon></SettingsIcon>
      </Icons>
    </Container>
  )
}
