import React, { FC } from 'react'
import MemoComponent from './components'
import { MessageInputEvent } from '../../@types/MessageInputEvent'

interface MemoProps {
  memoText: string
  handleChange: (event: MessageInputEvent) => void
}

const Memo: FC<MemoProps> = prop => {
  return <MemoComponent text={prop.memoText} handleChange={prop.handleChange} />
}

export default Memo
