import React from 'react'

export default function Page() {
  return (
    <>
      <h1 className='mb-2'>Context as provider</h1>

      <p className='mb-2'>
        There's no need for <code>{'<Context.Provider>'}</code> anymore. You can
        use <code>{'<Context>'}</code> directly instead.
      </p>

      <p>
        See{' '}
        <code>
          {'@/app/context/ThemeContext'} and{' '}
          <code>{'@/app/use/ContextExample'}</code>{' '}
        </code>
        in this project codebase for an example.
      </p>
    </>
  )
}
