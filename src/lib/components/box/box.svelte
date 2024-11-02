<script lang="ts">
	import type { WrapperComponentPropsType } from '$lib/@types/index.js';
	import Base from '$lib/core/base/base.svelte';
	let props: WrapperComponentPropsType = $props();
</script>

<Base {...props}></Base>
