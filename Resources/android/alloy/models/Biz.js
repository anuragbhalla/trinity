exports.definition = {
    config: {
        columns: {
            bizId: "integer AUTOINCREMENT",
            bizName: "varchar",
            properietorName: "varchar",
            phoneNumber: "varchar",
            password: "varchar",
            email: "varchar",
            logo: "blob",
            membershipPlan: "varchar",
            isVerified: "boolean"
        },
        adapter: {
            type: "sql",
            collection_name: "biz"
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

model = Alloy.M("biz", exports.definition, []);

collection = Alloy.C("biz", exports.definition, model);

exports.Model = model;

exports.Collection = collection;