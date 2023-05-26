<template>
    <div class="accordion-item">
        <h2 class="accordion-header" :id="obj.headerid">
            <button class="accordion-button" :class="{ 'collapsed': index != 0 }" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#' + obj.id" aria-expanded="false" :aria-controls="obj.id">
                {{obj.title}}
            </button>
        </h2>
        <div :id="obj.id" class="accordion-collapse collapse" :class="{ 'show': index === 0 }" :aria-labelledby="obj.headerid"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                <div class="row g-4">
                    <div class="col-12 col-md-4">
                        <img :src="obj.img_src" class="card-img" alt="..." />
                    </div>
                    <div class="col-12 col-md-8">
                        <span>
                            <h1>{{obj.title}}</h1>
                            <p class="text-start">
                                <template v-for="(detail, index) in obj.details" :key="index">
                                    <template v-if="detail.key === 'Link'">
                                        <strong>{{ detail.key }}: </strong>
                                        <a :href="detail.text">url</a>
                                    </template>
                                    <template v-else>
                                        <template v-if="!detail.isLinks">
                                            <strong>{{ detail.key }}: </strong>
                                            {{ detail.text }}
                                        </template>
                                        <template v-else>
                                            <strong>{{ detail.key }}: </strong>
                                            <template v-for="(link,index) in detail.links" :key="index" >
                                                <text v-if="index != 0">, </text><a :href="link.link" target="_blank">{{ link.text }} </a>
                                            </template>
                                        </template>
                                    </template>
                                    <br>
                                </template>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HobbyAccordionItem',
    props: {
        obj: Object,
        index: Number
    },
    data() {
        return {

        }
    },
}

</script>