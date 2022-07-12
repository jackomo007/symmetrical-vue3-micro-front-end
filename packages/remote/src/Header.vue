<template>
  <Disclosure as="nav" class="bg-gray-800 mb-5" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto rounded" src="https://camo.githubusercontent.com/865f9c9736aa986f59447b4671ee7753b52b7f9fc28614a9c3b6cedc2f5c4c7b/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64766d3673676731682f696d6167652f75706c6f61642f76313630393032363534372f76366e316d6166776c3563773533626d6d7437752e6a7067" alt="Workflow" />
            <img class="hidden lg:block h-8 w-auto rounded" src="https://camo.githubusercontent.com/865f9c9736aa986f59447b4671ee7753b52b7f9fc28614a9c3b6cedc2f5c4c7b/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64766d3673676731682f696d6167652f75706c6f61642f76313630393032363534372f76366e316d6166776c3563773533626d6d7437752e6a7067" alt="Workflow" />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link to="/">
                <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              </router-link>
              <router-link to="/about">
                <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              </router-link>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <ShoppingBagIcon class="h-6 w-6" aria-hidden="true" />
          </button>
            <div class="text-white text-sm">{{count}}</div>

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://scontent.fjdo1-1.fna.fbcdn.net/v/t39.30808-1/284156772_10228656367662458_7349518960404229620_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeH7p2g67ikUNlbnSWN0aIKevwoVPhvLCMu_ChU-G8sIy6Vt8_Z3nFj9qV3rR-Ets9E&_nc_ohc=AXwyv_Sl3YYAX-nJbKt&_nc_ht=scontent.fjdo1-1.fna&oh=00_AT-xcjfdiDiSrkwbPM7qsq0SxeTKtubK8Jg0t-8Y0SpsIw&oe=62D2940A" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link to="/">
          <DisclosureButton class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" > Home</DisclosureButton>
        </router-link>
        <router-link to="/about">
          <DisclosureButton class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" > About</DisclosureButton>
        </router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { ShoppingBagIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
</script>
<script>
export default {
  computed: {
    count() {
      return this.$store?.state?.count ?? 0;
    }
  },
}
</script>
