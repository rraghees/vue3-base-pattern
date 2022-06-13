<template>
  <div class="row">
    <div class="col-6">
      <p class="text-body1 text-weight-bold q-my-sm">Upload New App</p>
    </div>
  </div>
  <!-- <div class="row q-pa-sm" @dragover.prevent @drop.prevent="dropFiles">
    <div class="col-12 text-center brdr-dashed">
      <Icon size="100px" name="cloud_upload" color="primary" />
      <div class="text-center">
        <span class="row justify-center">
          <p class="q-px-xs">Drag & drop your app file or</p>
          <FileInput
            multiple
            :model-value="files"
            @update:model-value="dropFiles"
          />
        </span>
        <p class="q-pa-xs q-mb-xs q-mt-none">
          The file should end in .ipa or .pkg <br />.ipa files must use an
          Enterprise provisioning profile
        </p>
      </div>
      <div v-for="(fileInfo, i) in filesProgress" :key="i" class="col-12">
        <div class="row q-px-md">
          <div class="col-12 text-left">
            <h6 class="q-my-sm">Name: {{ fileInfo?.name }}</h6>
          </div>
          <div class="col-11">
            <q-linear-progress
              :color="
                hasError ? 'red' : fileInfo?.progress === 1 ? 'green' : 'blue'
              "
              size="10px"
              :value="getProgress(fileInfo?.progress)"
            />
          </div>
          <div class="col-1 q-my-none">
            <Icon size="sm" name="cancel" />
          </div>

          <div class="row">
            Size: {{ getSize(fileInfo?.progress).currentSize }} MB /
            {{ getSize(fileInfo?.progress).totalSize }} MB
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <slot></slot>
  <div class="row q-pa-sm">
    <div class="col-12">
      <h6 class="q-my-md">All Apps</h6>
    </div>
    <!-- <div v-for="(file, i) in files" :key="i" class="col-4 q-pa-xs">
      <div class="row full-width justify-between items-center brdr-br q-pa-sm">
        <div>
          <p class="text-body1 text-weight-bold q-mt-sm q-mb-none app-name">
            <q-tooltip
              anchor="top middle"
              self="bottom middle"
              :offset="[10, 10]"
            >
              <p class="text-body2 q-my-xs">
                {{ file.name }}
              </p>
            </q-tooltip>
            <Icon name="rhc-document" color="warning" /> {{ file.name }}
          </p>
          <p class="text-body2 text-warning q-my-none">{{ file.size }}</p>
        </div>
        <Icon
          class="cursor-pointer q-mx-none q-mt-md q-mb-none"
          name="rhc-trash"
          color="warning"
          size="lg"
          @click="removeFile(file.app_id, i)"
        />
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  components: {},
  props: {
    documents: {
      type: Array as PropType<any>,
    },
    uploadingFileE: {
      type: Object as PropType<any>,
    },
    filesProgress: {
      type: Array as PropType<any>,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update", "reset", "remove"],
});
</script>

<style lang="scss">
.app-name {
  white-space: nowrap;
  width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
