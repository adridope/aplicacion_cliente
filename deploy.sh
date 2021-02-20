#!/bin/bash

npm run build
scp -r -P 443 dist/* deploy-customer@www.g03.batoilogic.es:/var/www/html/002-www