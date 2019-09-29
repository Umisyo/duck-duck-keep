import React from 'react'
import { storiesOf } from '@storybook/react'
import MemoListComponent from '.'
import { MessageInputEvent } from '../../../@types/MessageInputEvent'

storiesOf('MemoListComponent', module).add('MemoComponent', () => {
  const memoTextArray = ['']
  const addArray = () => {
    memoTextArray.push('')
  }

  return (
    <MemoListComponent
      memoTextArray={memoTextArray}
      handleClick={addArray}
      handleChange={(index: number) => {
        return (event: MessageInputEvent) => {
          console.log(index, event)
        }
      }}
    />
  )
})
