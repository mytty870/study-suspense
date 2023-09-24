import React from 'react'
import { sleep } from './AlwaysSuspend'

export const SometimesSuspend = () => {
  if (Math.random() < 0.5){
    console.log('Sometimes Suspend')
    throw sleep(1000)
  }
  return (
    <div>Hello World</div>
  )
}
