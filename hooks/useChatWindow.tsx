import { onOwnerSendMessage, onRealTimeChat } from '@/actions/conversation'
import { useChatContext } from '@/context/useChatContext'
import { pusherClient } from '@/lib/utils'
import { ChatBotMessageSchema } from '@/schemas/conversation.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

export const useChatWindow = () => {
  const { chats, loading, setChats, chatRoom } = useChatContext()
  const messageWindowRef = useRef<HTMLDivElement | null>(null)
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(ChatBotMessageSchema),
    mode: 'onChange',
  })
  const onScrollToBottom = () => {
    messageWindowRef.current?.scroll({
      top: messageWindowRef.current.scrollHeight,
      left: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    onScrollToBottom()
  }, [chats, messageWindowRef])

  // useEffect(() => {
  //   if (chatRoom) {
  //     pusherClient.subscribe(chatRoom)
  //     pusherClient.bind('realtime-mode', (data: any) => {
  //       setChats((prev) => [...prev, data.chat])
  //     })

  //     return () => {
  //       pusherClient.unbind('realtime-mode')
  //       pusherClient.unsubscribe(chatRoom)
  //     }
  //   }
  // }, [chatRoom])

  const onHandleSentMessage = handleSubmit(async (values) => {
    try {
      reset()
      const message = await onOwnerSendMessage(
        chatRoom!,
        values.content,
        'assistant'
      )
      //WIP: Remove this line
      if (message) {
        //remove this
        setChats((prev) => [...prev, message.message[0]])

        await onRealTimeChat(
          chatRoom!,
          message.message[0].message,
          message.message[0].id,
          'assistant'
        )
      }
    } catch (error) {
      console.log(error)
    }
  })

  return {
    messageWindowRef,
    register,
    onHandleSentMessage,
    chats,
    loading,
    chatRoom,
  }
}