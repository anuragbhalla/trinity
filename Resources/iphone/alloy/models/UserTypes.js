exports.definition = {
    config: {
        columns: {
            userTypeId: "INTEGER",
            userType: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "userTypes",
            idAttribute: "userTypeId"
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

model = Alloy.M("userTypes", exports.definition, []);

collection = Alloy.C("userTypes", exports.definition, model);

exports.Model = model;

exports.Collection = collection;