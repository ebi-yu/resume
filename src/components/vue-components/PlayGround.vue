<template>
  <div class="block">
    <h1>Element-plus</h1>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <el-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
    <el-row class="mb-4">
      <Edit style="width: 3em; height: 3em; margin-right: 8px" />
      <Share style="width: 3em; height: 3em; margin-right: 8px" />
      <Delete style="width: 3em; height: 3em; margin-right: 8px" />
      <Search style="width: 3em; height: 3em; margin-right: 8px" />
    </el-row>
  </div>

  <div class="block">
    <h1>Tail Wind</h1>
    <table class="table-auto">
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="block">
    <h1>vue component</h1>
    <MyLinkPreview url="https://astro.build/"></MyLinkPreview>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
import MyLinkPreview from "./MyLinkPreview.vue";

import { ref } from "vue";

const active = ref(0);

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<style scoped>
h1 {
  background-color: beige;
}

.block {
  margin-bottom: 50px;
}
.mx-1 {
  font-size: 30px;
}

.table-auto td {
  font-size: 30px;
}
</style>
