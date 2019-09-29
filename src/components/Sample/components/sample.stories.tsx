import React from 'react'
import { storiesOf } from '@storybook/react'
import SampleComponent from '.'

storiesOf('Component', module).add('Sample', () => (
  <SampleComponent text="Sample" />
))
