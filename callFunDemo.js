'use strict'

const path = require('path')
const fs = require('fs')

const deploey = require('./deploeyContract.js')

const provider = "http://localhost:8545"

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider(provider))


let contractName = 'myFirstContract'
let myName = 'RubyCheng'

const abi = JSON.parse(fs.readFileSync(path.resolve(__dirname, './Contract', ':' + contractName + '.json')))

var MyContract = web3.eth.contract(abi);
var myContractInstance;
let myContractAddress;
deploey(contractName, myName)
  .then(address => {
    myContractAddress = address
    // initiate contract for an address
    myContractInstance = MyContract.at(myContractAddress);;

    var result = myContractInstance.getMyName.call()
    console.log('getMyName:');
    console.log(result);

  })
  .then(() => {

    myContractInstance.setNumber(100 ,{
      from: web3.eth.coinbase,
      gas: 44444444
    }, (err, txhash) => {
      if (err !== undefined && err !== null) {
        console.log(err);
      } else {

        console.log('txhash:');
        console.log(txhash);

        var result = myContractInstance.getNumber.call()
        console.log('getNumber:');
        console.log(result.toString());

      }
    })
  })
