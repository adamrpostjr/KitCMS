<script>
	import { onMount } from 'svelte';

	var Name, Domain, Database, MongoConnectionString, Username, Email, Password, ConfirmPassword;

	const save = async () => {
		let res = await fetch('internal/setup.json', {
			method: 'POST',
			body: JSON.stringify({
				Name: Name,
				Domain: Domain,
				Database: Database,
				MongoConnectionString: MongoConnectionString,
				Username: Username,
				Email: Email,
				Password: Password
			})
		});
	};

	onMount(() => {
		Domain = window.location.hostname;
	});
</script>

<title>KitCMS Setup</title>

<the-title>KitCMS Setup</the-title>
<info>What is this</info>
<div>
	<span>KitCMS Name</span> <input type="text" bind:value={Name} />
</div>
<div>
	<span>KitCMS Domain</span> <input type="text" bind:value={Domain} />
</div>
<div>
	<span>Database</span>
	<select name="" id="" bind:value={Database}> <option>MongoDB</option> </select>
</div>
<div>
	<span>Connection String</span> <input type="text" bind:value={MongoConnectionString} />
</div>
<div><span>Username</span> <input type="text" bind:value={Username} /></div>
<div>
	<span>Email</span> <input type="email" bind:value={Email} />
</div>
<div>
	<span>Password</span> <input type="password" bind:value={Password} />
</div>
<div>
	<span>Confirm Password</span> <input type="password" bind:value={ConfirmPassword} />
</div>
<button on:click={save}>Get Going!</button>
