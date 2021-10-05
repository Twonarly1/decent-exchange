# decent react.js exchange dapp.

terminal:
  node v12.22.6
  Truffle v5.3.8

open Ganache.

import the first two accounts from Ganache into your MetaMask wallet.

terminal:
  Git clone https://github.com/Twonarly1/decent-exchange
  
  cd decent-exchange

text editor.

  Create an .env file at the root directory, add the following:
  
      SKIP_PREFLIGHT_CHECK=true	
      
      PRIVATE_KEYS=“truffle_account_1,truffle_account_2”
      
      INFURA_API_KEY= api goes here

terminal:

    npm install
  
    Truffle migrate —reset (make sure ganache is running)
  
    truffle exec scripts/seed-exchange.js
  
    npm run start (ignore an initial error if it appears)
  
  browser:
  
    connect to MetaMask and manually connect to the current site.
