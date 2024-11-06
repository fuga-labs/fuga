<script lang="ts">
	import type { ComponentPropsType } from '$lib/@types/index.js';
	import { generateSCSS, separateCssProps } from './utils.js';
	import type { Snippet } from 'svelte';

	let props: ComponentPropsType = $props();

	const { children, as = 'div' } = props as {
		children?: Snippet;
		as: string;
		[key: string]: unknown;
	};

	const { cssProps, otherProps } = separateCssProps(props);

	let { css, className } = $derived.by(() => generateSCSS(cssProps, as));

	let style = 'style';
</script>

{#if children === undefined}
	<svelte:element this={as} class={className} {...otherProps}></svelte:element>
{:else}
	<svelte:element this={as} class={className} {...otherProps}>
		{@render children()}
	</svelte:element>
{/if}

<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:element this={style}>
	{@html css}
</svelte:element>
