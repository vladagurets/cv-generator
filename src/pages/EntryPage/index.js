
import React from 'react'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import TypedString from 'components/TypedString'
import { Link } from 'react-router-dom'

import './index.styl'

const EntryPage = () => {
  const { t } = useTranslation()

  return (
    <div className='EntryPage'>
      <p className='EntryPage-description'>
        <TypedString strings={[t('appDescription')]} />
      </p>
      <Button>
        <Link to='/create'>
          <TypedString strings={[t('generate')]} />
        </Link>
      </Button>
    </div>
  )
}

export default EntryPage
