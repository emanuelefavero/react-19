# React 19

This repository is a playground for React 19. Feel free to use it to test new features and functionalities.

> **Note:** This repository is not meant to be used in production.
>
> **Note:** I choose to use `nextjs` to test React 19 features since some features need a React framework to work.

## How to use

1. Clone the repository
2. Install the dependencies
3. Run the project:

```bash
npm run dev
```

## React Compiler

React 19 introduces a new experimental compiler that automatically memoizes your code. This greatly reduces the need to use `useMemo`, `useCallback`, and `React.memo`.

To test the new compiler in your Next.js 15 RC project, you need to add the following configuration to your `next.config.js` file:

```js
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
}

export default nextConfig
```

> Note: Check the Next.js documentation for updated information on how to use the React Compiler in Next.js. The above configuration may change in the future since we are using a beta version of Next.js (Next.js 15 RC) at the time of writing this document

## Resources

- [React 19](https://react.dev/blog/2024/04/25/react-19)
- [React 19 on Medium](https://medium.com/@hassan.djirdeh/react-19-beta-is-out-4d41aa1d4eee)
- [React Compiler](https://19.react.dev/learn/react-compiler)
- [Next.js](https://nextjs.org/)

## License

- [MIT](LICENSE.md)
