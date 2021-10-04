<script>
	import { onMount } from 'svelte';

	var title;

	const basicInfo = async () => {
		let response = await fetch('internal/basicinfo.json');
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

<!-- src/routes/__layout.svelte -->
<nav>
	<a href="/">Home</a>
	<a href="/updates">Updates</a>
	<!-- new section -->
	<a href="/post">Post</a>
	<a href="/add/post">Add New</a>
	<a href="/post/categories">Categories</a>
	<a href="/post/tags">Tags</a>
	<!-- new section -->
	<a href="/media">Media</a>
	<a href="/add/media">Add New</a>
	<!-- new section -->
	<a href="/page">Pages</a>
	<a href="/add/page">Add New</a>
	<!-- new section -->
	<a href="/comments">Comments</a>
	<!-- new section  -->
	<a href="/users">Users</a>
	<a href="/add/user">Add New</a>
	<!-- new section -->
	<a href="/sites">Sites</a>
	<a href="/add/site">Add New</a>
	<!-- new section -->
	<a href="/settings">Settings</a>
</nav>

<slot />
