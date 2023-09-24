import React from 'react'

const loop = () => {
  let i = 0
  while (i < 10000000000) i++;
  console.log(i);
};

loop()


export const Child2 = () => {
  return (
    <div><p>bbbbbbbb</p></div>
  )
}
