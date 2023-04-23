<script>
	import Card from "../lib/Card.svelte";
	import Body from "./Body.svelte";
</script>
<h1 class="heading">Curver</h1>
<p class="subheading">By Léo Mindlin</p>

<Body />

<style>
	:global(body) {
    --slate-900: #0f172a;
    --slate-800: #1e293b;
    --slate-700: #334155;
    --slate-600: #475569;
    --slate-500: #64748b;
    --slate-400: #94a3b8;
    --slate-300: #cbd5e1;
    --slate-200: #e2e8f0;
    --slate-100: #f1f5f9;
    --slate-50: #f8fafc;
    font-family: "InterVariable", sans-serif;
    font-size: 16px;
    font-weight: 400;
    background: #F9F9F9;
    color: var(--slate-900);
	}
  :global(h1) {
    font-size: 48px;
    font-weight: 800;
  }
  :global(h2) {
    font-size: 30;
    font-weight: 600;
  }
  :global(h3) {
    font-size: 24;
    font-weight: 600;
  }
  :global(h4) {
    font-size: 20;
    font-weight: 600;
  }

  :global(hr) {
		border: solid var(--slate-200);
		border-width: 0.75px;
		border-radius: 12px;

  }

  :global(select) {
    background: white;
    border: solid var(--slate-200);
		border-width: 2px;
    border-radius: 12px;
    color: var(--slate-900);
    font-size: 16px;
    padding-inline: 16px;
    padding-block: 8px;
    appearance: none;
    transition: all 0.2s ease-in-out;
  }

  :global(select:hover) {
    background: var(--slate-100);
    border: solid var(--slate-200);
		border-width: 2px;
    border-radius: 12px;
  }

  .heading {
    text-align: center;
    margin-bottom: 0;
  }
  .subheading {
    text-align: center;
    margin-top: 0;
  }
</style>
