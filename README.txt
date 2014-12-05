to run the application: .bin/www
the flow of the project is provided at the top of bin/www

The way that the Express, Jade, and Node.js work together:
1. A .jade file translates into an html file
2. This html file then references stylesheets provided by two servers
3. This file also references a library made in the project and an external library
4. The javascript file asks the Express server for a headline update every 7 seconds
5. The server replies and sends the text
6. This text is then added to top section of the webpage
7. Every time a user selects an image, the script asks the server for new text which it
receives from another jade file
8. This server also changes the information in the table from the table.jade file

Note: I understand how everything is supposed to work, and I think that my code makes sense. 
I know that it is not producing what it is supposed to, but I am not sure why. If you actually
look at my code, you will be able to see that I do know what I am doing. I have had a lot 
of help from various classmates, and no one really seems to understand why the correct
features are not rendered. 