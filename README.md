# SvelteKit-TW-Demo

Almost everything you need to build a SvelteKit-Tailwind starter project  powered by [`svelte-add`](https://github.com/svelte-add/svelte-add) including an example project styled with TailwindCSS.

This an opinionated SvelteKit-Tailwind project with Tailwind "batteries" included.

Creating a SvelteKit + Tailwind project with svelte-add provides an example project styled with vanilla CSS, not Tailwind CSS.

## Creating a new project

This project is intended to be `git clone`ed into a new project folder to be studied and/or modified to create your new project.

## How this project was created

As mentioned, a new project created with svelte-add and TailwindCSS added will provide an example project, if that option is selected, that uses vanilla CSS for styling.

The exact steps I used to create this project follow. You may want to modify these steps to create a project that is to your liking or fill specific needs, or perhaps you're just curious what's required to take a svelte-add project to completion.

```bash
# Create a new project below the current directory with selected options
npm init @svelte-add/kit

  Need to install the following packages:
  @svelte-add/create-kit
  Ok to proceed? (y) '<Enter>'

  ? What directory should your app be created in? › '<dir name><Enter>'

  ? What scripting language will you write your app in? ›
  ❯   'TypeScript <Enter>'

  ? What language will you write your app styles in?
  ❯   'PostCSS <Enter>'

  ? Do you want to use Autoprefixer?
  ❯   'Yes <Enter>'

  ? What framework will you use for your apps styles?
  ❯   'Tailwind CSS <Enter>'

  ? Do you want to use the Tailwind CSS Forms plugin?
  ❯   'Yes <Enter>'

  ? Do you want to use the Tailwind CSS Typography plugin?
  ❯   'Yes <Enter>'

  ? What other features do you want for your app? › '<Enter>' (none)

  ? What code quality tools do you want to help maintain your app? ›
  ◉   ESLint
  ◉   Prettier (select both) '<Enter>'

  ? Where will you deploy your app?
  ❯   'Nowhere <Enter>'

  ? Do you want example code added to your app to demonstrate how to use the tools youve selected? ›
  ❯   'Yes <Enter>'

  ? What package manager should be used to install your apps dependencies right now? ›
  ❯   'yarn <Enter>' or 'npm <Enter>' (As of this writing pnpm conflicts with prettier-plugin-tailwindcss.)

# Install prettier-plugin-tailwindcss to sort Tailwind utility classes
See [Sorting Tailwind CSS Classes Automatically with Prettier](https://youtu.be/_CntOc4hBcg)

yarn remove prettier-plugin-svelte
yarn add -D --exact prettier-plugin-tailwindcss

# Why pin dependency versions
I have had too many \"patch\" version dependencies that contained bugs. I would rather manage versions manually. I use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) to manage versions.


# Edit package.json and make the following changes
  Pin dependency versions (search for "^ replace with ")
  Add '--open' at end of dev and preview scripts

  "description": "SvelteKit demo app with Typescript, Prettier, ESLint and Tailwind",
  "main": "index.js",
  "author": "Your Name",
  "license": "UNLICENSED",
  "private": true,
  "@sveltejs/adapter-auto": -> "@sveltejs/adapter-node": "1.0.0-next.73",
  "@sveltejs/kit": "next" -> "@sveltejs/kit": "1.0.0-next.315",

  Move  "devDependencies" section to end of file

# Update svelte.config.js
  Replace:
    import adapter from '@sveltejs/adapter-auto';
  With:
    import adapter from '@sveltejs/adapter-node';

# Update dependencies
  'ncu' to see what needs updating, 'ncu -u' to make changes to package.json
  install updated package versions: 'yarn' or 'npm install'

# Update .prettierrc
  Rename: '.prettierrc' to 'prettier.config.cjs'
  Edit prettier.config.cjs and add:

    module.exports = {
      plugins: [require('prettier-plugin-tailwindcss')],
      tailwindConfig: './tailwind.config.cjs',
      useTabs: false,
      singleQuote: true,
      trailingComma: 'es5',
      printWidth: 100,
    };

# Edit .tsconfig.json and add

    "compilerOptions": {
      "module": "ESNext"
    },

# Standardize file format across project

  'yarn format'

# Initialize git and make initial commit

  'git init && git add . && git commit -m "initial"'

## Developing

# Start a development server and open the app in a new browser tab.

  'yarn dev' or 'npm run dev'

## Building

# Create a production version of your app:

  'yarn build' or 'npm run build'

# Preview the production build:

  'yarn preview' or 'npm run preview'.

 # Open the build preview on alternate port:

  'yarn preview -p 3001' or 'npm run preview -p 3001'

 # Deploy your app:

  Copy the following to a generic web server

  './package.json'
  './yarn.lock' or './package-lock.json'
  './build/**/*.*'

  Install production dependencies

  'yarn --prod' or 'npm install --production'

  You may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

  For a production quality installation using an enterprise class, yet simple, [webserver](https://caddyserver.com/) including automatic SSL certificate procurement and maintenance see:

  [How to deploy a SvelteKit app with the node-adapter](https://codepilotsf.medium.com/how-to-deploy-a-sveltekit-node-app-1c11171fe852)

```
