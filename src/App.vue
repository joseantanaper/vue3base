<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          alt="Vue logo"
          style="width: 26px; margin: 0px !important; padding: 0px !important"
          src="@/assets/logo.png"
        />
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view1">View 1</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view2">View 2</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div id="sidebar-menu" class="flex-shrink-0 p-3 bg-white">
    <a
      href="/"
      class="
        d-flex
        align-items-center
        pb-3
        mb-3
        link-dark
        text-decoration-none
        border-bottom
      "
    >
      <svg class="bi me-2" width="30" height="24">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-5 fw-semibold">Collapsible</span>
    </a>
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#home-collapse"
          aria-expanded="true"
        >
          Main
        </button>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <router-link class="nav-link link-dark rounded" to="/home"
                >Home</router-link
              >
            </li>
            <li>
              <router-link class="nav-link link-dark rounded" to="/view1"
                >View 1</router-link
              >
            </li>
            <li>
              <router-link class="nav-link link-dark rounded" to="/view2"
                >View 2</router-link
              >
            </li>
            <li>
              <router-link class="nav-link link-dark rounded" to="/about"
                >About</router-link
              >
            </li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#homealt-collapse"
          aria-expanded="false"
        >
          Main Alt
        </button>
        <div class="collapse show" id="homealt-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <router-link class="nav-link link-dark rounded" to="/home"
                >Home</router-link
              >
            </li>
            <li>
              <router-link class="nav-link link-dark rounded" to="/view1"
                >View 1</router-link
              >
            </li>
            <li>
              <router-link class="nav-link link-dark rounded" to="/view2"
                >View 2</router-link
              >
            </li>
            <li>
              <router-link class="nav-link link-dark rounded" to="/about"
                >About</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      
      <li class="border-top my-3"></li>
      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded"
          data-bs-toggle="collapse"
          data-bs-target="#config-collapse"
          aria-expanded="true"
        >
          Configuration
        </button>
<div class="collapse show" id="config-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <router-link class="nav-link link-dark rounded" to="/home"
                >Home</router-link
              >
            </li>
            <li>
              <router-link class="nav-link link-dark rounded" to="/view1"
                >View 1</router-link
              >
            </li>
            <li>
              <router-link class="nav-link link-dark rounded" to="/view2"
                >View 2</router-link
              >
            </li>
            <li>
              <router-link class="nav-link link-dark rounded" to="/about"
                >About</router-link
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

  <router-view class="router-view" />
</template>

<style>
html,
body {
  height: 100% !important;
}
html {
  overflow-y: scroll !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

/*
#nav {
  padding: 30px;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-item .router-link-active {
  color: white;
}
*/
.router-view {
  border-top: 56px solid #eeeeee !important;
  border-left: 250px solid red !important;
  display: block;
}

/*
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

html {
  height: -webkit-fill-available;
}
*/

#sidebar-menu {
  position: fixed;
  top: 56px;
  bottom: 0px;
  width: 250px !important;
  border-right: 1px solid #dddddd;
  text-align: left;
  overflow-y: scroll;
}
#sidebar-menu ul,
#sidebar-menu ul li,
#sidebar-menu ul li a {
  width: 100%;
}

#sidebar-menu ul li button,
#sidebar-menu ul li a {
  text-align: left;
}

.btn-toggle {
  display: inline-flex;
  width: 100%;
}

.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, 0.85);
  background-color: #d2f4ea;
}

.btn-toggle::before {
  top: 10px;
  display: inline-flex;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
}

.btn-toggle[aria-expanded="true"] {
  color: rgba(0, 0, 0, 0.85);
}

.btn-toggle[aria-expanded="true"]::before {
  opacity: 0.6;
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  display: inline-flex;
  /*padding: 0.1875rem 2rem;*/
  padding-left: 2rem;
  margin-top: 0.125rem;
  /*margin-left: 1.25rem;*/
  text-decoration: none;
}

.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}

.scrollarea {
  overflow-y: auto;
}

.fw-semibold {
  font-weight: 600;
}
.lh-tight {
  line-height: 1.25;
}
</style>

