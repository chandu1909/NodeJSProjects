var mongoose = require('mongoose');
var Schema = mongoose.schema;

var TaskSchema = new mongoose.Schema({
   name:{
       type: String,
       required: 'Kindly Enter the name of the task'
   },
    created_date:{
       type : Date,
        default: Date.now()
    },
    status:{
       type: [{
           type: String,
           enum:['pending','ongoing','completed']
       }],
        default:['pending']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);