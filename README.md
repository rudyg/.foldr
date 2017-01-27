Install
============
• Step 1: Download latest version in your www directory (below command uses relative path)

`curl -L -o master.zip https://github.com/rudyg/.foldr/archive/master.zip && unzip master.zip -d . && mv .foldr-master/.[!.]* . && rm -r .foldr-master/ && rm master.zip && rm .gitignore`


• Step 2: Manually rename .foldr.htaccess, or copy content to your existing .htaccess file