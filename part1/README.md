This readme is used to answer the questions presents in the Screenshot Labs Frontend Test

React and NextJs:

Q: 1. Describe a situation where you would use Next.js instead of Create React App. Why?
A:
One situation where I would choose to use Next.js over Create React App is for building a web application that would profit of server-side rendering (SSR).
Next.js provides SSR out of the box, whereas Create React App only handles client-side rendering.

Some key benefits of using Next.js:

Better performance for initial page load - Pages are rendered on the server, so the initial page HTML is returned fully formed and rendering can start immediately on the client. This provides a faster first paint time compared to client-side rendered apps.

Better SEO - Search engines can crawl and index pages better since content is rendered server-side. Create React App applications may suffer with SEO since search bots have to wait for JavaScript to execute before seeing content.

Easier page navigation - Next.js pre-renders pages so linking between routes is handled smoothly without full page refreshes. Routing requires more work to handle pre-fetching and transitions with client-side only apps.

Feature-rich starter project - Next.js' starter project includes many built-in features like routing, SSR, and more to accelerate development.

So in summary, for an app where SEO and initial load performance matter, I would choose Next.js over Create React App for its built-in SSR capabilities.

I think I would only use Create React App for simpler use cases like prototypes or Electron apps where SSR is not needed.

---

2. How do you handle SEO in a Next.js application?

A:
Next.js v13 introduced the App Router, which changes how routing and page navigation works. This affects some SEO handling:

The App Router has add the "use client" declaration on top of file. We have to be carefull with this to don't overuse it. All of the other components are Server Components and they're rendered in server parts. This increase the SEO by default but the convenience of "use client should be used carefully.

To address this, next/link components can use the prefetch prop to prefetch pages and make sure their HTML is indexed. Pages can also be statically generated at build time.

next/head is still useful for injecting SEO metadata on each page. The title and description will be visible on prefetched/pre-rendered pages.

Next.js v14 has a built-in robots.txt file that instructs bots how to crawl the site. This can be customized.

The next/image component is still important for optimizing image loading speed.

So in summary - Next.js is built with some efficient tools to create sweb apps and dealing with SEO mechanics.

---

3. Can you explain what React Server Components are and how they differ from traditional React Components?

A:
React Server Components are a new feature that allows React components to run on the server. The key differences compared to traditional React components are:

- Server components don't require the React DOM. They can run in a Node.js server environment directly. Traditional components must run in the browser with the React DOM.

- Server components use a synchronous rendering model rather than asynchronous. There is no process for handling effects like with useEffect in traditional components.

- They do not support many React hooks like useState or useContext. State must be managed outside the component.

- They are optimized for server-side rendering. Features like suspense for data fetching are available.

- Code is written in a universal style that can run on server and client. Traditional components are client-only.

- They hydrate on the client after server rendering to reconnect event listeners.

So in summary - server components are designed to bring React's component model to the server. This allows for faster server-side rendering with React's programming model. But they have limitations compared to client components and a different method for handling effects/state.

---

Tailwind CSS:

1.How would you extend the default configuration of Tailwind in a project? Give an example.

A:
In tailwind.config.js, use the theme property to customize colors, font sizes, spacing, etc. For example:

```ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#5f3dc4',
      },
      fontSize: {
        '2xl': '1.5rem',
      },
    },
  },
};
```

This extends the default colors and font sizes with new primary color and 2xl size options.
Any Tailwind CSS utilities will now be available for these new config values.
The extend key merges new values with the defaults. All of Tailwind's default configuration can be customized this way.
It's very useful to define general settings for our project.

2. Describe a situation where utility-first CSS might not be the best approach. How would you handle it?

A:
Here is a situation where utility-first CSS like Tailwind may not be ideal and how I would handle it:

For a complex custom component with a lot of nested elements and custom styling needs, utility classes could make the markup verbose and hard to understand.

In this case, writing scoped CSS modules would be better.

For example, for a complex custom "Card" component that has a header, image, text content, buttons, etc. I would:

- Create a Card.module.css file for the component styles.

- Style elements like `.header`, `.content`, `.button` via CSS rules in the module.

- Import and use classenames from Card.module.css in the component file.

- Avoid utility classes and keep the markup clean.

- Use utilities for one-off styles like spacing or font sizing.

The CSS module approach prevents bloating the markup with many utilities. And the styles stay scoped to the component file.

For complex bespoke components, CSS modules balance utility classes with traditional scoped CSS could be useful.

Other way is to continue to use tailwind to use the same tools in all the project. And to externalize classNames into another file still using tailwind with this : https://github.com/ben-rogerson/twin.macro

This offer the flexibility of CSS modules using tailwind syntax

React Concepts:

1.Explain the difference between a controlled and an uncontrolled component in React.

A:
Here is a brief explanation of the differences between controlled and uncontrolled components in React:

Controlled Component: Its state is controlled by the parent component. The parent passes the value and handlers via props to control the internal state. For example, a controlled <input> where the parent component passes the value and onChange handler.
Uncontrolled Component: It manages its own internal state. The component itself initializes and controls its state directly rather than the parent. For example, an <input> that sets its own value internally would be uncontrolled.
Controlled pros: Parent has full control, can validate on change, easy to add logic.
Uncontrolled pros: Less code, DOM state may be enough, no need for parent to pass handlers.
General rule is to use controlled for forms and inputs that need validation, uncontrolled otherwise.
So in summary - controlled components' values are controlled by the parent vs uncontrolled manage their own internal state. Controlled is preferred for forms needing tight control.
In mosts of cases we want to use controlled components

2. How would you handle global state in a React application without using any external libraries?

A:
Here are a few options for managing global state in a React application without external libraries:

Use the Context API to create global state that any component can access. Define the context at an ancestor level and provide global values to be consumed by context consumers.

Move shared state logic out to custom hooks that can be reused. This avoids duplication.

Implement a custom global store pattern using hooks like useReducer and useContext. Mimics libraries like Redux.

3. Describe the main differences between class components and functional components in React.

A:
Here are the key differences between class and functional components in React:

Class components have state and lifecycle methods like componentDidMount(). Functional components use React Hooks like useState() for state.
Class components use this to access the component instance. Functional components take props as a function parameter.
Class components need to be mounted and unmounted. Functional components simply return JSX to render.
Functional components generally have cleaner and more concise syntax. No need for binding event handlers in class constructors.
Prior to Hooks, only class components could manage local state. Functional components were stateless.
Functional components have better performance than equivalent class components. This is due to difference in the way React handles updates.
In general, functional components with Hooks are the preferred way to build React apps today. But class components are useful for legacy code.

Typescript in React:

1.How do you define prop types in a React component using TypeScript?

A:
Here is how to define prop types for a React component with TypeScript:

```tsx
interface Props {
  message: string;
  count: number;
  disabled: boolean;
  names: string[];
  handler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MyComponent = (props: Props) => {
  // ...
};
```

The key points are:

- Define an interface Props to specify the props shape
- Use TypeScript types.
- Pass the Props interface as a type to the functional component
- The interface serves as documentation and for auto-completion in IDEs
- You can also extend common react types like React.HTMLAttributes

This ensures type safety and catch errors during compilation. The component will only accept props as defined in the Props interface.

2.Describe a scenario where using TypeScript with React improved the quality of your code.

A:
To be transaparent. I've used Typescript with React all the time. So it's difficult for me to answer this.
But i see the performance of typed languages everyday.
Consistency and Integrations into IDEs are awesome. Intelissense is perfect when used with Typescript.
Without TypeScript, it could be difficult to remember and document all the different props and keep them in sync.
Typescript combined with Interface enforce a correct construction of components.
Defining types for form values and the validation function ensured those were passed correctly.
Overall, TypeScript improved the stability and maintainability of the complex form component by catching bugs early and providing documentation.

Web3 & Starknet:

1.Explain the main differences between Web2 and Web3 from a front-end perspective.

A:
Here are some key differences between web2 and web3 from a front-end perspective:

User identities - Web2 uses usernames/passwords, social logins to identify users. Web3 uses crypto wallets and blockchain addresses as decentralized digital identities.
Data ownership - Web2 data is stored on centralized servers owned by companies. Web3 data is owned and controlled by users via the decentralized blockchain.
Payments - Web2 payments rely on payment processors and banks. Web3 uses cryptocurrencies for decentralized peer-to-peer payments.
Frontend code - Web2 code runs on servers controlled by tech companies. Web3 code can run on decentralized storage/hosting services.
Security - Web2 depends on passwords and 2FA for security. Web3 uses cryptography and digital signatures for authentication and security.
Censorship resistance - Web2 content can be deplatformed or censored. Web3 content on blockchain is uncensorable.

2. How would you handle wallet connections in a Web3 application?

A:
I would definitely use Walletconnect with their Web3modal using wagmi. It's a very good library to perform in a minimum time a production ready authentication.

3.Have you worked with Starknet or any other L2/L3 solutions before? Describe your experience.

A:
No i didn't worked on L2 or L3 solutions this is my next step focusing on Starknet.

Real-time Data & Hooks:

1.How would you implement real-time data fetching in a React application?

A:
Here are some ways to implement real-time data fetching in a React application:

Use the native WebSocket API to establish a websocket connection to a server that can push updated data. Listen for events like 'message' to handle new data.
For GraphQL APIs, use subscriptions to subscribe to data changes. Apollo Client supports real-time GraphQL subscriptions.
If we can't manage WebSocket : Poll an API endpoint at regular intervals using setInterval() and compare data for changes. But it's clearly not the best way for real time refresh.

2. Describe a custom React hook you've written and its use case.

This is not my creation but i'm using it has a combination of well known custom hooks : UseTimeout and UseDebounce

They're made by the Author Web Dev Simplified.

useTimeout

```tsx
import { useCallback, useEffect, useRef } from 'react';

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
```

It can be used in any situation where you need to wait for a certain amount of time before acting or to repeat an action multiple times with a delay between them.

And useDebounce

```tsx
import { useEffect } from 'react';
import useTimeout from './useTimeout';

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
```

Example of Using of useDebounce

```tsx
import { useState } from 'react';
import useDebounce from '@/hooks/useDebounce';

export default function DebounceComponent() {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
```

This hook can be helpful in situations where you want to limit the number of times a callback function is invoked in a short period. For example, when you have an input field that sends a search request to the server on every keystroke, you should wait for a user to stop typing before sending the request to avoid unnecessary network traffic and improve the user experience.
