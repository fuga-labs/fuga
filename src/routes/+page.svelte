<script lang="ts">
	import { Box } from '$lib/index.js';
</script>

<Box
	as="button"
	color={{ base: 'blue-200' }}
	p="3"
	bgColor="blue-700"
	_hover={{ bgColor: 'blue-300', color: 'blue-700' }}
	__after={{ bgColor: 'blue-200' }}
	onclick={() => console.log('clicked !!!')}>click</Box
>
