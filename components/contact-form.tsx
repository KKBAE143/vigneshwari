'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const schema = z.object({ name: z.string().min(2,'Please enter your name'), email: z.string().email('Enter a valid email'), message: z.string().min(10,'Tell us a little more') })
type Values = z.infer<typeof schema>

export function ContactForm(){ const { register, handleSubmit, reset, formState:{errors} } = useForm<Values>({ resolver: zodResolver(schema) })
  const onSubmit = (_values: Values) => { toast('Thank you — this is a preview form, no message was sent.'); reset() }
  return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 bg-card p-8">
    <div className="flex flex-col gap-2"><label htmlFor="name" className="text-sm">Name</label><Input id="name" aria-invalid={!!errors.name} {...register('name')} />{errors.name&&<span className="text-xs text-secondary">{errors.name.message}</span>}</div>
    <div className="flex flex-col gap-2"><label htmlFor="email" className="text-sm">Email</label><Input id="email" type="email" aria-invalid={!!errors.email} {...register('email')} />{errors.email&&<span className="text-xs text-secondary">{errors.email.message}</span>}</div>
    <div className="flex flex-col gap-2"><label htmlFor="message" className="text-sm">Message</label><Textarea id="message" rows={5} aria-invalid={!!errors.message} {...register('message')} />{errors.message&&<span className="text-xs text-secondary">{errors.message.message}</span>}</div>
    <Button type="submit">Send message</Button>
  </form> }
