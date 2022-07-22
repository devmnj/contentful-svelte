<script context="module">
    import {client} from "../contentful";
    export async function load() {
        let posts = [{}];
        client.getEntries().then(entries => posts = entries)
        return {props: {posts}}
    }
</script>
<script>
    import PostGrid from './../components/postGrid.svelte';
    export let posts;
</script>
<div>
    <!-- {JSON.stringify(posts.items[0].fields)} -->
    <PostGrid posts={posts.items}/>
</div>