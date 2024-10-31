<script lang="ts">
	import type { ComponentPropsType } from '$lib/@types/index.js';

	import { generateSCSS } from './utils.js';

	let { children, as = 'div', ...cssprops }: ComponentPropsType = $props();
	let { css, className } = generateSCSS(cssprops, as);
	let generatedCSS = $derived('' + css);
</script>

<svelte:element this={as} class={className}>
	{@render children()}
</svelte:element>

<svelte:element this="style">
	{@html generatedCSS}
</svelte:element>
