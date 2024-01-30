<template>
  <a :href="url" target="_blank">
    <div class="link-preview" v-if="linkData">
      <div class="link-preview-text">
        <h3>{{ linkData.title }}</h3>
        <p class="link-preview-description">{{ linkData.description }}</p>
        <div class="link-preview-text-domain">
          <img
            class="link-preview-text-favicon"
            v-if="linkData.favicon"
            :src="linkData.favicon"
            alt="Preview"
          />
          <p>{{ linkData.domain }}</p>
        </div>
      </div>
      <img v-if="linkData.img" :src="linkData.img" alt="Preview" />
    </div>
    <div v-else>Loading...</div>
  </a>
</template>

<script lang="ts" setup>
import { type Ref, ref } from "vue";
import linkPreviewGenerator from "link-preview-generator";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

const linkData: Ref<any> = ref(null);

try {
  const { title, img, description, domain, favicon } =
    await linkPreviewGenerator(props.url);
  linkData.value = {
    title,
    img,
    description,
    domain,
    favicon,
  };
} catch (error) {
  console.error("リンクプレビューデータの取得に失敗しました:", error);
}
</script>

<style scoped>
.link-preview {
  background-color: snow;
  padding: 12px;
  width: 50%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.link-preview img {
  height: auto;
  object-fit: fill;
}
.link-preview-text-favicon {
  width: 30px;
}

.link-preview h3 {
  font-size: 1.5em;
  margin: 0;
  color: #333;
  padding-bottom: 20px;
}

.link-preview-description {
  font-size: 0.8em;
  margin: 0;
  color: #666;
}

.link-preview-text-domain {
  font-size: 0.8em;
  display: flex;
  flex-direction: row;
  color: black;
}
</style>
