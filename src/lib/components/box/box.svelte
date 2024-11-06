<script lang="ts">
	import type { WrapperComponentPropsType } from '$lib/@types/index.js';
	let props: WrapperComponentPropsType = $props();
	import Base from '$lib/core/base/base.svelte';
</script>

<Base {...props}></Base>
