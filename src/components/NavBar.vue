<template>
      <nav class="navbar sticky-top nav-bg navbar-expand-lg navbar-light px-2">
        <div class="container-fluid">
          <!-- <h1 class="display-6">My Portfolio</h1> -->
          <button
            class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#proj">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#achieve">Achievements</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#hobbies">Hobbies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#recommend">Recommendations</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>

export default {
  name: 'NavBar'
}
</script>