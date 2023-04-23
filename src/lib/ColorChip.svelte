<script>
  /** @type {number} */
  export let index;
  /** @type {string} */
  export let range;
  

  import cssVars from 'svelte-css-vars';
  import { colors } from "../routes/curver";

  $: styleVars = {
    bgColor: colors[index],
  };
</script>

<p class="chip" use:cssVars={styleVars}>
  {range}
</p>


<style>
  .chip {
    color: white;
    background: var(--bgColor);
    border-radius: 100px;
    margin-inline: 2rem;
    padding: 5px;
    padding-inline: 10px;
    text-align: center;
    width: 75px;
  }
</style>