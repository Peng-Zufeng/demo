<template>
    <div>
        <div class="tips">
            802.1Q VLAN is disabled by default and the switch can transmit data carrying any VLAN tag. When enabled, it supports at most 16 VLAN IDs.
        </div>
        <div class="content">
            <p class="title">VLAN Management</p>
            <v-switch name="vlanEn" v-model="vlanEn"></v-switch>
            <p class="tips2">(*Enabling QVLAN will clear the current MAC address table.)</p>
            <v-form  v-show="vlanEn == '1'">
                <v-form-item label="Create VLAN" class="title"></v-form-item>
                <div class="tableButton">
                    <v-button type="primary" name="btn-add" @click="addVlan">Add</v-button>
                    <v-button type="primary" name="btn-del" @click="delVlan">Delete</v-button>
                </div>
                <v-table name="vlanTable"
                        :data="vlanTableData"
                        :max-row="10"
                        row-key="vlan"
                        size="S"
                        :before-select-all="beforeSelectAll"
                        :selectData="selectData"
                        @selection-change="selectList"
                        >
                        <v-table-col type="selection"></v-table-col>
                        <v-table-col prop="vlan" label="VLAN ID" align="center"> </v-table-col>
                </v-table>
                <v-form-item label="Configure VLAN" class="title"></v-form-item>
                <div class="tableButton">
                    <v-button type="primary" name="btn-edit" @click="addVlan">Edit</v-button>
                </div>
                <v-table name="vlanTable2"
                        :data="vlanTable2"
                        :max-row="10"
                        row-key="vlan"
                        size="S"
                        :before-select-all="beforeSelectAll"
                        :selectData="selectData"
                        @selection-change="selectList"
                        >
                        <v-table-col prop="port" label="Port" align="center" :format="portText"> </v-table-col>
                        <v-table-col prop="type" label="Type" align="center" :format="typeText"> </v-table-col>
                        <v-table-col prop="pvid" label="PVID" align="center" :format="pvidText"> </v-table-col>
                        <v-table-col prop="tag" label="Tagged" align="center" :format="tagText"> </v-table-col>
                        <v-table-col prop="untag" label="Untagged" align="center" :format="untagText"> </v-table-col>
                </v-table>
            </v-form>
            <v-dialog
                name="dialog"
                v-model="showInputDialog"
                :title="dialogTitle"
                :close-on-click-modal="closeOnClickModal"
                :modal="true"
                @after-close="handleAfterClose"
                @confirm="handleConfirm"
                append-to-body
            >
                <v-form ref="form" :model="ruleForm">
                <v-form-item label="VLAN ID" prop="vlanId" description="(Range: 2 to 4094. Examples: 3,5,7 or 10-13)">
                    <v-input name="vlanId" v-model="ruleForm.vlanId"></v-input>
                </v-form-item>
                </v-form>
            </v-dialog>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        this.getUrl = "getVlanCfg";
        return {
            vlanEn: true,
            vlanTable: [],
            selectData: [],
            vlanTable2:[],
            showDialog: false,
            closeOnClickModal: true,
            dialogTitle: "Add VLAN ID",
            showInputDialog: false,
            dialogInput: "",
            selectVal: 1,
            ruleForm: {
                vlanId: "",
            },
        }
    },
    computed:{
        vlanTableData(){
            return Array.from(this.vlanTable,item=>{
                return {vlan : item}
            })
        }
    },
    methods: {
        getData(){
            this.$getData(this.getUrl).then(({vlanIdList,vlanCfgList}) => {
                this.vlanTable = vlanIdList;
                this.vlanTable2 = vlanCfgList;
                console.log(this.vlanTable2);
            })
        },
        portText(prop, rowData){
            return rowData[prop] || "STF"
        },
        typeText(prop, rowData){
            return rowData[prop]== ""? "--" : rowData[prop].replace(rowData[prop][0],rowData[prop][0].toUpperCase())
        },
        pvidText(prop, rowData){
            return rowData[prop]== ""? "--" : rowData[prop]
        },
        tagText(prop, rowData){
            return rowData[prop]== ""? "--" : rowData[prop]
        },
        untagText(prop, rowData){
            return rowData[prop]== ""? "--" : rowData[prop]
        },
        beforeSelectAll(val) {
            // this.selectData = this.table1.slice(0, 2);
            // console.log(val);
            return true;
        },
        selectList(list) {
            // console.log(list);
        },
        addVlan(){
            this.showInputDialog = !this.showInputDialog;
        },
        delVlan(){

        },
        handleConfirm() {
            console.log(`Emit CONFIRM event, timestamp: ${new Date().getTime()}`);
            this.showInputDialog = false;
        },
        handleAfterClose() {
            this.$message.success("保存成功");
        },
    },
    mounted(){
        this.getData();
    }
}
</script>

<style scoped>
.tips {
    background-color: #f2f2f2;
    border: 1px solid transparent;
    border-radius: 15px;
    padding: 10px 8px;
    margin-bottom: 10px ;
    font-size: 14px;
}
.tips2 {
    display: inline;
    margin-left: 10px;
    font-size: 14px;
    line-height: 32px;
}
.title {
    color: red;
    font-weight: bold;
    margin: 10px 0;
}
.tableButton {
    display: block;
    text-align: right;
    margin-bottom: 10px;
}
</style>