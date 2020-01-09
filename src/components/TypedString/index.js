import React, { useEffect, useState } from 'react'
import Typed from 'react-typed'
import { DEFAULT_TYPE_DELAY } from 'appConstants'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

const TypedString = ({ className = '', strings = [], typeSpeed = DEFAULT_TYPE_DELAY, showCursor = false, updatable = true }) => {
  const [blockKey, setBlockKey] = useState(0)
  const { i18n } = useTranslation()

  const incrementKey = () => setBlockKey(blockKey + 1)

  useEffect(() => {
    updatable && incrementKey()
  }, [i18n.language])
  return (
    <Typed
      className={classNames('TypedString', className)}
      key={blockKey}
      strings={strings}
      typeSpeed={typeSpeed}
      showCursor={showCursor}
    />
  )
}

export default TypedString
