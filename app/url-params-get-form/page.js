'use client'

import { useSearchParams } from 'next/navigation'

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi']

export default function Page() {
  const searchParams = useSearchParams()
  const fruit = searchParams.get('fruit')

  const filteredFruits = fruit
    ? fruits.filter((f) => f.toLowerCase().includes(fruit.toLowerCase()))
    : fruits

  return (
    <>
      <h1>Create URL search params with Form GET Method</h1>

      <p>
        This page demonstrates how to create URL search params using the Form
        GET method. The form submits the search term as a query parameter, and
        the list of fruits is filtered based on the search term.
      </p>

      <p>
        NOTE: This is only for demonstration purposes. In a real-world
        application, you would typically use the URLSearchParams API to handle
        query parameters.
      </p>

      {/* TIP: Make sure the form has a get method and the action is set to the current url */}
      <form method='get' action='/url-params-get-form' className='mt-4'>
        <input
          type='text'
          name='fruit'
          placeholder='Fruit'
          defaultValue={fruit || ''}
        />
        <button type='Submit' className='ml-2'>
          Search Fruit
        </button>
      </form>

      <ul>
        {filteredFruits.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </>
  )
}
