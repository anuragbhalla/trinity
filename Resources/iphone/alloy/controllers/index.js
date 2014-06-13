function Controller() {
    function __alloyId8(e) {
        if (e && e.fromAdapter) return;
        __alloyId8.opts || {};
        var models = __alloyId7.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId4 = models[i];
            __alloyId4.__transform = {};
            var __alloyId6 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId4.__transform["userType"] ? __alloyId4.__transform["userType"] : __alloyId4.get("userType"),
                userTypeId: "undefined" != typeof __alloyId4.__transform["userTypeId"] ? __alloyId4.__transform["userTypeId"] : __alloyId4.get("userTypeId"),
                userType: "undefined" != typeof __alloyId4.__transform["userType"] ? __alloyId4.__transform["userType"] : __alloyId4.get("userType")
            });
            rows.push(__alloyId6);
            showTask ? __alloyId6.addEventListener("click", showTask) : __defers["__alloyId6!click!showTask"] = true;
        }
        $.__views.__alloyId3.setData(rows);
    }
    function showTask(event) {
        var selectedTask = event.source;
        Ti.API.log("Here - " + selectedTask.userTypeId);
        var args = {
            userTypeId: selectedTask.userTypeId,
            userType: selectedTask.userType
        };
        var taskView = Alloy.createController("taskList", args).getView();
        $.navGroupWin.openWindow(taskView);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("userTypes");
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "__alloyId2"
    });
    $.__views.__alloyId3 = Ti.UI.createTableView({
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    var __alloyId7 = Alloy.Collections["userTypes"] || userTypes;
    __alloyId7.on("fetch destroy change add remove reset", __alloyId8);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId2,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {
        __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
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
    $.navGroupWin.open();
    __defers["__alloyId6!click!showTask"] && __alloyId6.addEventListener("click", showTask);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;