'use client'
import { useThemeMode } from '@/hooks/useThemeMode'
import React, { useEffect, useState } from 'react'
import { Section } from '../Section'
import { cn } from '@/lib/utils'
import { SystemMode } from '../themes-placeholder/systemmode'
import { LightMode } from '../themes-placeholder/lightmode'
import { DarkMode } from '../themes-placeholder/darkmode'


type Props = {}

export const DarkModeToggle = () => {

  const { setTheme, theme } = useThemeMode();
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <Section
          label="Interface Theme"
          message="Select or customize your UI theme "
        />
      </div>
      <div className="lg:col-span-4 flex lg:flex-row flex-col items-start gap-5">
        <div
          className={cn(
            'rounded-2xl overflow-hidden cursor-pointer border-4',
            theme === 'system' ? 'border-orange' : 'border-transparent'
          )}
          onClick={() => setTheme('system')}
        >
          <SystemMode />
        </div>
        <div
          className={cn(
            'rounded-2xl overflow-hidden cursor-pointer border-4',
            theme === 'light' ? 'border-orange' : 'border-transparent'
          )}
          onClick={() => setTheme('light')}
        >
          <LightMode />
        </div>
        <div
          className={cn(
            'rounded-2xl overflow-hidden cursor-pointer border-4',
            theme === 'dark' ? 'border-orange' : 'border-transparent'
          )}
          onClick={() => setTheme('dark')}
        >
          <DarkMode />
        </div>
      </div>
    </div>
  )
}
