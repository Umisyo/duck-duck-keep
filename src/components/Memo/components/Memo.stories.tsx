import React from 'react'
import { storiesOf } from '@storybook/react'
import MemoComponent from '.'

storiesOf('MemoComponent', module).add('MemoComponent', () => (
  <MemoComponent
    text="hello"
    changeText={event => {
      console.log(event.target.value)
    }}
    decrement={() => {
      console.log('decrement')
    }}
  />
))
