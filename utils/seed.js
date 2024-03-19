const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { usernames, possibleThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }
    
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }
  
    const users = usernames;
    const thoughts = possibleThoughts;
  
    for (let i = 0; i < 20; i++) {
      const username = usernames;
  
      username.push({
       username: Math.floor(Math.random() * (99 - 18 + 1) + 18),
      });
    }
  
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);
  
    // loop through the saved thoughts, for each thought we need to generate a thought response and insert the thought responses
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
  });
  