import React from 'react'
import { Card } from '../ui/card'
import { useRealTime } from '@/hooks/useRealTime'

type Props = {
  chatRoomId: string
  setChats: React.Dispatch<
    React.SetStateAction<
      {
        role: 'user' | 'assistant'
        content: string
        link?: string | undefined
      }[]
    >
  >
}

export const RealTimeMode = ({ chatRoomId, setChats }: Props) => {
  useRealTime(chatRoomId, setChats)

  return (
    <Card className="px-3 rounded-full py-1 bg-orange font-bold text-white text-sm">
      Real Time
    </Card>
  )
}
