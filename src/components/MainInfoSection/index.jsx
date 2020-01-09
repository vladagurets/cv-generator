import React from 'react'
import { Input, Form } from 'antd'
import { useTranslation } from 'react-i18next'
import TypedString from 'components/TypedString'
import { getCv } from 'utils/cvHelper'

const FormItem = Form.Item
const TextArea = Input.TextArea

const MainInfoSection = ({ form }) => {
  const cv = getCv()

  const { getFieldDecorator } = form
  const { t } = useTranslation()
  return (
    <div className='MainInfoSection'>
      <FormItem label={<TypedString strings={[t('userName')]} />}>
        {getFieldDecorator('userName', {
          rules: [{ required: true, whitespace: true }],
          initialValue: cv.userName
        })(
          <Input placeholder={t('namePlchldr')} />
        )}
      </FormItem>
      <FormItem label={<TypedString strings={[t('jobTitle')]} />}>
        {getFieldDecorator('jobTitle', {
          rules: [{ required: true, whitespace: true }],
          initialValue: cv.jobTitle
        })(
          <Input placeholder={t('jobTitlePlchldr')} />
        )}
      </FormItem>
      <FormItem label={<TypedString strings={[t('professionalSummary')]} />}>
        {getFieldDecorator('professionalSummary', {
          rules: [{ required: true, whitespace: true }],
          initialValue: cv.professionalSummary
        })(
          <TextArea placeholder={t('professionalSummaryPlchlder')} />
        )}
      </FormItem>
    </div>
  )
}

export default MainInfoSection
