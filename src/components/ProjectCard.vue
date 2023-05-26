<template>
    <div class="col-10 col-sm-6 col-lg-4">
        <div class="container-fluid p-0 shadow-sm rounded-bottom border bg-white-low h-100 grow">
            <div class="card text-dark">
                <img :src="obj.img_src" class="card-img" alt="..." />
                <div class="card-img-overlay2">
                    <h5 class="card-title text-light text-start m-0">
                        {{obj.title}}
                    </h5>
                </div>
            </div>
            <div class="card-body m-3">
                <p class="text-start mb-0">
                    <template v-for="(detail, index) in obj.details" :key="index">
                        <template v-if="detail.key === 'Link'">
                            <strong>{{ detail.key }}: </strong>
                            <a :href="detail.text" target="_blank">url</a>
                        </template>
                        <template v-else>
                            <strong>{{ detail.key }}: </strong>
                            {{ detail.text }}
                        </template>
                        <template v-if="index != obj.details.length - 1">
                            <br>
                        </template>
                    </template>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        obj: Object
    },
    data() {
        return {

        }
    },
}

</script>