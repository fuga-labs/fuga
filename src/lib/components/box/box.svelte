<script lang="ts">
	import type { ComponentPropsType } from '$lib/@types/index.js';
	import Base from '$lib/core/base/base.svelte';
	let { children, ...rest }: ComponentPropsType = $props();
</script>

<Base {...rest}>{@render children()}</Base>
