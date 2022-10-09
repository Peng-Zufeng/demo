<template>
    <div>
        <v-form ref="form" @submit="submit">
            <v-form-item label="User Configuration" style="color:red; font-weight:bold;"></v-form-item>
            <v-form-item label="User Name">{{ruleForm.userName}}</v-form-item>
            <v-form-item label="Old Password" prop="oldPwd" remark="This field is required">
                <v-input type="password" name="oldPwd" v-model="ruleForm.oldPwd" show-password/>
            </v-form-item>
            <v-form-item label="New Password" prop="newPwd" remark="This field is required">
                <v-input type="password" name="newPwd" v-model="ruleForm.newPwd" show-password/>
            </v-form-item>
            <v-form-item label="Confirm Password" prop="conPwd" remark="This field is required">
                <v-input type="password" name="conPwd" v-model="ruleForm.conPwd" show-password/>
            </v-form-item>
            <v-form-item>
                <v-button name="ok" type="primary" @click="submitForm">Save</v-button>
            </v-form-item>
        </v-form>
    </div>
</template>

<script>
export default {
    data() {
        this.setUrl="setUserInfo";
        return{
            ruleForm: {
                userName: "admin",
                oldPwd: "",
                newPwd: "",
                conPwd: ""
            }
        }
    },
    methods: {
        submitForm(){
            this.$refs.form.submitForm();
        },
        submit(data){
            if(this.beforeSubmit(data)){
                this.$setData(this.setUrl,data).then((res) => {
                    console.log(res);
                });
                this.$message.success("保存成功");
            }else{
                setTimeout(() => {
                    this.$message.error("保存失败");
                },1000);
            }
        },
        beforeSubmit(data) {
            if(data.newPwd == data.oldPwd){
                this.$message.error("New password must be different from the old password");
                return false;
            }
            if(data.newPwd != data.conPwd){
                this.$message.error("Password Mismacth");
                return false;
            }
            return true;
        }
    },
    mounted() {
    }
}
</script>