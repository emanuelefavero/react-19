import { Suspense } from 'react'
import SearchForm from './SearchForm'

// * This page shows how to create URL search params using the Form GET method

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi']

export default function Page() {
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

      <Suspense fallback={<div>Loading...</div>}>
        <SearchForm fruits={fruits} />
      </Suspense>
    </>
  )
}
