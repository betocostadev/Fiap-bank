import { useEffect, useState } from 'react'

export default function useForm(initial: any) {
  const [inputs, setInputs] = useState(initial)
  const initialValues = Object.values(initial).join('')

  useEffect(() => {
    setInputs(initial)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues])

  const handleChange = (e: any) => {
    let { value, name, type } = e.target

    if (type === 'number') {
      if (value === '') {
        value = 0
      }
      value = parseInt(value)
    }

    if (type === 'file') {
      ;[value] = e.target.files
    }

    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const resetForm = () => {
    setInputs(initial)
  }

  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    )
    setInputs(blankState)
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  }
}
