'use strict'

//const Web3 = require('web3')
const path = require('path')
const fs = require('fs')
const Web3 = require('web3')

let contractName = 'myFirstContract'
let myName = 'RubyCheng'
let gasEstimate = 44444444
const provider = "http://localhost:8545"
const web3 = new Web3(new Web3.providers.HttpProvider(provider))

const contract_abi = JSON.parse(fs.readFileSync(path.resolve(__dirname, './Contract', ':' + contractName + '.json')))
const contract_bytecode = '0x' + fs.readFileSync(path.resolve(__dirname, './Contract', ':' + contractName + '.bin')).toString()


let MyContract = web3.eth.contract(contract_abi);

var myContractReturned = MyContract.new(myName, {
  from: web3.eth.coinbase,
  data: contract_bytecode,
  gas: gasEstimate
}, function(err, myContract) {
  if (!err) {
    if (!myContract.address) {
      console.log('myContract.transactionHash:');
      console.log(myContract.transactionHash)

    } else {
      console.log('myContract.address');
      console.log(myContract.address) // the contract address
    }
  }
});
