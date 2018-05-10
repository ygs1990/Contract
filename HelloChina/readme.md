## 1、安装ganache-cli和truffle
	npm install -g ganache-cli truffle

## 2、启动以太坊测试环境（若报错，检查相关环境变量的配置情况，本人在node根目录找到该模块并下执行了下列命令，问题解决）
	ganache-cli

## 3、新建项目目录，如：
	mkdir demo & cd demo

## 4、合约项目初始化
	truffle init
	// truffle所有命令可以通过执行以下命令获取：
		truffle

## 5、找到项目中的truffle.js文件，配置相应网络环境（否则编译将报错），脚本如：
	module.exports = {
	  networks: {
	        development: {
	            host: "localhost",
	            port: 8545,
	            network_id: "*" // 匹配任何network id
	         }
	    }
	};

## 6、创建合约
	truffle create contract contractName(这是合约名称)

## 7、编写合约，如HelloWorld.sol示例代码如下：
	pragma solidity ^0.4.4; // solidity编译版本

	contract HelloWorld { // 合约名称及方法
	  function sayHello() returns (string){
	    return ('Hello World');
	  }
	}

## 8、找到项目中的migrations目录，创建初始化合约JS文件，如HelloWorld内容如下：
	var HelloWorld = artifacts.require("./HelloWorld.sol");

	module.exports = function(deployer) {
	  deployer.deploy(HelloWorld);
	};
	
## 9、合约编译(编译后将在项目目录新增build文件夹)
	truffle compile

## 10、合约移植(此时可查看ganache-cli效果)
	truffle migrate
	// 该命令只执行新的移植脚本，否则不执行，可以使用选项：truffle migrate --reset来从头执行移植脚本。

## 11、合约交互
	先执行命令：truffle console
	然后在truffle(development)>中执行：
	HelloWorld.deployed().then(instance => contract = instance)
	之后再执行：contract.sayHello.call() // 此时会调用sayHello方法并返回'Hello World'

## 12、合约测试(需写测试代码)
	truffle test
