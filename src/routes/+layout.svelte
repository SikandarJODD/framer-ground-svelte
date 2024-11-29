<script lang="ts">
	import Navbar from '$lib/web/navbar/Navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	let { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />
<Navbar />
{@render children()}
