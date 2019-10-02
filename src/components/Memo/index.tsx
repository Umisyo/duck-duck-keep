import React, { FC } from 'react'
import MemoComponent from './components'
import { MessageInputEvent } from '../../@types/MessageInputEvent'

interface MemoProps {
  memoText: string
  changeText: (event: MessageInputEvent) => void
  decrement: () => void
}

const Memo: FC<MemoProps> = prop => {
  return (
    <MemoComponent
      text={prop.memoText}
      changeText={prop.changeText}
      decrement={prop.decrement}
    />
  )
}

export default Memo
