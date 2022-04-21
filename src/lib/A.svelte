<script lang="ts">
  // A styled anchor tag replacement
  // usful for basic text links
  // For complex uses, menues or images
  // Use the default html <a></a> tag
  export let style;
  export let href;
  export let target;
  export let text;
</script>

<a class={style} {href} {target}>{text}</a>

<style>
  a {
    @apply text-accent;
    @apply hover:underline;
  }
</style>
