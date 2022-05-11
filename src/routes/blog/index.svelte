<!-- blog/index.svelte -->
<script context="module">
  export const prerender = true;

  export async function load({ fetch }) {
    const res = await fetch('/blog.json');
    return {
      props: {
        posts: await res.json()
      }
    };
  }
</script>

<script lang="ts">
  export let posts;
</script>

<svelte:head>
  <title>blog</title>
</svelte:head>

<main id="index" class="col-span-9">
  <article class="p-3 overflow-hidden bg-white border border-gray-200 hover:bg-gray-100">
    <h1 class="text-gray-600">Blog</h1>

    <ul>
      {#each posts as post}
        <li><a href="/blog/{post.slug}">{post.title}</a></li>
      {/each}
    </ul>
  </article>
</main>

<style>
  a {
    @apply text-red-500;
    @apply font-bold;
    /* @apply-ing too deep crashes server */
    /* @apply text-red-500 font-bold; */
    /* @apply hover:text-blue-400; */
    /* @apply hover:underline; */
  }

  a:hover {
    @apply text-blue-400;
    @apply underline;
  }

  h1 {
    @apply text-5xl;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  a {
    display: block;
    padding: 0.5em 0;
    border-bottom: 1px solid #999;
  }
</style>
