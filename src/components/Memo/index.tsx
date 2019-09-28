import React, { FC, useState } from 'react'
import MemoComponent from './components'
import { MessageInputEvent } from './@types/MessageInputEvent'

const Memo: FC = () => {
  const [memoText, setMemoText] = useState('')

  const handleChange = (event: MessageInputEvent) => {
    setMemoText(event.target.value)
  }

  return <MemoComponent text={memoText} handleChange={handleChange} />
}

export default Memo
