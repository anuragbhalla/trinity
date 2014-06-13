exports.definition = {
    config: {
        columns: {
            commentId: "integer",
            commentText: "varchar",
            picture: "blob",
            workItemId: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "comments"
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

model = Alloy.M("comments", exports.definition, []);

collection = Alloy.C("comments", exports.definition, model);

exports.Model = model;

exports.Collection = collection;