'use client'

import { useSearchParams } from 'next/navigation'

interface Props {
  fruits: string[]
}

export default function SearchForm({ fruits }: Props) {
  const searchParams = useSearchParams()
  const fruit = searchParams.get('fruit')

  const filteredFruits = fruit
    ? fruits.filter((f) => f.toLowerCase().includes(fruit.toLowerCase()))
    : fruits

  return (
    <>
      {/* TIP: Make sure the form has a get method and the action is set to the current url */}
      <form method='get' action='/url-params-get-form' className='mt-4'>
        <input
          type='text'
          name='fruit'
          placeholder='Fruit'
          defaultValue={fruit || ''}
        />
        <button type='submit' className='ml-2'>
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
