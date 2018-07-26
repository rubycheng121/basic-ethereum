pragma solidity ^0.4.22;

contract myFirstContract {
    /* define variable */
    int myNumber;
    string myName;

    /* this runs when the contract is executed */
    constructor(string name) public {
        myName = name;
    }

    /*  function */
    function setNumber(int newNumber) public returns (bool) {
        myNumber=newNumber;
        return true;
    }

    function getMyName() public constant returns (string) {
        return myName;
    }

    function getNumber() public constant returns (int) {
        return myNumber;
    }
}
