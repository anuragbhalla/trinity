exports.definition = {
    config: {
        columns: {
            crewMemberId: "integer",
            Name: "varchar",
            phoneNumber: "varchar",
            password: "varchar",
            bizId: "integer",
            email: "varchar",
            isVerified: "boolean"
        },
        adapter: {
            type: "sql",
            collection_name: "crewMembers"
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

model = Alloy.M("crewMembers", exports.definition, []);

collection = Alloy.C("crewMembers", exports.definition, model);

exports.Model = model;

exports.Collection = collection;