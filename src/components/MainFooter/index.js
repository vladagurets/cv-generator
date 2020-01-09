import React from 'react'
import { Layout } from 'antd'
import './index.styl'

const { Footer } = Layout

const MainFooter = () => {
  return (
    <Footer className='MainFooter'>
      <div className='MainFooter-content'>
        Footer
      </div>
    </Footer>
  )
}

export default MainFooter
