import React from 'react'

type RenderingNotifierProps = {
  name: string
}

export const RenderingNotifier = ({name}: RenderingNotifierProps) => {
  console.log(`${name} is rendered`)
  return (
    null
  )
}
