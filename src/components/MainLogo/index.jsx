import React from 'react'
import './index.styl'

const generateArcMatrix = size => `
  M ${size / 8},${size - (size / 2.5)}
  A ${size / 2},${size / 2} 0,0,0 ${size - (size / 8)},${size - (size / 2.5)}
`

const MainLogo = ({ size = 45 }) => (
  <svg className='MainLogo' width={`${size}px`} height={`${size}px`} version='1.1' xmlns='http://www.w3.org/2000/svg'>
    <circle cx={size / 2} cy={size / 2} r={size / 2} />
    <text x='50%' y='40%' textAnchor='middle' fontSize={`${size * 0.55}px`} dy='.2em'>CV</text>
    <path
      fill='none'
      strokeWidth={size * 0.045}
      d={generateArcMatrix(size)}
    />
  </svg>
)

export default MainLogo
