import Component from './Component'

export default function Page() {
  return (
    <>
      <h1>useLayoutEffect</h1>
      <p>
        Refresh the page with different viewport widths to see how the component
        changes its background color based on the width of the container.
      </p>

      <Component />
    </>
  )
}
