<script context="module">
    import {client} from "../../contentful/index.js";
    export async function load({params}) {
        const {slug} = params;
        const data = await client.getEntry(slug);
        // console.log(data)
        return {
            props: {
                slug: slug,
                data: data
            }
        };
    }
</script>

<script>
    export let data={};
    let post
    $:post = data;

</script>

<div>
    <!--{JSON.stringify(post)}-->
    <div class="   dark:bg-gray-800 max-w-6xl px-6 py-16 mx-auto space-y-12">
        {#await post}
            <p>Loading</p>
        {:then post}
            <!--{JSON.stringify(post.fields.contents) }-->

            <article class="  flex-col space-y-8 dark:bg-gray-800 dark:text-gray-50">
                <div class="space-y-6">
                    <h1 class="text-4xl font-bold md:tracking-tight md:text-5xl">
                        {post.fields.title  }
                    </h1>
                    <div>
                        <p>{post.fields.summary}</p>
                    </div>
                    <div
                            class="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400"
                    >
                        <div class="flex items-center md:space-x-2">
                            <img
                                    src="https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                    class="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                            />
                            <p class="text-sm">Leroy Jenkins • {post.fields.createdAt}</p>
                        </div>
                        <p class="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
                    </div>
                </div>
                <div>
                    <img src={post.fields.featuredImage.fields.file.url} alt=" "/>
                </div>
                <div class="dark:text-gray-100">
                    <p>
                        {#if post.fields.content.content[0].content[0].value}
                            {  post.fields.content.content[0].content[0].value }
                        {:else }
                            Loading
                        {/if}
                    </p>
                </div>
            </article>

        {/await}
        <div></div>
    </div>
</div>
