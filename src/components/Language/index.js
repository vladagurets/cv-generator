import React from 'react'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import './index.styl'

const Language = () => {
  const { i18n } = useTranslation()
  const onChange = lang => () => {
    i18n.changeLanguage(lang)
  }
  const getClassNames = lang => classNames({
    'Language-active': i18n.language === lang
  })
  return (
    <div className='Language'>
      <span className={getClassNames('en')} onClick={onChange('en')}>en</span>
      /
      <span className={getClassNames('ru')} onClick={onChange('ru')}>ru</span>
    </div>
  )
}

export default Language
