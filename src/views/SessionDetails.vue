<template>
  <n-space justify="center">
    <n-h3 justify="center">Edit Session</n-h3>
  </n-space>

  <n-space justify="center">
    <n-form
      ref="formRef"
      :model="model"
      label-placement="top"
      :label-width="160"
      :style="{
        maxWidth: '640px',
      }"
      :rules="rules"
    >
      <n-grid :span="24" :x-gap="24">
        <n-form-item-gi
          v-for="(item, index) in Object.keys(modelFields)"
          :key="index"
          :span="12"
          :label="modelFields[item].label"
          :path="item"
        >
          <n-select
            v-if="modelFields[item].inputType == 'select'"
            v-model:value="model[item]"
            :placeholder="modelFields[item].label"
            :options="modelFields[item].options"
          />

          <n-input
            v-if="modelFields[item].inputType == 'input'"
            v-model:value="model[item]"
            :placeholder="modelFields[item].label"
          />
        </n-form-item-gi>

        <n-gi :span="24">
          <div style="display: flex; justify-content: space-between">
            <n-button type="secondary" ghost round @click="router.go(-1)">
              Back
            </n-button>

            <n-button
              type="primary"
              ghost
              round
              @click="handleValidateButtonClick"
            >
              Submit
            </n-button>
          </div>
        </n-gi>
      </n-grid>
    </n-form>
  </n-space>
</template>

<script setup>
import { ref, h, onMounted } from "vue";
import {
  NSpace,
  NSelect,
  NInput,
  NForm,
  NButton,
  NFormItemGi,
  NGi,
  NGrid,
  NH3,
} from "naive-ui";

import { useRouter } from "vue-router";

const router = useRouter();

const currentTrack = ref({});
const rules = ref({
  track: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },
  type: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  adDuration: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  adStream: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  duration: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  start: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  end: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  description: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  download: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  downloadDescription: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  intro: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  speaker: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  speakerCompany: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  speakerTitle: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  sponsor: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  stream: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  title: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },
});
const model = ref({});
const modelFields = ref({
  track: {
    value: null,
    inputType: "select",
    label: "Track",
    options: [
      {
        label: "Sales",
        value: "Sales",
        disable: false,
      },
      {
        label: "label2",
        value: "value2",
      },
    ],
  },
  type: {
    value: null,
    inputType: "select",
    label: "Type",
    options: [
      {
        label: "Session",
        value: "Session",
      },
      {
        label: "label2",
        value: "value2",
      },
    ],
  },

  adDuration: {
    value: null,
    inputType: "input",
    label: "Ad Duration",
  },

  adStream: {
    value: null,
    inputType: "input",
    label: "Ad Stream",
  },

  duration: {
    value: null,
    inputType: "input",
    label: "Duration",
  },

  start: {
    value: null,
    inputType: "input",
    label: "Start",
  },

  end: {
    value: null,
    inputType: "input",
    label: "End",
  },

  description: {
    value: null,
    inputType: "input",
    label: "Description",
  },

  download: {
    value: null,
    inputType: "input",
    label: "Download",
  },

  downloadDescription: {
    value: null,
    inputType: "input",
    label: "Download Description",
  },

  intro: {
    value: null,
    inputType: "input",
    label: "Intro",
  },

  speaker: {
    value: null,
    inputType: "input",
    label: "Speaker",
  },

  speakerCompany: {
    value: null,
    inputType: "input",
    label: "Speaker Company",
  },

  speakerTitle: {
    value: null,
    inputType: "input",
    label: "Speaker Title",
  },

  sponsor: {
    value: null,
    inputType: "input",
    label: "Sponsor",
  },

  stream: {
    value: null,
    inputType: "input",
    label: "Stream",
  },

  title: {
    value: null,
    inputType: "input",
    label: "Title",
  },
});

const formRef = ref(null);

onMounted(() => {
  currentTrack.value = router.currentRoute.value.query;
  for (let item in currentTrack.value) {
    model.value[item] = currentTrack.value[item];
  }
});

const handleValidateButtonClick = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      alert("Valid");
    } else {
      alert("Invalid");
    }
  });
};
</script>

<style scoped></style>
