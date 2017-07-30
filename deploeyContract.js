'use strict'

module.exports = (contractName, myName) => {
  const path = require('path')
  const fs = require('fs')


  const provider = "http://localhost:8545"

  const Web3 = require('web3')
  const web3 = new Web3(new Web3.providers.HttpProvider(provider))

  const contract_abi = JSON.parse(fs.readFileSync(path.resolve(__dirname, './Contract', ':' + contractName + '.json')))
  const contract_bytecode = '0x' + fs.readFileSync(path.resolve(__dirname, './Contract', ':' + contractName + '.bin')).toString()


  let MyContract = web3.eth.contract(contract_abi);

  return (new Promise((res, rej) => {
    MyContract.new(myName, {
      from: web3.eth.coinbase,
      gas: 44444444,
      data: contract_bytecode
    }, (err, myContract) => {
      if (err) {
        return rej(err)
      }

      if (myContract.address !== undefined && myContract.address !== null) {
        //console.log('myContract_ADDRESS', myContract.address)
        return res(myContract.address)
      }
    })
  }))
}
