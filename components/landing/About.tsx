import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export const About = () => {
  return (
    <section>
      <div className="flex items-center justify-center flex-col mt-[80px] gap-4 ">
        <span className="text-orange bg-orange/20 px-4 py-2 rounded-full text-sm">
          An AI powered sales assistant chatbot
        </span>
        <Image
          src="/images/corinna-ai-logo.png"
          width={500}
          height={100}
          alt="Logo"
          className="max-w-lg object-contain"
        />
        <p className="text-center max-w-[500px]">
          Your AI powered sales assistant! Embed Corinna AI into any website
          with just a snippet of code!
        </p>
        <Button className="bg-orange font-bold text-white px-4">
          Start For Free
        </Button>
        <Image
          src="/images/iphonecorinna.png"
          width={400}
          height={100}
          className="max-w-lg object-contain"
          alt="Logo"
        />
      </div>
    </section>
  )
}
