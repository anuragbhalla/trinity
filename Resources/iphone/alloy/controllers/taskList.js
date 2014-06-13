function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "taskList";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.taskList = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "taskList"
    });
    $.__views.taskList && $.addTopLevelView($.__views.taskList);
    $.__views.__alloyId9 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId9"
    });
    $.__views.taskList.add($.__views.__alloyId9);
    $.__views.userType = Ti.UI.createLabel({
        font: {
            fontSize: "30"
        },
        left: "10",
        id: "userType"
    });
    $.__views.__alloyId9.add($.__views.userType);
    $.__views.userTypeId = Ti.UI.createLabel({
        font: {
            fontSize: "20"
        },
        left: "10",
        id: "userTypeId"
    });
    $.__views.__alloyId9.add($.__views.userTypeId);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.userType.text = args.userType || "Default taskId";
    $.userTypeId.text = args.userTypeId || "Default taskTitle";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;