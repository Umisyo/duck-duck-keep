import React, { FC, useState } from 'react'
import MemoListComponent from './components'
import { MessageInputEvent } from '../../@types/MessageInputEvent'

const MemoList: FC = () => {
  const [memoTextArray, setMemoTextArray] = useState<string[]>(['hello'])

  const addMemoText = () => {
    const newMemoTextArray: string[] = [...memoTextArray, '']
    setMemoTextArray(newMemoTextArray)
  }

  const handleChange = (index: number) => {
    const changeText = (event: MessageInputEvent) => {
      const newMemoText: string = event.target.value
      const newMemoTextArray: string[] = memoTextArray
        .slice(0, index)
        .concat([newMemoText])
        .concat(memoTextArray.slice(index + 1))
      setMemoTextArray(newMemoTextArray)
    }

    return changeText
  }

  return (
    <MemoListComponent
      memoTextArray={memoTextArray}
      handleClick={addMemoText}
      handleChange={handleChange}
    />
  )
}

export default MemoList
