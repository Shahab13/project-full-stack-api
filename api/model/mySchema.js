var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema(
  {
    //_id: Schema.Types.ObjectId,

    Unit: [
      {
        kind: { type: String, required: true },
        floor: { type: String, required: true },
        special_monthly_offer: { type: Number }
      }
    ],
    Company: [
      {
        name: { type: String, required: true },
        contact_email: { type: String, required: true }
      }
    ],
    Employee: [
      {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        preferred_name: String,
        position: String,
        birthday: Date,
        email: String
      }
    ]
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

module.exports = mongoose.model("Myschema", schema);
