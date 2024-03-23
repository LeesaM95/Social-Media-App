## Mongoose & Friends: Social Media App


## Description
This application is a social media-esque app run through Insomnia or other similar services to simulate how social network sites handle large amounts of data with speed and flexibility. The Mongoose Social Media App uses MongoDB, Mongoose, and Express.js to handle users, thoughts, and comments from other users quickly and efficiently. 


## Visuals
Below are several gifs that showcase how Insomnia is used to handle requests. 

**Getting Users and Thoughts Example**:
<video  src="https://github.com/LeesaM95/Social-Media-App/blob/main/Assets/videos/getthoughtsandusers.mov" title=""></video>

**Getting a Single User**:
<video  src="https://github.com/LeesaM95/Social-Media-App/blob/main/Assets/videos/getsingleuserexample.mov" title=""></video>

**Getting a Single Thought**:
<video src="https://github.com/LeesaM95/Social-Media-App/blob/main/Assets/videos/getsinglethoughtexample.mov" title="Title"></video>

**Adding a User Example**:
<video src="https://github.com/LeesaM95/Social-Media-App/blob/main/Assets/videos/postuserexample.mov" title="Title"></video>

**Adding a Thought Example**:
<video src="https://github.com/LeesaM95/Social-Media-App/blob/main/Assets/videos/createthoughtexample.mp4" title="Title"></video>

**Deleting a User Example**:
<video src="https://github.com/LeesaM95/Social-Media-App/blob/main/Assets/videos/deleteuserexample.mp4" title="Title"></video>

**Adding a Friend Example**:
<video src="[https://github.com/LeesaM95/Social-Media-App/blob/main/Assets/videos/addfriendexample.mp4](https://github.com/LeesaM95/Social-Media-App/assets/146777629/eed7f4fb-0967-4036-a452-21917541d639)" title="Title"></video>
((My Examples seem to be too large and won't render on my readme. I apologize for that)).

## Installation
This Application runs through Insomnia, an API testing tool that supports simple API requests, environment variables, request chaining, and powerful plugins. However, other API testing tools such as Postman will also work. These are a must to replicate the same data. 

The Mongoose Social Media App also uses express.js and node, so an `npm install` and an `npm run start` will be necessary for the program to run in the API testing tool of your choice. 

Once it's running, you'll have to go to `Port 3001` to see anything, and once there you'll need to make sure that you type in `http://localhost:3001/api` and then specify the rest of the routes when looking through the routes folder.

Once that's all set, you'll be able to go through and replicate everything!

## Usage
Mongooose & Friends runs as a faux social media app to demonstrate how social media networks handle user data. When open in Insomnia, programmers can simulate retrieving users and thoughts, adding and deleting users and thoughts, and also adding and deleting friends of the users. 

> **Retrieving Users** - `http://localhost:3001/api/users`
> **Retrieving Thoughts** - `http://localhost:3001/api/thoughts`
> **Retrieving a Single User** - `http://localhost:3001/api/users/:userId`
> **Retrieving a Single Thought** - `http://localhost:3001/api/thoughts/:thoughtId`
> **Adding a User** - `http://localhost:3001/api/users` - POST
                  - ``{"username": "[Username]",
		                  "email": "[Email]",
		                  "thoughts": [],
		                  "friends": [],
		                  "__V": 0,
		                  "friendCount": 0
	                    }``
> **Adding a Thought** - `http://localhost:3001/api/thoughts` - POST
                     - ``{"_id": "[User Id from /api/users]",
                          "thoughtText": "[Whatever text you want here]",
                          "username": "[ username ]",
                          "reactions": [
                              {
                                "_id": "[User Id]",
				                        "reactionBody": "[ Text here]",
				                        "username": "[ username ]",
				                        "createdAt": "[Date (I just right-clicked the JSON terminal and clicked on Timestamp -> ISO-8601 for the timestamp)]"
                              }
                          ],
                          "__v": 0,
		                      "createdAt": "[ Same thing as above ]"
	                      }``
> **Deleting a User** - `http://localhost:3001/api/users/:userID` - DELETE
> **Deleting a Thought** - `http://localhost:3001/api/thoughts/thoughtID` - DELETE

> **Adding a Friend** - `http://localhost:3001/api/users/:userId/friends` - POST
                    - ``{"username": "[Username]",
		                  "email": "[Email]",
		                  "thoughts": [],
		                  "friends": ["(a different User Id) - more can be added to the array with commas", "like this"],
		                  "__V": 0,
		                  "friendCount": 0
	                    }``
> **Removing a Friend**: Not Applicable at the moment. It will be though. 

## Support
If you're having any trouble at all, feel free to find me on GitHub, or via my email `leesamarie95@gmail.com`. I'll do my best to answer any questions you have. If you can't get a hold of me for some reason, Stack Overflow, the GitHub Forums, or other coding forums may have the answers you're looking for as well.

## Roadmap
In the future, I would very much like to get my 'remove a friend' to work, as well as use the basis of this information to maybe play with creating a small social media site with login/logout/sign-up capabilities, photo and video sharing, and an emphasis on artists of all kind. I'd like to make Mongoose & Friends a place where their art is encrypted and protected the moment they join. 

## Contributing
I'm more than happy to have contributions! I'd be eager for help when it comes to fixing the 'removing a friend' issue, as well as structuring, design, and encryption of the site itself. 

Everything you need to know to get started with the code is up above in #Installation, so feel free to check that out! 

## Authors and acknowledgment
I'd like to thank my tutors for their wonderful assistance, my teachers for their patience, and all the repositories on GitHub who have already done this project. Seeing how things were structured really helped me figure out how I was going to do the same. 

## License
MIT License

Copyright (c) 2023 LeesaM95

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

## Project status
I frankly, do not have the time to fix my minor errors at the moment, as I have several other projects I need to submit within the month, so this will be on the backburner for time being.
