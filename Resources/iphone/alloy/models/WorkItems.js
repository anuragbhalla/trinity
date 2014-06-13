exports.definition = {
    config: {
        columns: {
            workItemId: "integer AUTOINCREMENT",
            title: "varchar",
            initiationDate: "datetime",
            isComplete: "boolean",
            customerId: "integer",
            bizId: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "workItems"
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

model = Alloy.M("workItems", exports.definition, []);

collection = Alloy.C("workItems", exports.definition, model);

exports.Model = model;

exports.Collection = collection;