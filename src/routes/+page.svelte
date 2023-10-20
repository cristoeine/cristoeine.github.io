<script>
    import Background from './Background.svelte';
	import Counter from './Counter.svelte';
    import Experience from './Experience.svelte';
    import Intro from './Intro.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Cristine Huang" content="personal website" />
</svelte:head>

<section>
	<Intro/>
	<Background/>
	<Experience/>

	<!-- <Counter /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex: 0.6;
	}

</style>
