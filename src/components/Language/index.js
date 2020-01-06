import React from 'react'
import { Radio } from 'antd'
import i18n from '../../i18n'

const Language = () => {
  const onChange = ({ target }) => {
    i18n.changeLanguage(target.value)
  }
  return (
    <Radio.Group onChange={onChange}>
      <Radio value='en'>en</Radio>
      <Radio value='ru'>ru</Radio>
    </Radio.Group>
  )
}

export default Language
