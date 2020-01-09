import React from 'react'
import { Layout } from 'antd'
import Language from 'components/Language'
import AnimatedDot from 'components/AnimatedDot'
import TypedString from 'components/TypedString'
import MainLogo from 'components/MainLogo'

import './index.styl'

const { Header } = Layout

const MainHeader = () => {
  return (
    <Header className='MainHeader'>
      <div className='MainHeader-content'>
        <div className='MainHeader-logo'>
          <MainLogo />
          <TypedString strings={['Gēnērātōr']} updatable={false} />
          <AnimatedDot />
        </div>
        <Language />
      </div>
    </Header>
  )
}

export default MainHeader
