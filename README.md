# Technology Used
We will be using HTML, CSS and JavaScript to design the website to host the games.
# Games to test the soft skills
Problem Statement <br> : Design an interactive puzzle that can be solved on an online website.
The aim of the puzzle is to assess soft skills of the user such as perseverance, eye for detail etc.
The website contains an interactive puzzle , a treasure hunt containing riddles and puzzles 
The theme we are working with is Halloween.<br> The user has to solve the puzzle in order to get clues for the next riddle or puzzle which has to be solved by the user itself . <br> The first puzzle is -Crack the code<br>
The user has to find the correct code using the hints given. It will asses the users thinking and analysis capabilities <br>
Requirements:<br>
Clues : Five hints are given . Just like wordle stating if the entered input is two places correct or only one .<br>
Dead End:If the timer runs out and user is not able to guess the code .<br>
Solution : User finds the correct code by taking guesses and using the hints provided.<br>
Second puzzle : Guess the word <br>
It will be used to asses the soft skill critical thinking ability of the user and their perseverance to get to the right answer <br>
Clues : Three clues will be provided to the user in case they are not able to solve the riddle <br>
DeadEnd : Guesses the incorrect answer <br>
Solution : user finds the correct answer using the clues given to them <br>
Third Puzzle : Social Memory game <br>
The last and final puzzle is social memory game. The user has to remember the position of the objects then match them to the similar objects . Once all the objects are uncovered the game ends . This will assess the users soft skill of eye for detail and their memorising power.<br>
Clues : The user has to find the similar objects in order to move ahead <br>
DeadEnd :If the user doesn’t get the similar objects . The games reloads and the user goes back to the previous step.<br>
Solution : The user uncovers all the similar objects until no block is left .
# Technologies used for backend
In order to store data . We will collect user id , email and password from the user to sign them up to be able to play this game which will we be stored in the MongoDB cluster hosted publicly . 
From the collected data we will display the user dashboard , user leaderboard and the time they spent completing this game from which we can judge their time management and thinking skills .
For storing data we will be using MongoDB and Mongoose to form connection and sone APIs of NextJS
