<template>
  <div class="h-screen flex flex-col">
    <nav class="bg-white shadow-md fixed w-full z-10">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex shrink-0 items-center"></div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <span
                  class="ml-2 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
                >
                  <NuxtLink to="/"> Neural Nexus </NuxtLink>
                </span>
              </div>
            </div>
          </div>
          <div class="absolute gap-2 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <NuxtLink
              to="/auth/login"
              class="rounded-md text-gray-700 px-2 py-2 hover:bg-slate-300 text-sm font-semibold"
            >
              Login
            </NuxtLink>
            <NuxtLink
              to="/auth/register"
              class="rounded-3xl text-white shadow-md px-4 py-2 hover:ring-2 hover:ring-blue-200 bg-blue-700 text-sm font-semibold"
            >
              Create an account
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <div class="mt-16 flex-1">
      <slot />
      <NuxtLoadingIndicator color="#01dc82" :height="5" />
    </div>

    <footer class="bg-gradient-to-r from-blue-500 to-teal-400 py-8">
      <div class="container mx-auto text-center">
        <p class="text-white text-2xl font-bold">
          Innovating the Future, One Step at a Time
        </p>
      </div>
    </footer>
  </div>
</template>