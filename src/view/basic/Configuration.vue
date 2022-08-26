<template>
  <div>
    <div class="backUp">
      <h1 class="title">Back Up System Configurations</h1>
      <p class="text">Back up current configurations in a local computer or in IP-COM ProFi Cloud.</p>
      <section class="button-content">
        <div class="button-group">
          <v-button type="primary" name="btn-local" @click="handleLocalButtonClick">Local Backup</v-button>
          <v-button type="primary" name="btn-cloud" @click="handleCloudButtonClick">Cloud Backup</v-button>
        </div>
      </section>
    </div>
    <div class="import">
      <h1 class="title">Import Configuration File</h1>
      <p class="text">Select a backup file and import configurations into the switch.</p>
      <v-upload
          action="/cgi-bin/upload"
          ref="upload"
          name="upload"
          :on-change="changeCallBack"
          ></v-upload>
      <section class="button-content">
        <v-button type="primary" name="btn-import">Import</v-button>
      </section>
    </div>
    <div class="localDialog">
      <v-dialog
        name="basic"
        v-model="showLocalDialog"
        :title="dialogTitle"
        :close-on-click-modal="closeOnClickModal"
        :modal="true"
        @confirm="handleConfirm"
        @open="handleOpen"
        @after-close="handleAfterClose"
        @cancel="handleCancel"
        append-to-body
      >
        Start to export the configuration file?
      </v-dialog>
    </div>
    <div class="cloudDialog">
      <v-dialog
        name="basic"
        v-model="showCloudDialog"
        :title="dialogTitle"
        :close-on-click-modal="closeOnClickModal"
        :modal="true"
        @confirm="handleConfirm"
        @open="handleOpen"
        @after-close="handleAfterClose"
        @cancel="handleCancel"
        append-to-body
      >
        Start to upload configurations to ProFi Cloud?
      </v-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        showLocalDialog: false,
        showCloudDialog: false,
        closeOnClickModal: true,
        dialogTitle: "Note",
      }
    },
    methods: {
      handleLocalButtonClick() {
        this.showLocalDialog = !this.showLocalDialog;
      },
      handleCloudButtonClick() {
        this.showCloudDialog = !this.showCloudDialog;
      },
      handleConfirm() {
        console.log(`Emit CONFIRM event, timestamp: ${new Date().getTime()}`);
        this.handleButtonClick();
      },
      handleOpen() {
        console.log(`Emit OPEN event, timestamp: ${new Date().getTime()}`);
      },
      handleAfterClose() {
        console.log(
          `Emit AFTER-CLOSE event, timestamp: ${new Date().getTime()}`
        );
      },
      handleCancel() {
        console.log(`Emit CANCEL event, timestamp: ${new Date().getTime()}`);
      },
      handleDialogInputClick() {
        this.showInputDialog = !this.showInputDialog;
      },
      handleBigClick() {
        this.showBigDialog = !this.showBigDialog;
      },
      changeCallBack() {
        this.$refs.upload.submit();
      }
    }
  };
</script>

<style scoped>
* {
  margin-bottom: 15px;
}
.backUp {
  margin-bottom: 20px;
}
h1{
  font-weight: 700;
  color: red;
}
</style>