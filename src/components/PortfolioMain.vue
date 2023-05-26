<template>
  <div class="container-fluid position-relative">
    <!-- Profile  -->
    <section class="border-bottom pt-3 about-bg">
      <div class="container p-3 d-flex">
        <span class="text-center mx-auto">
          <img class="dp mx-auto my-1 mb-3" src="/images/avatar.png" alt="" />
          <h1>Hi, I am Xavier 👋</h1>
          <p>
            This is my full portfolio where
            <br />
            I keep my projects and achievements!
          </p>
        </span>
      </div>
    </section>

    <!-- Projects -->
    <section class="border-bottom pt-3 proj-bg" id="proj">
      <div class="container p-3 mb-3 d-flex justify-content-center">
        <span class="text-center mx-auto">
          <h1>🏆 Projects 🏆</h1>
          <p class="text-secondary">
            Here are the projects I have done and some screenshots!
          </p>
          <div class="row mt-1 justify-content-center justify-content-md-start g-4">
            <template v-for="(obj, index) in projects" :key="index">
              <ProjectCard :obj="obj" />
            </template>
          </div>
        </span>
      </div>
    </section>

    <!-- Achievements -->
    <section class="border-bottom pt-3 achive-bg" id="achieve">
      <div class="container p-3 mb-3 d-flex justify-content-center">
        <span class="text-center mx-auto">
          <h1>🏅 Achievements 🏅</h1>
          <p class="text-secondary">
            Here are the a I have done and some screenshots!
          </p>
          <div class="row mt-1 justify-content-center justify-content-md-start g-4">

            <template v-for="(obj, index) in achievements" :key="index">
              <ProjectCard :obj="obj" />
            </template>

          </div>
        </span>
      </div>
    </section>

    <!-- Hobbies -->
    <section class="border-bottom pt-3 hobbies-bg" id="hobbies">
      <div class="container p-3 mb-3 d-flex flex-column">
        <span class="text-center mx-auto">
          <h1>💻 Hobbies 🥁</h1>
          <p class="text-secondary">
            Here are the hobbies and interests I took up along the years!
          </p>
        </span>

        <div class="container">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <template v-for="(obj, index) in hobbies" :key="index">
              <HobbyAccordion :obj="obj" :index="index" />
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- Recommendations -->
    <section class="border-bottom py-3 about-bg" id="recommend">
      <div class="container p-3 d-flex flex-column">
        <span class="text-center mx-auto mb-3">
          <h1>💬 Recommendations 💬</h1>
          <p class="text-secondary">
            These are the recommendations from my teachers, instructors and
            more!
          </p>
        </span>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <template v-for="(obj, index) in recommendations" :key="index">
            <RecommendationCard :obj="obj" :index="index" />
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import projects from "../data/projects.json"
import achievements from "../data/achievements.json"
import hobbies from "../data/hobbies.json"
import HobbyAccordion from "./HobbyAccordion.vue"
import RecommendationCard from "./RecommendationCard.vue"
import recommendations from "../data/recommendations.json"


export default {
  name: 'PortfolioMain',
  components: { ProjectCard, HobbyAccordion,RecommendationCard},
  data() {
    return {
      projects: projects,
      achievements: achievements,
      hobbies: hobbies,
      recommendations: recommendations
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.dp {
  max-width: 200px;
}

.about-bg,
.achive-bg {
  background-color: #fad4c0;
}

.nav-bg {
  background-color: rgba(255, 255, 255, 0.7);
}

.proj-bg,
.hobbies-bg {
  background-color: #c0fdfb;
}

.card-img {
  /* width: 100%; */
  height: 15rem;
  object-fit: cover;
  object-position: 50% 60%;
}

img {
  width: 100%;
  /* height: 300px; */
  object-fit: cover;
}

.bg-white-low {
  background-color: rgba(255, 255, 255, 0.4);
}

.navbar-brand {
  color: #b09e99;
}

.card-img-overlay2 {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--bs-card-img-overlay-padding);
  border-radius: 0 !important;
}

.grow {
  transition: transform 0.5s ease;
}

.grow:hover {
  transform: scale(1.05);
}</style>
