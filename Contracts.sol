pragma solidity ^0.4.8;

contract myFirstContract {
    /* define variable */
    int myNumber;
    string myName;

    /* this runs when the contract is executed */
    function myFirstContract(string name) public {
        myName = name;
    }

    /*  function */
    function setNumber(int newNumber)  returns (bool) {
        myNumber=newNumber;
        return true;
    }

    function getMyName() constant returns (string) {
        return myName;
    }

    function getNumber() constant returns (int) {
        return myNumber;
    }
}
