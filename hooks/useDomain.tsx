'use client'
import { onIntegrateDomain } from '@/actions/settings'
import { useToast } from '@/components/ui/use-toast'
import { AddDomainSchema } from '@/schemas/settings.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname, useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'


export const useDomain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    resolver: zodResolver(AddDomainSchema),
  })

  const pathname = usePathname()
  const { toast } = useToast()
  const [loading, setLoading] = useState<boolean>(false)
  const [isDomain, setIsDomain] = useState<string | undefined>(undefined)
  const router = useRouter()

  useEffect(() => {
    setIsDomain(pathname.split('/').pop())
  }, [pathname])

  const onAddDomain = handleSubmit(async (values: FieldValues) => {
    setLoading(true)

    try {

      const formData = new FormData();

      formData.append('file', values.image[0]);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      const { results } = await response.json();

      if (results) {
        const domain = await onIntegrateDomain(values.domain, results.secure_url)
        if (domain) {
          reset()
          setLoading(false)
          toast({
            title: domain.status === 200 ? 'Success' : 'Error',
            description: domain.message,
          })
          router.refresh()
        }
      } else {
        throw new Error('Failed to upload image')
      }
    } catch (error) {
      console.error(error)
      setLoading(false)
      toast({
        title: 'Error',
        description: 'Failed to upload image',
      })
    }
  })

  return {
    register,
    onAddDomain,
    errors,
    loading,
    isDomain,
  }
}