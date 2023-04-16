<template>
  <div class="activities">
    <div class="header-activities">
      {{ translation.onTranslate('activity') }}
    </div>
    <div class="c-list">
      <Listactivity/>
    </div>
  </div>
</template>

<script src="./activity.js">
</script>

<style>
@import '../../../assets/icons/icons.scss';
@import url("activity.scss");
</style>
