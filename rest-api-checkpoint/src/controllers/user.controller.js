const res = require('express/lib/response');
const User = require('../models/User')


class UserController {
    static getAll = async (req, res) => {
        try {
            const user = await User.find()

            return res.status(200).json(user)
            
        } catch (error) {
            res.status(500).json('No user in the database') 
        }
    }
    
    static create = async (req, res) => {
        const { maidenName, firstName, lastName, age, profession} = req.body

        const user = await User.create({
           maidenName,
           firstName,
           lastName,
           age,
           profession 
        })
    }

    static update = async (req, res) => {
       try {
        const { id } = req.params
        const { maidenName, firstName, lastName, age, profession} = req.body

        if(!id){
            return res.status(404).json('User not found')
        }

        const user = await User.findByIdAndUpdate({_id : id } )
        const updatedUser = Object.assign(user, req.body)

        updatedUser.save()

        res.status(200).json(updatedUser)
       } catch (error) {
        res.status(500).json('Server error')
       }
    }
   
}

module.exports = UserController