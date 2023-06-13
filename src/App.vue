<template>
  <div class="container" id="product-list">

    <div class="row gy-4 mb-4">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(project, index) in projects" :key="project.id">
        <div class="card">
          <div class="card-title">
            <h3>{{ project.title }}</h3>
          </div>
          <div class="card-body d-flex justify-content-between align-items-end">
            <div>
              <h6>{{ project.type.tech }}</h6>

            </div>

          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 1 }"
            @click="getData(currentPage - 1)">Previous</button></li>
        <li class="page-item" v-for="n in lastPage"><button :class="{ 'page-link': true, 'active': currentPage === n }"
            @click="getData(n)">{{ n }}</button>
        </li>

        <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 4 }"
            @click="getData(currentPage + 1)">Next</button></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  'name': 'App',
  data() {
    return {
      projects: [],
      apiUrl: 'http://127.0.0.1:8000/api',
      currentPage: 1,
      lastPage: null,
    }
  },
  methods: {
    getData(numPage) {
      axios.get(`${this.apiUrl}/projects`, {
        params: {
          'page': numPage
        }
      }).then((res) => {
        this.projects = res.data.results.data;
        this.currentPage = res.data.results.current_page;
        this.lastPage = res.data.results.last_page;
      })
    }
  },
  mounted() {
    this.getData(1);
  }
}
</script>

<style lang="scss" scoped></style>