import React, { useState } from 'react'
import { Input, Form, Button, Slider, Icon } from 'antd'
import { useTranslation } from 'react-i18next'
import TypedString from 'components/TypedString'
import debounce from 'utils/debounce'
import { getCv, editCv } from 'utils/cvHelper'
import './index.styl'

const FormItem = Form.Item

const SKILL_INPUT_NAME = 'skillName'

const SkillsSection = ({ form }) => {
  const cv = getCv()

  const [skills, setSkills] = useState(cv.skills)
  const { getFieldDecorator, validateFields, resetFields, getFieldValue } = form
  const { t } = useTranslation()

  const updateSkills = skills => {
    setSkills(skills)
    editCv({ skills })
  }

  const addSkill = () => {
    validateFields((err, { skillName }) => {
      if (err) {
        console.log(err)
        return false
      }
      updateSkills([...new Set([{ title: skillName, level: 50 }, ...skills])])
      resetInput()
    })
  }

  const resetInput = () => {
    resetFields([SKILL_INPUT_NAME])
  }

  const getSkillInputValue = () => {
    return getFieldValue(SKILL_INPUT_NAME)
  }

  const rmSkill = skill => () => {
    const skillsClone = [...skills]
    skillsClone.splice(skills.indexOf(skill), 1)
    updateSkills(skillsClone)
  }

  const onLevelChange = debounce((skill, value) => {
    const skillsClone = [...skills]
    skillsClone[skillsClone.indexOf(skill)].level = value
    updateSkills(skillsClone)
  }, 250)

  const renderSkill = skill => (
    <div key={skill.title} className='SkillsSection-skill'>
      <label>{skill.title}</label>
      <div className='SkillsSection-slider-wrapper'>
        <span>0</span>
        <Slider defaultValue={skill.level} onChange={value => onLevelChange(skill, value)} />
        <span>100</span>
      </div>
      <Icon type='close' className='SkillsSection-rm-icon' onClick={rmSkill(skill)} />
    </div>
  )

  return (
    <div className='SkillsSection'>
      <FormItem
        label={<TypedString strings={[t('skillName')]} />}
        className='SkillsSection-input'
      >
        {getFieldDecorator(SKILL_INPUT_NAME, {
          rules: [{ required: true, whitespace: true }]
        })(
          <Input placeholder={t('skillNamePlchldr')} />
        )}
        <Button onClick={addSkill} disabled={!getSkillInputValue()}>add</Button>
      </FormItem>
      <div className='SkillsSection-skills'>
        {
          skills.map(renderSkill)
        }
      </div>
      {
        skills.length === 0 &&
          <span><TypedString strings={[t('addSkillsHere')]} /></span>
      }
    </div>
  )
}

export default SkillsSection
