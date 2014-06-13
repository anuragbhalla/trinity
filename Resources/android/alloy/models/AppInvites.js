exports.definition = {
    config: {
        columns: {
            appInviteId: "integer",
            fromBizId: "integer",
            toPhoneNumber: "varchar",
            toEmail: "varchar",
            inviteForUserType: "varchar"
        },
        adapter: {
            type: "sql",
            collection_name: "appInvites"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("appInvites", exports.definition, []);

collection = Alloy.C("appInvites", exports.definition, model);

exports.Model = model;

exports.Collection = collection;