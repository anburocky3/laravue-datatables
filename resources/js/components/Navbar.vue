<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Vuedatatables</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item active dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >  Demo</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a
                class="dropdown-item"
                href="/"
              >Vuetable2</a>
              <a class="dropdown-item" href="/laravel-api">Laravel API</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Download</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a
                class="dropdown-item"
                href="https://github.com/anburocky3/laravue-datatables"
                target="_blank"
              >Vuetable2 API</a>
              <a class="dropdown-item" href="https://fb.me/anburocky3" target="_blank">Laravel API</a>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/ratiw/vuetable-2"
              target="_blank"
            >Vuetable-2 Package</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Developer</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a class="dropdown-item" href="https://github.com/anburocky3" target="_blank">Github</a>
              <a class="dropdown-item" href="https://fb.me/anburocky3" target="_blank">Facebook</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
