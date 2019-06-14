yarn build
cd build
echo '{}' > composer.json
echo '<?php include_once("index.html"); ?>' > index.php
cd ../
git add .
git commit -m "deploying heroku"
git subtree push --prefix build heroku master
