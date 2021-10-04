<script>
	import { onMount } from 'svelte';

	var title;

	const basicInfo = async () => {
		let response = await fetch('internal/api/basicinfo.json');
		if (response.ok) {
			let json = await response.json();
			title = json.test;
		} else {
			alert('HTTP-Error: ' + response.status);
		}
	};

	onMount(() => {
		basicInfo();
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
