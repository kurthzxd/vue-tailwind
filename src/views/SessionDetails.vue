<template>
  <n-space justify="center">
    <n-h3 justify="center">Edit Session</n-h3>
  </n-space>

  <n-space justify="center">
    <!-- :rules="model" blocker to fix -->
    <n-form
      ref="formRef"
      :model="model"
      label-placement="top"
      :label-width="160"
      :style="{
        maxWidth: '640px',
      }"
    >
      <n-grid :span="24" :x-gap="24">
        <n-form-item-gi
          v-for="(item, index) in Object.keys(model)"
          :key="index"
          :span="12"
          :label="model[item].label"
          :path="item"
        >
          <n-select
            v-if="model[item].inputType == 'select'"
            v-model:value="model[item].value"
            :placeholder="model[item].label"
            :options="model[item].options"
          />

          <n-input
            v-if="model[item].inputType == 'input'"
            v-model:value="model[item].value"
            :placeholder="model[item].label"
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

// const message = useMessage()
const router = useRouter();

const currentTrack = ref({});

const model = ref({
  track: {
    value: null,
    inputType: "select",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
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
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
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
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  adStream: {
    value: null,
    inputType: "input",
    label: "Ad Stream",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  duration: {
    value: null,
    inputType: "input",
    label: "Duration",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  start: {
    value: null,
    inputType: "input",
    label: "Start",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  end: {
    value: null,
    inputType: "input",
    label: "End",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  description: {
    value: null,
    inputType: "input",
    label: "Description",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  download: {
    value: null,
    inputType: "input",
    label: "Download",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  downloadDescription: {
    value: null,
    inputType: "input",
    label: "Download Description",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  intro: {
    value: null,
    inputType: "input",
    label: "Intro",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  speaker: {
    value: null,
    inputType: "input",
    label: "Speaker",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  speakerCompany: {
    value: null,
    inputType: "input",
    label: "Speaker Company",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  speakerTitle: {
    value: null,
    inputType: "input",
    label: "Speaker Title",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  sponsor: {
    value: null,
    inputType: "input",
    label: "Sponsor",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  stream: {
    value: null,
    inputType: "input",
    label: "Stream",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },

  title: {
    value: null,
    inputType: "input",
    label: "Title",
    required: true,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },
});

const formRef = ref(null);

onMounted(() => {
  currentTrack.value = router.currentRoute.value.query;
  for (let item in currentTrack.value) {
    model.value[item].value = currentTrack.value[item];
  }
});

const getData = (e) => {
  return Object.keys(e).map((emp) => {
    return { [emp]: e[emp].value };
  });
};

const handleValidateButtonClick = (e) => {

  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      //message.success("Valid");
      alert("Valid");
    } else {
      console.log(errors);
      alert("Invalid");
      //message.error("Invalid");
    }
  });
};
</script>

<style scoped></style>
