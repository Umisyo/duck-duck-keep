import React, { FC, useState } from 'react'
import MemoListComponent from './components'
import { MessageInputEvent } from '../../@types/MessageInputEvent'

const MemoList: FC = () => {
  const [memoTextArray, setMemoTextArray] = useState<string[]>(['hello'])

  const addMemoText = () => {
    const newMemoTextArray: string[] = [...memoTextArray, '']
    setMemoTextArray(newMemoTextArray)
  }

  const createChangeText = (index: number) => {
    const changeText = (event: MessageInputEvent) => {
      const newMemoText: string = event.target.value
      const newMemoTextArray: string[] = [
        ...memoTextArray.slice(0, index),
        newMemoText,
        ...memoTextArray.slice(index + 1),
      ]
      setMemoTextArray(newMemoTextArray)
    }

    return changeText
  }

  const decrement = (index: number) => {
    const decrementArray = () => {
      const newMemoTextArray: string[] = [
        ...memoTextArray.slice(0, index),
        ...memoTextArray.slice(index + 1),
      ]
      setMemoTextArray(newMemoTextArray)
    }

    return decrementArray
  }

  return (
    <MemoListComponent
      memoTextArray={memoTextArray}
      addMemo={addMemoText}
      changeText={createChangeText}
      decrement={decrement}
    />
  )
}

export default MemoList
