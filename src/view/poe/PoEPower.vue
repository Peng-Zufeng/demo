<template>
    <div>
        <div class="poe">
            <h1>PoE Power</h1>
            <div class="form">
                <v-form>
                    <v-form-item label="PoE Consumption Power:">{{ruleForm.cousumPower}}</v-form-item>
                    <v-form-item label="PoE Remaining Power:">{{ruleForm.remainingPower}}</v-form-item>
                </v-form>
            </div>
        </div>
        <div class="config">
            <h1>PoE Port Configuration</h1>
            <v-button type="primary" name="btn-edit" @click="handleDialogInputClick">Edit</v-button>
            <div class="clearFix"></div>
            <div class="table">
                <v-table name="tbale" :data="table" size="S">
                    <v-table-col type="index" label="Port" align="center"> </v-table-col>
                    <v-table-col prop="status" label="PoE Status" align="center"> </v-table-col>
                    <v-table-col prop="power" label="Supplied Power [W]" align="center"></v-table-col>
                </v-table>
            </div>
        </div>
        <div class="editDialog">
            <v-dialog
                name="dialog2"
                v-model="showInputDialog"
                :title="dialogTitle"
                :close-on-click-modal="closeOnClickModal"
                :modal="true"
                @confirm="handleConfirm"
                @cancel="handleCancel"
                append-to-body
            >
                <v-form ref="form" :model="ruleDialogForm">
                    <v-form-item label="Select Port" prop="name">
                        <v-checkbox-group
                            is-select-all
                            name="check-g2"
                            select-text="All"
                            v-model="checked"
                            :options="options"
                            ></v-checkbox-group>
                    </v-form-item>
                    <v-form-item label="PoE Port Configuration" prop="hobit">
                        <v-select name="hobit" v-model="ruleDialogForm.hobit" :options="selectOptions"></v-select>
                    </v-form-item>
                </v-form>
            </v-dialog>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                cousumPower: '34.3 W',
                remainingPower: '22.4 W'
            },
            table: [
            {
                status: "--",
                power: '0.00',
            },
            {
                status: "Enable",
                power: '333',
            },
            {
                status: "Disable",
                power: '45.8',
            },
            {
                status: "Enable",
                power: '345.5',
            },
            {
                status: "Enable",
                power: '54',
            },
            {
                status: "Enable",
                power: '456.87',
            },
            {
                status: "Enable",
                power: '44t',
            },
            {
                index: "SPT",
                status: "Disable",
                power: '33',
            },
            ],
            closeOnClickModal: false,
            dialogTitle: "PoE Port Configuration",

            showInputDialog: false,
            dialogInput: "",
            selectVal: 1,
            ruleDialogForm: {
            name: "",
            hobit: 0
            },
            checked: [],
            options: [1,2,3,4,5,6,7,8],
            selectOptions:[
                {
                    label: "Enable",
                    value: 0
                },
                {
                    label: "Disable",
                    value: 1
                },
            ]
        }
    },
    methods: {
        handleConfirm() {
            console.log(`Emit CONFIRM event, timestamp: ${new Date().getTime()}`);
            this.showInputDialog = false;
            this.handleAfterClose();
        },
        handleCancel() {
            this.showInputDialog = false;
        },
        handleAfterClose() {
            this.$message.success("保存成功");
        },
        handleDialogInputClick() {
            this.showInputDialog = !this.showInputDialog;
        }
    }
}
</script>

<style scoped>
h1{
    margin-bottom: 10px;
    font-weight: 700;
    color: red;
}
button {
    margin-bottom: 5px;
    float: right;
}
.clearFix{
    clear: both;
}
</style>