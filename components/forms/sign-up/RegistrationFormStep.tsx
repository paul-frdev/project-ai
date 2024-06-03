'use client'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { TypeSelectionForm } from './TypeSelectionForm'
import dynamic from 'next/dynamic'
import { Spinner } from '@/components/Spinner'
import { useAuthContextHook } from '@/context/useAuthContext'

const DetailForm = dynamic(() => import('./AccountDetailsForm'), {
  ssr: false,
  loading: () => <Spinner />,
})

const OTPForm = dynamic(() => import('./OTPForm'), {
  ssr: false,
  loading: () => <Spinner />,
})

type Props = {}

export const RegistrationFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext()
  const { currentStep } = useAuthContextHook()
  const [onOTP, setOnOTP] = useState<string>('')
  const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner')

  setValue('otp', onOTP)

  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      )
    case 2:
      return (
        <DetailForm
          errors={errors}
          register={register}
        />
      )
    case 3:
      return (
        <OTPForm
          onOTP={onOTP}
          setOTP={setOnOTP}
        />
      )
  }

  return <div>RegistrationFormStep</div>
}
