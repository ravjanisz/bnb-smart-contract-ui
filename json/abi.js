const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int32",
				"name": "x",
				"type": "int32"
			},
			{
				"internalType": "int32",
				"name": "y",
				"type": "int32"
			},
			{
				"internalType": "uint256",
				"name": "animalId",
				"type": "uint256"
			}
		],
		"name": "catchAnimal",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "createAnimal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "int32",
						"name": "x",
						"type": "int32"
					},
					{
						"internalType": "int32",
						"name": "y",
						"type": "int32"
					}
				],
				"internalType": "struct AnimalExplorer.Coordinate[]",
				"name": "_coordinates",
				"type": "tuple[]"
			}
		],
		"name": "createArea",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "drawAnimal",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "animalId",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "areaId",
								"type": "uint256"
							},
							{
								"components": [
									{
										"internalType": "int32",
										"name": "x",
										"type": "int32"
									},
									{
										"internalType": "int32",
										"name": "y",
										"type": "int32"
									}
								],
								"internalType": "struct AnimalExplorer.Coordinate[]",
								"name": "coordinates",
								"type": "tuple[]"
							}
						],
						"internalType": "struct AnimalExplorer.Area[]",
						"name": "occuranceAreas",
						"type": "tuple[]"
					}
				],
				"internalType": "struct AnimalExplorer.Animal",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "drawArea",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "areaId",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "int32",
								"name": "x",
								"type": "int32"
							},
							{
								"internalType": "int32",
								"name": "y",
								"type": "int32"
							}
						],
						"internalType": "struct AnimalExplorer.Coordinate[]",
						"name": "coordinates",
						"type": "tuple[]"
					}
				],
				"internalType": "struct AnimalExplorer.Area",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "drawFight",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "initialOwner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "Log",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "minNumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxNumber",
				"type": "uint256"
			}
		],
		"name": "random",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "randomNumber",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int32",
				"name": "x",
				"type": "int32"
			},
			{
				"internalType": "int32",
				"name": "y",
				"type": "int32"
			}
		],
		"name": "searchAnimal",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "areas",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "areaId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAnimalAll",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "animalId",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "areaId",
								"type": "uint256"
							},
							{
								"components": [
									{
										"internalType": "int32",
										"name": "x",
										"type": "int32"
									},
									{
										"internalType": "int32",
										"name": "y",
										"type": "int32"
									}
								],
								"internalType": "struct AnimalExplorer.Coordinate[]",
								"name": "coordinates",
								"type": "tuple[]"
							}
						],
						"internalType": "struct AnimalExplorer.Area[]",
						"name": "occuranceAreas",
						"type": "tuple[]"
					}
				],
				"internalType": "struct AnimalExplorer.Animal[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "animalId",
				"type": "uint256"
			}
		],
		"name": "getAnimalById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "animalId",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "areaId",
								"type": "uint256"
							},
							{
								"components": [
									{
										"internalType": "int32",
										"name": "x",
										"type": "int32"
									},
									{
										"internalType": "int32",
										"name": "y",
										"type": "int32"
									}
								],
								"internalType": "struct AnimalExplorer.Coordinate[]",
								"name": "coordinates",
								"type": "tuple[]"
							}
						],
						"internalType": "struct AnimalExplorer.Area[]",
						"name": "occuranceAreas",
						"type": "tuple[]"
					}
				],
				"internalType": "struct AnimalExplorer.Animal",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAnimalCatchedStatus",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAnimalsInArea",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAreaAll",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "areaId",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "int32",
								"name": "x",
								"type": "int32"
							},
							{
								"internalType": "int32",
								"name": "y",
								"type": "int32"
							}
						],
						"internalType": "struct AnimalExplorer.Coordinate[]",
						"name": "coordinates",
						"type": "tuple[]"
					}
				],
				"internalType": "struct AnimalExplorer.Area[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "areaId",
				"type": "uint256"
			}
		],
		"name": "getAreaById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "areaId",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "int32",
								"name": "x",
								"type": "int32"
							},
							{
								"internalType": "int32",
								"name": "y",
								"type": "int32"
							}
						],
						"internalType": "struct AnimalExplorer.Coordinate[]",
						"name": "coordinates",
						"type": "tuple[]"
					}
				],
				"internalType": "struct AnimalExplorer.Area",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserAll",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "userId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "animalId",
								"type": "uint256"
							}
						],
						"internalType": "struct AnimalExplorer.CatchedAnimal[]",
						"name": "userAnimals",
						"type": "tuple[]"
					}
				],
				"internalType": "struct AnimalExplorer.User[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "userId",
				"type": "uint256"
			}
		],
		"name": "getUserById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "userId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "animalId",
								"type": "uint256"
							}
						],
						"internalType": "struct AnimalExplorer.CatchedAnimal[]",
						"name": "userAnimals",
						"type": "tuple[]"
					}
				],
				"internalType": "struct AnimalExplorer.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int32",
				"name": "x",
				"type": "int32"
			},
			{
				"internalType": "int32",
				"name": "y",
				"type": "int32"
			},
			{
				"components": [
					{
						"internalType": "int32",
						"name": "x",
						"type": "int32"
					},
					{
						"internalType": "int32",
						"name": "y",
						"type": "int32"
					}
				],
				"internalType": "struct AnimalExplorer.Coordinate[]",
				"name": "polygon",
				"type": "tuple[]"
			}
		],
		"name": "inPolygon",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "number",
				"type": "int256"
			}
		],
		"name": "intToString",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "animalId",
				"type": "uint256"
			}
		],
		"name": "isAnimalInArea",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int32",
				"name": "n1",
				"type": "int32"
			},
			{
				"internalType": "int32",
				"name": "n2",
				"type": "int32"
			}
		],
		"name": "max",
		"outputs": [
			{
				"internalType": "int32",
				"name": "",
				"type": "int32"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int32",
				"name": "n1",
				"type": "int32"
			},
			{
				"internalType": "int32",
				"name": "n2",
				"type": "int32"
			}
		],
		"name": "min",
		"outputs": [
			{
				"internalType": "int32",
				"name": "",
				"type": "int32"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
