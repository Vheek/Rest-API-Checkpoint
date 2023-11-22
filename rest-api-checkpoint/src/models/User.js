const { Schema, model } = require('mongoose')


const userSchema = new Schema(
    {
        maidenName: {
            type: String,
            required: true,
            trim: true
        }, 
        firstName: {
            type: String,
            required: true
        }, 
        lastName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true,
            validator: {
                validate: v => v >= 18,
                message: props => `${props.value} is less than required age`
            }
        },
        profession: {
            type: String,
        }
    },
    {
        timeStamps: true
    }
)

const User = model('Post', userSchema)

module.exports = User