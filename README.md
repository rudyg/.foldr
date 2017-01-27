What is it ?
============
.foldr is a little project containing some Apache directives to customize your default Directory Listing. Now, navigating through your webserver is more pleasant and customisable.


Installation
============
• Step 1: Log into your server using SSH, go to your www directory and install the latest version from Github, using the command below:

`curl -L -o master.zip https://github.com/rudyg/.foldr/archive/master.zip && unzip master.zip -d . && mv .foldr-master/.[!.]* . && rm -r .foldr-master/ && rm master.zip && rm .gitignore`


• Step 2: Manually rename .foldr.htaccess, or copy its content to your existing .htaccess file

• Step 3: Voilà! (for default install)


Customization
============
Now you can (almost) fully customize your Apache Directory Listing Header, Footer, Icons & more!

Default CSS & JS files are compiled with GULP. Clone the GIT repository locally & find out more using gulpfile.js