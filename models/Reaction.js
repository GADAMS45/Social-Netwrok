const { Schema, Types } = require('mongoose');
const dayjs = require ("dayjs")


const reactionSchema = new Schema(
  {
    reactionId: {
      type:Schema.Types.ObjectId,
      default: new Types.ObjectId(),
    },
    
    reactionBody: {
      type: String,
      required: true,
      minLength:1,
      maxLength:280
    },
    
    createdAt: {
      type: Date,
      default: Date.now,
      get: function(date){
return dayjs(date).format("MM/DD/YYYY")
      }

    },
    username: {
      type: String,
      required: true,
    },
    


   
  },
  {
    toJSON: {
      virtuals: true,
      getters:true
    },
    id: false,
  }
);


module.exports = reactionSchema;