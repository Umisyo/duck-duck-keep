import React, { FC } from 'react'
import Memo from '../../Memo'
import { MessageInputEvent } from '../../../@types/MessageInputEvent'
import './style.scss'

interface MemoListProps {
  memoTextArray: string[]
  addMemo: () => void
  changeText: (index: number) => (event: MessageInputEvent) => void
  decrement: (index: number) => () => void
}

const MemoListComponent: FC<MemoListProps> = prop => (
  <div className="memo__list">
    <div className="memo__list-contents">
      {prop.memoTextArray.map((memoText, index) => (
        <Memo
          key={index}
          memoText={memoText}
          changeText={prop.changeText(index)}
          decrement={prop.decrement(index)}
        />
      ))}
    </div>
    <button type="button" className="memo__list-button" onClick={prop.addMemo}>
      +
    </button>
  </div>
)

export default MemoListComponent
