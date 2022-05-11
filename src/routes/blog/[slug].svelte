<!--
  blog/[slug].svelte
  Display a blog entry corresponding to {slug}
-->
<script context="module">
  export const prerender = true;

  export async function load({ params, fetch }) {
    let slug = params.slug;
    console.log(`/blog/[slug].svelte - params.slug: ${slug}`);
    const res = await fetch(`/blog/${slug}.json`);
    switch (slug) {
      case 'foo-blog': {
        return {
          status: 307,
          redirect: '/blog',
        };
      }
      default: {
        let post = await res.json();
        // console.log(`/blog/[slug].svelte - post.json: ${JSON.stringify(post)}`);
        return {
          props: {
            post,
          },
        };
      }
    }
  }
</script>

<script lang="ts">
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<article>
  <h1>{@html post.title}</h1>
  <div>
    {@html post.body}
  </div>
</article>
