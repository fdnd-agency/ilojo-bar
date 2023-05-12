<script>
    let title = '';
    let description = '';

    async function handleSubmit() {
        const response = await fetch('/api/hygraph', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        });
        // Handle the response from the Hygraph API
    }

</script>
<section class="form_01">
    <h4>Form 1</h4>

    <form class="p-4 bg-light" on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" id="title" class="form-control" bind:value={title}>
        </div>
        <div class="form-group">
            <label for="description">Description:</label>
            <textarea id="description" class="form-control" bind:value={description}></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>