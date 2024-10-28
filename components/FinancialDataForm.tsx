'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function FinancialDataForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitForm = async (data) => {
    setIsSubmitting(true)
    await onSubmit(data)
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input
        type="number"
        {...register("amount", { required: true, min: 0 })}
        placeholder="Amount"
      />
      {errors.amount && <span>This field is required and must be positive</span>}

      <select {...register("category", { required: true })}>
        <option value="">Select a category</option>
        <option value="revenue">Revenue</option>
        <option value="expense">Expense</option>
        <option value="asset">Asset</option>
        <option value="liability">Liability</option>
      </select>
      {errors.category && <span>This field is required</span>}

      <input
        type="date"
        {...register("date", { required: true })}
      />
      {errors.date && <span>This field is required</span>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}