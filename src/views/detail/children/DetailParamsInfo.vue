<template>
  <div class="detail-params-info">
    <table class="rule">
      <tr v-for="(item, index) in detailParamsInfo.rule" :key="index">
        <td v-for="(val, key) in item" :key="key">{{ val }}</td>
      </tr>
    </table>
    <table class="info">
      <tr v-for="(item, index) in detailParamsInfo.info" :key="index">
        <td
          v-for="(val, key) in item"
          :key="key"
          :class="{ value: key === 'value' }"
        >
          {{ val }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    detailParamsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.detail-params-info {
  padding: 25px 10px 10px;
}
.detail-params-info table {
  width: 100%;

  line-height: 40px;
  font-size: 13px;
}
.detail-params-info table tr {
  height: 40px;
}
.detail-params-info table td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.detail-params-info table.info td {
  min-width: 97px;
}
.value {
  color: #eb4868;
}
</style>