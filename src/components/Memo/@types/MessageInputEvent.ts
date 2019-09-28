import React from 'react'

export interface MessageInputEvent
  extends React.FormEvent<HTMLTextAreaElement> {
  target: HTMLTextAreaElement
}
