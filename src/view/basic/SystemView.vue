<template>
  <div>
    <v-form ref="form" @submit="submit">
      <v-form-item label="System Info" style="color:red; font-weight:bold;"></v-form-item>
      <v-form-item label="Firmware Version">
        {{ruleForm.softV}}
      </v-form-item>
      <v-form-item label="Hardware Version">
        {{ruleForm.hardV}}
      </v-form-item>
      <v-form-item label="MAC Address">
        {{ruleForm.mac}}
      </v-form-item>
      <v-form-item label="Management VLAN" prop="vlanOpts">
        <v-select name="limit" v-model="ruleForm.vlan" :options="ruleForm.vlanOpts"></v-select>
      </v-form-item>
      <v-form-item label="Device Name">
        {{ruleForm.name}}
      </v-form-item>
      <v-form-item label="DHCP Client" prop="autoIp">
        <v-switch name="DHCPEN" v-model="ruleForm.autoIp" :on-value="1" :on-off="0"></v-switch>
      </v-form-item>
      <v-form-item label="IP Address" prop="ip" :disabled="changeDHCP">
        <v-input name="ssid" v-model="ruleForm.ip"></v-input>
      </v-form-item>
      <v-form-item label="Subnet Mask" prop="mask" :disabled="changeDHCP">
        <v-input name="ssid" v-model="ruleForm.mask"></v-input>
      </v-form-item>
      <v-form-item label="Gateway" prop="gateway" :disabled="changeDHCP">
        <v-input name="ssid" v-model="ruleForm.gateway"></v-input>
      </v-form-item>
      <v-form-item label="Auto DNS" prop="autoDns" :disabled="!changeDHCP">
        <v-switch name="AutoEN" v-model="ruleForm.autoDns" :on-value="1" :on-off="0"></v-switch>
      </v-form-item>
      <v-form-item label="Primary DNS" prop="preDns" :disabled="changeAuto">
        <v-input name="ssid" v-model="ruleForm.preDns"></v-input>
      </v-form-item>
      <v-form-item label="Secondary DNS" prop="secDns" :disabled="changeAuto">
        <v-input name="ssid" v-model="ruleForm.secDns"></v-input>
      </v-form-item>
      <v-form-item label="Cloud Management">
        {{ruleForm.ims}}
      </v-form-item>
      <v-form-item>
        <v-button name="ok" type="primary" @click="submitForm">Save</v-button>
      </v-form-item>
    </v-form>
    <v-dialog name="basic" v-model="showDialog" :show-close="showButton" :show-confirm="showButton" :show-cancel="showButton" :title="dialogTitle" append-to-body>
      Saving configurations???After completion, you will be redirected to the new IP address
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    this.getUrl = "getSysInfo";
    this.setUrl = "setSysInfo";
    return {
      ruleForm: {
        softV: "",
        hardV: "",
        mac: "",
        vlan: "",
        vlanOpts: [],
        name: "",
        autoIp: "0",
        ip: "",
        mask: "",
        gateway: "",
        autoDns: "0",
        preDns: "",
        secDns: "",
        ims: "",
      },
      showButton: false,
      showDialog: false,
      dialogTitle: "Note",
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.submitForm();
    },
    submit(data) {
      this.showDialog = !this.showDialog;
      this.$message.success("????????????");
      this.$setData(this.setUrl, data).then((res) => {
        console.log(data);
        console.log(res);
      });
      setTimeout(() => {
        this.showDialog = !this.showDialog;
      }, 3000);
    },
    cancel() {},
    getData() {
      this.$getData(this.getUrl).then((res) => {
        this.ruleForm = res;
        this.ruleForm.vlanOpts.sort((a, b) => a - b);
      });
    },
  },
  watch: {
    "ruleForm.autoIp": function (value) {
      if (value == 0) {
        this.ruleForm.autoDns = "0";
      }
    },
  },
  computed: {
    changeDHCP() {
      return this.ruleForm.autoIp == "1";
    },
    changeAuto() {
      return this.ruleForm.autoDns == "1";
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
</style>