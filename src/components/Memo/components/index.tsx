import React, { FC } from 'react'
import './style.scss'
import { MessageInputEvent } from '../@types/MessageInputEvent'

interface MemoComponentProps {
  text: string
  handleChange: (event: MessageInputEvent) => void
}

const MemoComponent: FC<MemoComponentProps> = prop => (
  <textarea
    className="memo__textarea"
    rows={10}
    value={prop.text}
    onChange={prop.handleChange}
  />
)

export default MemoComponent
