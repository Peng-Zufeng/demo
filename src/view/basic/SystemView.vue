<template>
  <div>
    <v-form ref="form"  @submit="submit">
      <v-form-item label="System Info" style="color:red; font-weight:bold;"></v-form-item>
      <v-form-item label="Firmware Version">
        {{ruleForm.FirmwareVersion}}
      </v-form-item>
      <v-form-item label="Hardware Version">
        {{ruleForm.HardwareVersion}}
      </v-form-item>
      <v-form-item label="MAC Address">
        {{ruleForm.MACAddress}}
      </v-form-item>
      <v-form-item label="Management VLAN" prop="index">
        <v-select name="limit" v-model="ruleForm.downLimit" :options="options"></v-select>
      </v-form-item>
      <v-form-item label="Device Name">
        {{ruleForm.DeviceName}}
      </v-form-item>
      <v-form-item label="DHCP Client">
        <v-switch name="pn" v-model="ruleForm.on"></v-switch>
      </v-form-item>
      <v-form-item label="IP Address" prop="on">
        <v-input name="ssid" v-model="ruleForm.ipAddress"></v-input>
      </v-form-item>
      <v-form-item label="Subnet Mask" prop="downLimit">
        <v-input name="ssid" v-model="ruleForm.SubnetMask"></v-input>
      </v-form-item>
      <v-form-item label="Gateway" :required="false">
        <v-input name="ssid" v-model="ruleForm.Gateway"></v-input>
      </v-form-item>
      <v-form-item label="Auto DNS" :required="false">
        <v-switch name="pn" v-model="ruleForm.on"></v-switch>
      </v-form-item>
      <v-form-item label="Primary DNS" :required="false">
        <v-input name="ssid" v-model="ruleForm.PrimaryDNS"></v-input>
      </v-form-item>
      <v-form-item label="Secondary DNS" >
        <v-input name="ssid" v-model="ruleForm.SecondaryDNS"></v-input>
      </v-form-item>
      <v-form-item label="Cloud Management">
        {{ruleForm.CloudManagement}}
      </v-form-item>
      <v-form-item>
        <v-button name="ok" type="primary" @click="submitForm">Save</v-button>
      </v-form-item>
    </v-form>
    <v-dialog
      name="basic"
      v-model="showDialog"
      :show-close="showButton"
      :show-confirm="showButton"
      :show-cancel="showButton"
      :title="dialogTitle"
      append-to-body
    >
      Saving configurations…After completion, you will be redirected to the new IP address
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        FirmwareVersion: "voluptat",
        HardwareVersion: "id Duis",
        MACAddress: "A4:88:BA:2B:B9:15",
        DeviceName: "veli",
        CloudManagement: "Disconnected",
        downLimit: 1,
        ipAddress:"192.168.0.11",
        SubnetMask:"255.255.255.0",
        Gateway: "192.168.0.1",
        PrimaryDNS:"203.0.50.46",
        SecondaryDNS:"73.141.167.27",
        on: true,
      },
      options: [
        {
          label: "1",
          value: 1,
        },
        {
          label: "2",
          value: 2,
        },
        {
          label: "3",
          value: 3,
        },
        {
          label: "4",
          value: 4,
        },
        {
          label: "10",
          value: 5,
        },
        {
          label: "20",
          value: 6,
        },
        {
          label: "99",
          value: 7,
        },
        {
          label: "100",
          value: 8,
        }
      ],
      checkboxOptions: [
        {
          label: "星期一",
          value: "1",
        },
        {
          label: "星期二",
          value: "2",
        },
        {
          label: "星期三",
          value: "3",
        },
        {
          label: "星期四",
          value: "4",
        },
        {
          label: "星期五",
          value: "5",
        },
        {
          label: "星期六",
          value: "6",
        },
        {
          label: "星期日",
          value: "7",
        },
      ],
      radioOptions: [
        {
          label: "加密",
          value: "aes",
        },
        {
          label: "不加密",
          value: "none",
        },
      ],
      showButton:false,
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
      this.$message.success("验证成功");
      console.log("submit data", data);
    },
    checkIp(ip) {
      let ipArr = ip.split(".");
      if (+ipArr[0] <= 193) {
        return "自定义验证说明";
      }
    },
    cancel() {},
  },
  watch: {},
};
</script>

<style scoped>

</style>