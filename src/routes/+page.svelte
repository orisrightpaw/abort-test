<script lang="ts">
    let { data } = $props()
</script>

<p>OK</p>

{#each data.logs as log}
    <p>{log}</p>
{/each}