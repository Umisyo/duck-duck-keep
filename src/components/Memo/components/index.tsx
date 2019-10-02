import React, { FC } from 'react'
import './style.scss'
import { MessageInputEvent } from '../../../@types/MessageInputEvent'

interface MemoComponentProps {
  text: string
  changeText: (event: MessageInputEvent) => void
  decrement: () => void
}

const MemoComponent: FC<MemoComponentProps> = prop => (
  <div className="memo__textarea">
    <textarea rows={10} value={prop.text} onChange={prop.changeText} />
    <button type="button" onClick={prop.decrement}>
      -
    </button>
  </div>
)

export default MemoComponent
