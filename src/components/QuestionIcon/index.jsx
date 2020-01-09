import React from 'react'
import { Tooltip, Icon } from 'antd'
import './index.styl'

const QuestionIcon = ({ tooltip }) => (
  <Tooltip title={tooltip}>
    <Icon type='question-circle' className='QuestionIcon' />
  </Tooltip>
)

export default QuestionIcon
