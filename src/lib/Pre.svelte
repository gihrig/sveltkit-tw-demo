<script lang="ts">
  export let text;
</script>

<pre>{text}</pre>

<style>
  pre {
    @apply text-base;
    @apply font-mono;
    @apply bg-code-background;
    @apply text-code-text;
    @apply rounded;
    @apply shadow-code;
    @apply p-2;
    @apply overflow-x-auto;
  }
</style>
