import { onCreateNewDomainProduct } from '@/actions/settings'
import { useToast } from '@/components/ui/use-toast'
import { AddProductProps, AddProductSchema } from '@/schemas/settings.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const useProducts = (domainId: string) => {
  const { toast } = useToast()
  const [loading, setLoading] = useState<boolean>(false)
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<AddProductProps>({
    resolver: zodResolver(AddProductSchema),
  })

  const onCreateNewProduct = handleSubmit(async (values) => {
    try {
      setLoading(true)
      const formData = new FormData();

      formData.append('file', values.image[0]);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      const { results } = await response.json();

      const product = await onCreateNewDomainProduct(
        domainId,
        values.name,
        results.secure_url,
        values.price
      )
      if (product) {
        reset()
        toast({
          title: 'Success',
          description: product.message,
        })
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  })

  return { onCreateNewProduct, register, errors, loading }
}