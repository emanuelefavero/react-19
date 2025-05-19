export default function Page() {
  return (
    <>
      <h1 className='mb-2'>Context as provider</h1>

      <p className='mb-2'>
        There&apos;s no need for <code>{'<Context.Provider>'}</code> anymore.
        You can use <code>{'<Context>'}</code> directly instead. Also, we now
        can utilize <code>use</code> instead of <code>useContext</code> when
        getting context values.
      </p>

      <p>
        See{' '}
        <code>
          {'@/app/context/ThemeContext'} and{' '}
          <code>{'@/app/use/ContextExample'}</code>{' '}
        </code>
        in this project codebase for examples.
      </p>
    </>
  )
}
