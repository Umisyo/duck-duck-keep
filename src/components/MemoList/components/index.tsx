import React, { FC } from 'react'
import Memo from '../../Memo'
import { MessageInputEvent } from '../../../@types/MessageInputEvent'
import './style.scss'

interface MemoListProps {
  memoTextArray: string[]
  handleClick: () => void
  handleChange: (index: number) => (event: MessageInputEvent) => void
}

const MemoListComponent: FC<MemoListProps> = prop => (
  <div>
    <div className="memo__list">
      {prop.memoTextArray.map((memoText, index) => (
        <Memo memoText={memoText} handleChange={prop.handleChange(index)} />
      ))}
    </div>
    <button
      type="button"
      className="memo__list-button"
      onClick={prop.handleClick}
    >
      +
    </button>
  </div>
)

export default MemoListComponent
