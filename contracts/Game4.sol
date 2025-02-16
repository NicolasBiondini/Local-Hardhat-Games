import "hardhat/console.sol";

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Game4 {
  uint8 y = 210;

  event Winner(address winner);

  function win(uint8 x) public {
    console.log(x);
    unchecked {
        uint8 sum = x + y;
        console.log(sum);
        require(sum == 10, "Incorrect argument passed in!");
    }
    emit Winner(msg.sender);
  }
}