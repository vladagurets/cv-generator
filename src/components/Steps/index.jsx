import React, { useState } from 'react'
import { Steps as AntSteps, Button } from 'antd'
import QuestionIcon from 'components/QuestionIcon'
import './index.styl'

const { Step: AntStep } = AntSteps

const _beforeNextStep = () =>
  new Promise(resolve => {
    resolve(true)
  })

const Steps = ({ steps, beforeNextStep = _beforeNextStep }) => {
  const [step, setStep] = useState(0)

  const Comp = steps[step].component

  const nextStep = () => {
    beforeNextStep().then(res => {
      res && setStep(step + 1)
    })
  }
  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className='Steps'>
      <div className='Steps-header'>
        <AntSteps className='Steps-steps' direction='vertical' current={step} size='small'>
          {steps.map(item => <AntStep key={item.key} title={item.title} />)}
        </AntSteps>
      </div>
      <div className='Steps-content'>
        <div className='Steps-actions'>
          <Button onClick={prevStep} disabled={!steps[step - 1]}>
            prev
          </Button>
          <Button onClick={nextStep} disabled={!steps[step + 1]}>
            next
          </Button>
          <QuestionIcon tooltip={steps[step].description} />
        </div>
        <Comp {...steps[step].props} />
      </div>
    </div>
  )
}

export default Steps
