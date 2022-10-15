<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon name="kayaking" size="30px"></q-icon>
          </q-avatar>
          Todo
        </q-toolbar-title>
        {{ this.claims && this.claims.email ? claims.email : '' }}
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>
