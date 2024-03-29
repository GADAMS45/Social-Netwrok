const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();

      res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }

      res.json({
        user
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a new student
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a student and remove them from the course
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }

      res.json({ message: 'user successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate({
        _id: req.params.userId
      }, 
        req.body
      );

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }

      res.json({ message: 'user successfully updated' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate({
        _id: req.params.userId
      }, 
       {
        $addToSet: {
          friends: req.params.friendId
        }
       }
      );

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }

      res.json({ message: 'user successfully updated' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate({
        _id: req.params.userId
      }, 
      {
        $pull: {
          friends: req.params.friendId
        }
      }
      );

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }

      res.json({ message: 'user successfully updated' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
}
