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
        <v-switch name="DHCPEN" v-model="ruleForm.onDHCP" :on-value="1" :on-off="0"></v-switch>
      </v-form-item>
      <v-form-item label="IP Address" prop="on" :disabled="changeDHCP">
        <v-input name="ssid" v-model="ruleForm.ipAddress"></v-input>
      </v-form-item>
      <v-form-item label="Subnet Mask" prop="downLimit" :disabled="changeDHCP">
        <v-input name="ssid" v-model="ruleForm.SubnetMask"></v-input>
      </v-form-item>
      <v-form-item label="Gateway" :required="false" :disabled="changeDHCP">
        <v-input name="ssid" v-model="ruleForm.Gateway"></v-input>
      </v-form-item>
      <v-form-item label="Auto DNS" :required="false" :disabled="!changeDHCP" :on-value="1" :on-off="0">
        <v-switch name="AutoEN" v-model="ruleForm.onAuto"></v-switch>
      </v-form-item>
      <v-form-item label="Primary DNS" :required="false" :disabled="changeAuto">
        <v-input name="ssid" v-model="ruleForm.PrimaryDNS"></v-input>
      </v-form-item>
      <v-form-item label="Secondary DNS" :disabled="changeAuto">
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
        onDHCP: false,
        onAuto: false,
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
      setTimeout(()=>{
        this.showDialog = !this.showDialog;
      },3000)
    },
    cancel() {},
  },
  watch: {
    "ruleForm.onDHCP": function(value){
      if(value==0){
        this.ruleForm.onAuto = false;
      }
    }
  },
  computed: {
    changeDHCP(){
      return this.ruleForm.onDHCP == true;
    },
    changeAuto(){
      return this.ruleForm.onAuto == true;
    }
  }
};
</script>

<style scoped>

</style>