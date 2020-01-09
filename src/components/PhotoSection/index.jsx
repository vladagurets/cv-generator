import React, { useState, useEffect } from 'react'
import ImgCrop from 'antd-img-crop'
import { Upload, Icon } from 'antd'
import { useTranslation } from 'react-i18next'
import TypedString from 'components/TypedString'
import { getCv } from 'utils/cvHelper'

import './index.styl'

const PhotoSection = ({ form }) => {
  const cv = getCv()

  const { getFieldDecorator, setFieldsValue } = form

  const [base64Url, setBase64Url] = useState(cv.photo || null)

  const { t } = useTranslation()

  const getBase64Url = file =>
    new Promise((resolve, reject) => {
      const reader = new window.FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setBase64Url(reader.result)
        console.log(reader.result);
        resolve()
      }
      reader.onerror = error => reject(error)
    })

  const beforeUpload = (file, fileList) => {
    getBase64Url(file)
    return false
  }

  useEffect(() => {
    if (base64Url) {
      setFieldsValue({ photo: base64Url })
    }
  }, [base64Url])

  return (
    <div className='PhotoSection'>
      <div className='PhotoSection-form-item'>
        <TypedString className='PhotoSection-label' strings={[t('photoStepDescr')]} />
        <ImgCrop
          width={200}
          height={200}
          modalTitle={t('cropImage')}
        >
          {getFieldDecorator('photo', {
            rules: [{ required: true }],
            // initialValue: base64Url
          })(
            <Upload
              action='/cv-generator'
              listType='picture-card'
              fileList={[]}
              beforeUpload={beforeUpload}
            >
              <Icon type='plus' />
            </Upload>
          )}
        </ImgCrop>
      </div>
      {
        base64Url &&
          <div
            className='PhotoSection-preview'
            style={{ backgroundImage: `url(${base64Url})` }}
          />
      }
    </div>
  )
}

export default PhotoSection
