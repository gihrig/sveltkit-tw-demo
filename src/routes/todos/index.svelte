<script lang="ts">
  import { enhance } from '$lib/form';
  import { scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  type Todo = {
    uid: string;
    created_at: Date;
    text: string;
    done: boolean;
    pending_delete: boolean;
  };

  export let todos: Todo[];
</script>

<svelte:head>
  <title>Todos</title>
</svelte:head>

<article>
  <h1>Todos</h1>

  <form
    class="new"
    action="/todos"
    method="post"
    use:enhance={{
      result: async ({ form }) => {
        form.reset();
      },
    }}
  >
    <input name="text" aria-label="Add todo" placeholder="+ tap to add a todo" />
  </form>

  {#each todos as todo (todo.uid)}
    <div
      class="todo"
      class:done={todo.done}
      transition:scale|local={{ start: 0.7 }}
      animate:flip={{ duration: 200 }}
    >
      <form
        action="/todos?_method=PATCH"
        method="post"
        use:enhance={{
          pending: ({ data }) => {
            todo.done = !!data.get('done');
          },
        }}
      >
        <input type="hidden" name="uid" value={todo.uid} />
        <input type="hidden" name="done" value={todo.done ? '' : 'true'} />
        <button class="toggle" aria-label="Mark todo as {todo.done ? 'not done' : 'done'}" />
      </form>

      <form class="text" action="/todos?_method=PATCH" method="post" use:enhance>
        <input type="hidden" name="uid" value={todo.uid} />
        <input aria-label="Edit todo" type="text" name="text" value={todo.text} />
        <button class="save" aria-label="Save todo" />
      </form>

      <form
        action="/todos?_method=DELETE"
        method="post"
        use:enhance={{
          pending: () => (todo.pending_delete = true),
        }}
      >
        <input type="hidden" name="uid" value={todo.uid} />
        <button class="delete" aria-label="Delete todo" disabled={todo.pending_delete} />
      </form>
    </div>
  {/each}
</article>

<style>
  article {
    /* TODO: Required only for exact match of SvelteKit example */
    @apply leading-none;
  }

  button.toggle {
    /* Todo done button */
    @apply box-border rounded-full border border-gray-900/25 bg-auto;
  }

  form.text {
    /* Editable Todo item */
    @apply relative flex flex-1 items-center;
  }

  input {
    @apply border border-solid border-transparent;
  }

  input:focus-visible {
    /* TODO: box-shadow hides blue border TW rules show */
    /* @apply shadow-inner shadow-soft; */
    box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
    @apply border-accent outline-none;
  }

  .delete {
    @apply bg-delete-icon opacity-20;
  }

  .delete:hover,
  .delete:focus {
    @apply opacity-100 transition duration-200;
  }

  .done {
    @apply transform-none opacity-40 drop-shadow-md;
  }

  .done .toggle {
    @apply bg-check-icon;
  }

  .new {
    @apply mx-0 mt-0 mb-2;
  }

  .new input {
    /* TODO: Custom values are only for exact match to SvelteKit example */
    @apply w-full px-4 pt-[0.5em] pb-[0.3em] text-[28px];
    @apply box-border rounded-lg bg-transparent text-center;
  }

  .save {
    @apply absolute right-0 bg-save-icon opacity-0;
  }

  .todo {
    @apply grid grid-cols-[2rem_1fr_2rem] gap-2;
    @apply m-0 mb-2 items-center p-2;
    @apply rounded-lg border bg-white;
    /* TODO: Do the following really make sense? */
    @apply -translate-y-0.5 -translate-x-0.5 drop-shadow-md;
  }

  .todo button {
    @apply h-8 w-8 bg-transparent bg-center bg-no-repeat;
  }

  .todo input {
    @apply flex flex-1 rounded-sm py-2 pr-8 pl-3;
  }

  .todo input:focus + .save,
  .save:focus {
    transition: opacity 0.2s;
    opacity: 1;
  }
</style>
