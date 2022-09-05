const valid = {
    //函数形式
    num: function(str, min, max) {
        if (!/^([-0-9])?([0-9]+)$/.test(str)) {
        return "输入值必须为整数";
        }
        if (typeof min === "number" && typeof max === "number") {
        if (parseInt(str, 10) < min || parseInt(str, 10) > max) {
            return `有效输入范围：${min} - ${max}`;
        }
        }
    },
    //对象形式
    ssid: {
        all: function(str) {
        let ret = this.specific(str);

        if (ret) {
            return ret;
        }
        },

        specific: function(str) {
        if(str.length > 32) {
            return "请输入正确的ssid";
        }
        }
    }
    };
export { valid };