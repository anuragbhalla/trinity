function Controller() {
    function __alloyId7(e) {
        if (e && e.fromAdapter) return;
        __alloyId7.opts || {};
        var models = __alloyId6.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = {};
            var __alloyId5 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId3.__transform["userType"] ? __alloyId3.__transform["userType"] : __alloyId3.get("userType"),
                user: "undefined" != typeof __alloyId3.__transform["userType"] ? __alloyId3.__transform["userType"] : __alloyId3.get("userType")
            });
            rows.push(__alloyId5);
        }
        $.__views.__alloyId2.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("userTypes");
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId2 = Ti.UI.createTableView({
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    var __alloyId6 = Alloy.Collections["userTypes"] || userTypes;
    __alloyId6.on("fetch destroy change add remove reset", __alloyId7);
    exports.destroy = function() {
        __alloyId6.off("fetch destroy change add remove reset", __alloyId7);
    };
    _.extend($, $.__views);
    var userTypes = Alloy.Collections.userTypes;
    Alloy.Collections.biz;
    Alloy.Collections.customers;
    Alloy.Collections.customers;
    Alloy.Collections.workItems;
    Alloy.Collections.comments;
    var userType = Alloy.createModel("userTypes", {
        userTypeId: "1",
        userType: "biz"
    });
    userTypes.add(userType);
    userType.save();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;