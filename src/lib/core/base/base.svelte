<script lang="ts">
	import type { ComponentPropsType } from '$lib/@types/index.js';
	import { generateSCSS, separateCssProps } from './utils.js';

	let { children, as = 'div', ...props }: ComponentPropsType = $props();
	const { cssProps, otherProps } = separateCssProps(props);

	let { css, className } = $derived.by(() => generateSCSS(cssProps, as));

	let style = 'style';
</script>

<svelte:element this={as} class={className} {...otherProps}>
	{@render children()}
</svelte:element>
<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:element this={style}>
	{@html css}
</svelte:element>
