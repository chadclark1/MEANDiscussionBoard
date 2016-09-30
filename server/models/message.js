console.log("Message model loaded");

var mongoose       = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator');
    Schema         = mongoose.Schema,
    messageSchema = new Schema({

      user: {
        type: String,
        required: 'A username is required',
      },
      message: {
        type: String,
        required: 'A message is required',
        
      },
      created_at : {
        type: Date, 
        required: true, 
        default: Date.now 
    }
      
    });

messageSchema.plugin(uniqueValidator);

// userSchema.virtual( 'name.full' ).get( function () {
//   return this.name.first + " " + this.name.last;
//   // return `${ this.name.first } ${ this.name.last}`;
// });



var Message = mongoose.model('Message', messageSchema);