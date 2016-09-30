console.log("Topic model loaded");

var mongoose       = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator');
    Schema         = mongoose.Schema,
    topicSchema = new Schema({

      user: {
        type: String,
      },

      topic: {
        type: String,
        // trim: true,
        // unique: [true, "There is already a topic with that name"],
        required: 'A topic name is required',
        // validate: {
        //   validator: function( value ) {
        //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
        //   },
        //   message: "Your password must have at least 1 number, uppercase and special character"
        // }
      },

      description: {
        type: String,
      },

      category: {
        type: String,
      },

      date:{
        type: Date,
      },
      day: {
        type: Number,
      },
      month: {
        type: Number,
      },
      year: {
        type: Number,
      },
      
    });



topicSchema.plugin(uniqueValidator);

// userSchema.virtual( 'name.full' ).get( function () {
//   return this.name.first + " " + this.name.last;
//   // return `${ this.name.first } ${ this.name.last}`;
// });



var Topic = mongoose.model('Topic', topicSchema);