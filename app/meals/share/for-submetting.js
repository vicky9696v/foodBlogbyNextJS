'use client'

import { useFormStatus } from "react-dom"

export default function FormSubmit() {
    const {pending} = useFormStatus()

  return  <button disabled={pending} type="submit">{pending ? "Submitting.." : "Share Meal"}</button>
}