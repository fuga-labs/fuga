## 🌌 Fuga: The Effortless Svelte Component Library

![Fuga](https://github.com/user-attachments/assets/1c05199d-8895-42ad-8edb-f46069982a0d)




Welcome to **Fuga**—a powerful, yet easy-to-use Svelte component library focused on **performance** and **developer experience**! 🚀 

With Fuga, styling is a breeze, with the freedom to add CSS directly through props without ever touching CSS files. Everything compiles to native CSS, leveraging **Sass** under the hood for a smooth, efficient experience. Plus, Fuga's fully-typed code provides a seamless integration with TypeScript, empowering developers with IntelliSense for a polished workflow! 🌟

---

## 🧩 Why Fuga?

✨ **Declarative Styling:** Add styles dynamically using props, making your components adaptable to every device and screen.

✨ **Svelte Powered:** Enjoy the blazing fast performance and lightweight structure that Svelte offers, with all Fuga components optimized for speed and minimal impact.

✨ **Full TypeScript Support:** Get the power of types with Fuga’s components, ensuring a productive experience with autocompletion, type checking, and more.

✨ **Sass Internally Compiled:** No need to worry about adding extra CSS files! Just set your props, and Fuga takes care of the rest with Sass-powered compiling.

---

## 🌈 Installation

Get started by installing Fuga via npm:

```bash
npm install fuga
```

## 💡 Usage

Here’s a sneak peek of what your Fuga-powered Svelte code can look like:

```svelte
<script>
  import { Box } from 'fuga';
</script>

<Box 
  as="button"
  px="8"
  py="4"
  p="20px" 
  bgColor={{ base: "blue-100", md: "blue-400", lg: "blue-500" }}
  _hover={{ color: "blue-300" }}
>
  Click Me
</Box>
```

With Fuga, styles are passed as props that automatically compile into CSS! This example shows how easy it is to add responsive, interactive styling without touching a CSS file. ✨

## 🔍 What’s Next?

Soon, Fuga will feature a wide range of components such as:

- **Button**
- **Accordion**
- **Alert**
- **Badge**  
- and many more! Stay tuned for these additions and make Fuga your go-to library for Svelte components.

---

## 🛠️ Configuration

No setup is required to start using Fuga! For custom setups or additional configurations, simply check out our [documentation](#) (coming soon!) for guidance on advanced usage, including theming, animations, and responsive props. It's still in early phase.

---

## ❤️ Community & Contributions

Contributions are welcome! Help us grow Fuga by reporting issues, submitting pull requests, or just sharing feedback. 

---

Bring your Svelte projects to life with **Fuga** – The powerful yet developer-friendly component library. 

---