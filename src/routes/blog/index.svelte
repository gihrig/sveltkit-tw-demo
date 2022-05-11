<!-- blog/index.svelte -->
<script context="module">
  export const prerender = true;

  export async function load({ fetch }) {
    const res = await fetch('/blog.json');
    return {
      props: {
        posts: await res.json(),
      },
    };
  }
</script>

<script lang="ts">
  export let posts;
</script>

<svelte:head>
  <title>blog</title>
</svelte:head>

<article class="leading-none">
  <h1>Blog</h1>

  <ul class="m-0 mt-4 p-0">
    {#each posts as post}
      <li class="list-none">
        <a
          class="mb-2 block rounded-lg border bg-slate-50 py-2 px-2 font-bold"
          href="/blog/{post.slug}">{post.title}</a
        >
      </li>
    {/each}
  </ul>
</article>
