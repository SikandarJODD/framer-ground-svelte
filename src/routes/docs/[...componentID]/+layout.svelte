<script>
	import SidebarDocs from '$lib/components/docs/sidebar/SidebarDocs.svelte';

	// will include sidebar and table of contents
	let { children } = $props();
</script>

<SidebarDocs>
	{@render children()}
</SidebarDocs>
