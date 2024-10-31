<script lang="ts">
	import type { ComponentPropsType } from '$lib/@types/index.js';
	import { generateSCSS } from './utils.js';

	let { children, as = 'div', ...cssprops }: ComponentPropsType = $props();
	let { css, className } = $derived.by(() => generateSCSS(cssprops, as));

	let style = 'style';
</script>

<svelte:element this={as} class={className}>
	{@render children()}
</svelte:element>
<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:element this={style}>
	{@html css}
</svelte:element>
