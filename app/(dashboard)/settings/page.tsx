import { InfoBar } from '@/components/InfoBar'
import { BillingSettings } from '@/components/settings/BillingSettings'
import { ChangePassword } from '@/components/settings/ChangePassword'
import { DarkModeToggle } from '@/components/settings/DarkModeToggle'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-auto flex flex-col gap-10 pb-10">
        set
        <BillingSettings />
        <DarkModeToggle />
        <ChangePassword />
      </div>
    </>
  )
}

export default Page