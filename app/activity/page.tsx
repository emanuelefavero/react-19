import Component from './Component'

// * Activity let's show/hide parts of the UI while preserving their state
// React will hide the children with CSS display: "none" instead of unmounting them, this will still cleanup the effects but preserve the state. While hidden, children will re-render at a lower priority if props change
// When to use it? For sidebars, modals, tabs, accordions, etc. Content that is frequently shown/hidden but we want to preserve state
// @see ./Component for implementation details

export default function Page() {
  return (
    <>
      <h1>Activity</h1>
      <p className='mb-4'>
        Toggle the Sidebar and activate the button to see state preservation in
        action when the Sidebar is hidden/shown.
      </p>
      <Component />
    </>
  )
}
