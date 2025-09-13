'use client'
import React from 'react'
import CaseStudies from './CaseStudies'
import Subscription from './Subscription'

export default function MainSection() {
  return (
    <div className='bg-[#0A0F0D]'>
      <CaseStudies></CaseStudies>
      <Subscription></Subscription>
    </div>
  )
}
