<template>
    <div class="text-center col">
        <div class="container-fluid p-3 px-4 border border-light rounded-3 bg-white-low shadow-sm grow">
            <blockquote class="blockquote">
                <p v-if="!obj.isLetter">
                    {{ obj.description }}
                </p>
                <img v-else :src="obj.src" alt="" srcset="">
            </blockquote>
            <figcaption class="blockquote-footer">
                {{ obj.name }}, {{obj.title}} of
                <cite title="Source Title">{{obj.org}}</cite>
            </figcaption>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RecommendationCard',
    props: {
        obj: Object
    },
    data() {
        return {

        }
    },
}
</script>