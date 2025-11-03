export default function Page() {
  return (
    <>
      <h1 className='mb-2'>Preloading Resources</h1>

      <p className='mb-4'>
        React 19 adds several new APIs to improve page load performance and user
        experience by loading and preloading resources such as scripts,
        stylesheets, and fonts.
      </p>

      <ul className='list-disc list-inside mb-4'>
        <li className='mb-2'>
          <code>prefetchDNS</code> prefetches the IP address of a DNS domain
          name you expect to connect to.
        </li>
        <li className='mb-2'>
          <code>preconnect</code> connects to a server you expect to request
          resources from, even if the exact resources are unknown at the time.
        </li>
        <li className='mb-2'>
          <code>preload</code> fetches a stylesheet, font, image, or external
          script that you expect to use.
        </li>
        <li className='mb-2'>
          <code>preloadModule</code> fetches an ESM module that you expect to
          use.
        </li>
        <li className='mb-2'>
          <code>preinit</code> fetches and evaluates an external script or
          fetches and inserts a stylesheet.
        </li>
        <li className='mb-2'>
          <code>preinitModule</code> fetches and evaluates an ESM module.
        </li>
      </ul>

      <h2>Example</h2>

      <pre className='mb-2'>
        <code className='text-emerald-500'>
          {`
// React code
import { prefetchDNS, preconnect, preload, preinit } from "react-dom"; 

function MyComponent() {
  preinit("https://.../path/to/some/script.js", { as: "script" });
  preload("https://.../path/to/some/font.woff", { as: "font" });
  preload("https://.../path/to/some/stylesheet.css", { as: "style" });
  prefetchDNS("https://...");
  preconnect("https://...");
}
        `}
        </code>
      </pre>

      <p>
        NOTE: React frameworks frequently handle resource loading like this for
        you, so you might not have to call these APIs yourself.
      </p>
    </>
  )
}
