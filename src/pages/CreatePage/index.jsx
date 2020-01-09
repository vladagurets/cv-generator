import React from 'react'
import { Form } from 'antd'
import Steps from 'components/Steps'
import { useTranslation } from 'react-i18next'
import TypedString from 'components/TypedString'
import MainInfoSection from 'components/MainInfoSection'
import PhotoSection from 'components/PhotoSection'
import SkillsSection from 'components/SkillsSection'
import { editCv } from 'utils/cvHelper'

const CreatePage = ({ form }) => {
  const { t } = useTranslation()

  const getSteps = () => [
    {
      key: t('mainInfo'),
      title: <TypedString strings={[t('mainInfo')]} />,
      description: t('mainStepDesct'),
      component: MainInfoSection,
      props: { form }
    },
    {
      key: t('photo'),
      title: <TypedString strings={[t('photo')]} />,
      description: t('photoStepDescr'),
      component: PhotoSection,
      props: { form }
    },
    {
      key: t('skills'),
      title: <TypedString strings={[t('skills')]} />,
      description: t('skillsStepDescr'),
      component: SkillsSection,
      props: { form }
    }
  ]
  const validateFields = () => {
    return new Promise((resolve, reject) => {
      form.validateFields((err, values) => {
        if (err) {
          resolve(false)
        }
        editCv(values)
        resolve(true)
      })
    })
  }
  return (
    <div className='CreatePage'>
      <Form>
        <Steps steps={getSteps()} beforeNextStep={validateFields} />
      </Form>
    </div>
  )
}

export default Form.create()(CreatePage)
