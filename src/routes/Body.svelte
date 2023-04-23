<script>
	import ColorChip from '../lib/ColorChip.svelte';
	import Card from '../lib/Card.svelte';
  import { curveData } from './curver';
</script>

<div class="card-container">
	<Card>
    <div class="card-header-container">
      <h2>Curve Function</h2>
      <select name="cars" id="cars">
        <option value="sqrt">Square Root</option>
        <option value="other">Other</option>
      </select>
    </div>
		<hr />
		<div class="card-body">
			{#each curveData as curve, i}
        <div class="card-row">
          <p>{curve.percent}</p>
          <p>→</p>
          <ColorChip index={i} range={curve.range} />
        </div>
      {/each}
		</div>
	</Card>
	<Card>
		<h2>Raw Grade</h2>
		<hr />
		<div class="card-body">
			<p>Card content</p>
		</div>
	</Card>
	<Card>
		<h2>Curved Grade</h2>
		<hr />
		<div class="card-body">
			<p>Card content</p>
		</div>
	</Card>
</div>

<style>
  :global(body) {
    --card-margin: 15px
  }

	.card-body {
		margin: 0px;
	}

  .card-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: var(--card-margin);
  }

  .card-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

	h2 {
    font-size: xx-large;
		margin: var(--card-margin);
	}

	p {
		margin: var(--card-margin);
	}

  hr {
    margin: 0;
  }

	.card-container {
		display: flex;
		justify-content: center;
		align-items: stretch;
		margin-inline: 5rem;
	}
</style>
