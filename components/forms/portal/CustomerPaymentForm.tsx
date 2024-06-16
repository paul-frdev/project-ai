'use client'
import { Loader } from '@/components/Loader'
import { Button } from '@/components/ui/button'
import { useCompleteCustomerPayment } from '@/hooks/useBilling'
import { PaymentElement } from '@stripe/react-stripe-js'
import React from 'react'

type CustomerPaymentFormProps = {
  onNext(): void
}

export const CustomerPaymentForm = ({ onNext }: CustomerPaymentFormProps) => {
  const { processing, onMakePayment } = useCompleteCustomerPayment(onNext)
  return (
    <div className="flex flex-col">
      <PaymentElement />
      <Button
        type="submit"
        className="w-full mt-5"
        onClick={onMakePayment}
      >
        <Loader loading={processing}>Pay</Loader>
      </Button>
    </div>
  )
}