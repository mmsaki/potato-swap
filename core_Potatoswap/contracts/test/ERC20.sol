pragma solidity =0.5.16;

import '../PotatoswapERC20.sol';

contract ERC20 is PotatoswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
