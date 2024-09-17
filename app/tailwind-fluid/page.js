export default function page() {
  return (
    <div>
      <h1 className='mb-2'>TailwindCSS Fluid library</h1>

      <p className='mb-4 max-w-prose'>
        The Tailwind Fluid library is a plugin for TailwindCSS that allows you
        to use the CSS clamp feature in TailwindCSS. This allows you to create
        seamless transitions between different screen sizes.{' '}
        <a href='https://fluid.tw/' target='_blank' rel='noopener noreferrer'>
          Learn more
        </a>
      </p>

      <div className='mb-4'>
        <code className='text-green-500 animate-pulse'>
          Adjust the screen width to see the effect
        </code>
      </div>

      {/* Tailwind Fluid */}
      <div className='bg-white text-black ~px-4/8 ~py-3/6 ~max-w-56/2xl'>
        <h2 className='~text-base/4xl ~text-purple-500/sky-500'>
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>
    </div>
  )
}
