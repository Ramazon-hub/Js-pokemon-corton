var pokemons = [
	{
			"id": 1,
			"num": "001",
			"name": "Bulbasaur",
			"img": "http://www.serebii.net/pokemongo/pokemon/001.png",
			"type": [
					"Grass",
					"Poison"
			],
			"height": "0.71 m",
			"weight": "6.9 kg",
			"candy": "Bulbasaur Candy",
			"candy_count": 25,
			"egg": "2 km",
			"spawn_chance": 0.69,
			"avg_spawns": 69,
			"spawn_time": "20:00",
			"multipliers": [
					1.58
			],
			"weaknesses": [
					"Fire",
					"Ice",
					"Flying",
					"Psychic"
			],
			"next_evolution": [
					{
							"num": "002",
							"name": "Ivysaur"
					},
					{
							"num": "003",
							"name": "Venusaur"
					}
			],
			"birth_date": 539530445121
	},
	{
			"id": 2,
			"num": "002",
			"name": "Ivysaur",
			"img": "http://www.serebii.net/pokemongo/pokemon/002.png",
			"type": [
					"Grass",
					"Poison"
			],
			"height": "0.99 m",
			"weight": "13.0 kg",
			"candy": "Bulbasaur Candy",
			"candy_count": 100,
			"egg": "Not in Eggs",
			"spawn_chance": 0.042,
			"avg_spawns": 4.2,
			"spawn_time": "07:00",
			"multipliers": [
					1.2,
					1.6
			],
			"weaknesses": [
					"Fire",
					"Ice",
					"Flying",
					"Psychic"
			],
			"prev_evolution": [
					{
							"num": "001",
							"name": "Bulbasaur"
					}
			],
			"next_evolution": [
					{
							"num": "003",
							"name": "Venusaur"
					}
			],
			"birth_date": 515477292315
	},
	{
			"id": 3,
			"num": "003",
			"name": "Venusaur",
			"img": "http://www.serebii.net/pokemongo/pokemon/003.png",
			"type": [
					"Grass",
					"Poison"
			],
			"height": "2.01 m",
			"weight": "100.0 kg",
			"candy": "Bulbasaur Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.017,
			"avg_spawns": 1.7,
			"spawn_time": "11:30",
			"multipliers": null,
			"weaknesses": [
					"Fire",
					"Ice",
					"Flying",
					"Psychic"
			],
			"prev_evolution": [
					{
							"num": "001",
							"name": "Bulbasaur"
					},
					{
							"num": "002",
							"name": "Ivysaur"
					}
			],
			"birth_date": 882625047836
	},
	{
			"id": 4,
			"num": "004",
			"name": "Charmander",
			"img": "http://www.serebii.net/pokemongo/pokemon/004.png",
			"type": [
					"Fire"
			],
			"height": "0.61 m",
			"weight": "8.5 kg",
			"candy": "Charmander Candy",
			"candy_count": 25,
			"egg": "2 km",
			"spawn_chance": 0.253,
			"avg_spawns": 25.3,
			"spawn_time": "08:45",
			"multipliers": [
					1.65
			],
			"weaknesses": [
					"Water",
					"Ground",
					"Rock"
			],
			"next_evolution": [
					{
							"num": "005",
							"name": "Charmeleon"
					},
					{
							"num": "006",
							"name": "Charizard"
					}
			],
			"birth_date": 496152677162
	},
	{
			"id": 5,
			"num": "005",
			"name": "Charmeleon",
			"img": "http://www.serebii.net/pokemongo/pokemon/005.png",
			"type": [
					"Fire"
			],
			"height": "1.09 m",
			"weight": "19.0 kg",
			"candy": "Charmander Candy",
			"candy_count": 100,
			"egg": "Not in Eggs",
			"spawn_chance": 0.012,
			"avg_spawns": 1.2,
			"spawn_time": "19:00",
			"multipliers": [
					1.79
			],
			"weaknesses": [
					"Water",
					"Ground",
					"Rock"
			],
			"prev_evolution": [
					{
							"num": "004",
							"name": "Charmander"
					}
			],
			"next_evolution": [
					{
							"num": "006",
							"name": "Charizard"
					}
			],
			"birth_date": 1508948237097
	},
	{
			"id": 6,
			"num": "006",
			"name": "Charizard",
			"img": "http://www.serebii.net/pokemongo/pokemon/006.png",
			"type": [
					"Fire",
					"Flying"
			],
			"height": "1.70 m",
			"weight": "90.5 kg",
			"candy": "Charmander Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.0031,
			"avg_spawns": 0.31,
			"spawn_time": "13:34",
			"multipliers": null,
			"weaknesses": [
					"Water",
					"Electric",
					"Rock"
			],
			"prev_evolution": [
					{
							"num": "004",
							"name": "Charmander"
					},
					{
							"num": "005",
							"name": "Charmeleon"
					}
			],
			"birth_date": 791231580474
	},
	{
			"id": 7,
			"num": "007",
			"name": "Squirtle",
			"img": "http://www.serebii.net/pokemongo/pokemon/007.png",
			"type": [
					"Water"
			],
			"height": "0.51 m",
			"weight": "9.0 kg",
			"candy": "Squirtle Candy",
			"candy_count": 25,
			"egg": "2 km",
			"spawn_chance": 0.58,
			"avg_spawns": 58,
			"spawn_time": "04:25",
			"multipliers": [
					2.1
			],
			"weaknesses": [
					"Electric",
					"Grass"
			],
			"next_evolution": [
					{
							"num": "008",
							"name": "Wartortle"
					},
					{
							"num": "009",
							"name": "Blastoise"
					}
			],
			"birth_date": 57344721397
	},
	{
			"id": 8,
			"num": "008",
			"name": "Wartortle",
			"img": "http://www.serebii.net/pokemongo/pokemon/008.png",
			"type": [
					"Water"
			],
			"height": "0.99 m",
			"weight": "22.5 kg",
			"candy": "Squirtle Candy",
			"candy_count": 100,
			"egg": "Not in Eggs",
			"spawn_chance": 0.034,
			"avg_spawns": 3.4,
			"spawn_time": "07:02",
			"multipliers": [
					1.4
			],
			"weaknesses": [
					"Electric",
					"Grass"
			],
			"prev_evolution": [
					{
							"num": "007",
							"name": "Squirtle"
					}
			],
			"next_evolution": [
					{
							"num": "009",
							"name": "Blastoise"
					}
			],
			"birth_date": 1511033481350
	},
	{
			"id": 9,
			"num": "009",
			"name": "Blastoise",
			"img": "http://www.serebii.net/pokemongo/pokemon/009.png",
			"type": [
					"Water"
			],
			"height": "1.60 m",
			"weight": "85.5 kg",
			"candy": "Squirtle Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.0067,
			"avg_spawns": 0.67,
			"spawn_time": "00:06",
			"multipliers": null,
			"weaknesses": [
					"Electric",
					"Grass"
			],
			"prev_evolution": [
					{
							"num": "007",
							"name": "Squirtle"
					},
					{
							"num": "008",
							"name": "Wartortle"
					}
			],
			"birth_date": 1352598195513
	},
	{
			"id": 10,
			"num": "010",
			"name": "Caterpie",
			"img": "http://www.serebii.net/pokemongo/pokemon/010.png",
			"type": [
					"Bug"
			],
			"height": "0.30 m",
			"weight": "2.9 kg",
			"candy": "Caterpie Candy",
			"candy_count": 12,
			"egg": "2 km",
			"spawn_chance": 3.032,
			"avg_spawns": 303.2,
			"spawn_time": "16:35",
			"multipliers": [
					1.05
			],
			"weaknesses": [
					"Fire",
					"Flying",
					"Rock"
			],
			"next_evolution": [
					{
							"num": "011",
							"name": "Metapod"
					},
					{
							"num": "012",
							"name": "Butterfree"
					}
			],
			"birth_date": 1192894429468
	},
	{
			"id": 11,
			"num": "011",
			"name": "Metapod",
			"img": "http://www.serebii.net/pokemongo/pokemon/011.png",
			"type": [
					"Bug"
			],
			"height": "0.71 m",
			"weight": "9.9 kg",
			"candy": "Caterpie Candy",
			"candy_count": 50,
			"egg": "Not in Eggs",
			"spawn_chance": 0.187,
			"avg_spawns": 18.7,
			"spawn_time": "02:11",
			"multipliers": [
					3.55,
					3.79
			],
			"weaknesses": [
					"Fire",
					"Flying",
					"Rock"
			],
			"prev_evolution": [
					{
							"num": "010",
							"name": "Caterpie"
					}
			],
			"next_evolution": [
					{
							"num": "012",
							"name": "Butterfree"
					}
			],
			"birth_date": 86557544565
	},
	{
			"id": 12,
			"num": "012",
			"name": "Butterfree",
			"img": "http://www.serebii.net/pokemongo/pokemon/012.png",
			"type": [
					"Bug",
					"Flying"
			],
			"height": "1.09 m",
			"weight": "32.0 kg",
			"candy": "Caterpie Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.022,
			"avg_spawns": 2.2,
			"spawn_time": "05:23",
			"multipliers": null,
			"weaknesses": [
					"Fire",
					"Electric",
					"Ice",
					"Flying",
					"Rock"
			],
			"prev_evolution": [
					{
							"num": "010",
							"name": "Caterpie"
					},
					{
							"num": "011",
							"name": "Metapod"
					}
			],
			"birth_date": 1508166433208
	},
	{
			"id": 13,
			"num": "013",
			"name": "Weedle",
			"img": "http://www.serebii.net/pokemongo/pokemon/013.png",
			"type": [
					"Bug",
					"Poison"
			],
			"height": "0.30 m",
			"weight": "3.2 kg",
			"candy": "Weedle Candy",
			"candy_count": 12,
			"egg": "2 km",
			"spawn_chance": 7.12,
			"avg_spawns": 712,
			"spawn_time": "02:21",
			"multipliers": [
					1.01,
					1.09
			],
			"weaknesses": [
					"Fire",
					"Flying",
					"Psychic",
					"Rock"
			],
			"next_evolution": [
					{
							"num": "014",
							"name": "Kakuna"
					},
					{
							"num": "015",
							"name": "Beedrill"
					}
			],
			"birth_date": 873928831563
	},
	{
			"id": 14,
			"num": "014",
			"name": "Kakuna",
			"img": "http://www.serebii.net/pokemongo/pokemon/014.png",
			"type": [
					"Bug",
					"Poison"
			],
			"height": "0.61 m",
			"weight": "10.0 kg",
			"candy": "Weedle Candy",
			"candy_count": 50,
			"egg": "Not in Eggs",
			"spawn_chance": 0.44,
			"avg_spawns": 44,
			"spawn_time": "02:30",
			"multipliers": [
					3.01,
					3.41
			],
			"weaknesses": [
					"Fire",
					"Flying",
					"Psychic",
					"Rock"
			],
			"prev_evolution": [
					{
							"num": "013",
							"name": "Weedle"
					}
			],
			"next_evolution": [
					{
							"num": "015",
							"name": "Beedrill"
					}
			],
			"birth_date": 1363536774073
	},
	{
			"id": 15,
			"num": "015",
			"name": "Beedrill",
			"img": "http://www.serebii.net/pokemongo/pokemon/015.png",
			"type": [
					"Bug",
					"Poison"
			],
			"height": "0.99 m",
			"weight": "29.5 kg",
			"candy": "Weedle Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.051,
			"avg_spawns": 5.1,
			"spawn_time": "04:50",
			"multipliers": null,
			"weaknesses": [
					"Fire",
					"Flying",
					"Psychic",
					"Rock"
			],
			"prev_evolution": [
					{
							"num": "013",
							"name": "Weedle"
					},
					{
							"num": "014",
							"name": "Kakuna"
					}
			],
			"birth_date": 1197459496554
	},
	{
			"id": 16,
			"num": "016",
			"name": "Pidgey",
			"img": "http://www.serebii.net/pokemongo/pokemon/016.png",
			"type": [
					"Normal",
					"Flying"
			],
			"height": "0.30 m",
			"weight": "1.8 kg",
			"candy": "Pidgey Candy",
			"candy_count": 12,
			"egg": "2 km",
			"spawn_chance": 15.98,
			"avg_spawns": 1.598,
			"spawn_time": "01:34",
			"multipliers": [
					1.71,
					1.92
			],
			"weaknesses": [
					"Electric",
					"Rock"
			],
			"next_evolution": [
					{
							"num": "017",
							"name": "Pidgeotto"
					},
					{
							"num": "018",
							"name": "Pidgeot"
					}
			],
			"birth_date": 209762716473
	},
	{
			"id": 17,
			"num": "017",
			"name": "Pidgeotto",
			"img": "http://www.serebii.net/pokemongo/pokemon/017.png",
			"type": [
					"Normal",
					"Flying"
			],
			"height": "1.09 m",
			"weight": "30.0 kg",
			"candy": "Pidgey Candy",
			"candy_count": 50,
			"egg": "Not in Eggs",
			"spawn_chance": 1.02,
			"avg_spawns": 102,
			"spawn_time": "01:30",
			"multipliers": [
					1.79
			],
			"weaknesses": [
					"Electric",
					"Rock"
			],
			"prev_evolution": [
					{
							"num": "016",
							"name": "Pidgey"
					}
			],
			"next_evolution": [
					{
							"num": "018",
							"name": "Pidgeot"
					}
			],
			"birth_date": 412447887308
	},
	{
			"id": 18,
			"num": "018",
			"name": "Pidgeot",
			"img": "http://www.serebii.net/pokemongo/pokemon/018.png",
			"type": [
					"Normal",
					"Flying"
			],
			"height": "1.50 m",
			"weight": "39.5 kg",
			"candy": "Pidgey Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.13,
			"avg_spawns": 13,
			"spawn_time": "01:50",
			"multipliers": null,
			"weaknesses": [
					"Electric",
					"Rock"
			],
			"prev_evolution": [
					{
							"num": "016",
							"name": "Pidgey"
					},
					{
							"num": "017",
							"name": "Pidgeotto"
					}
			],
			"birth_date": 163488328171
	},
	{
			"id": 19,
			"num": "019",
			"name": "Rattata",
			"img": "http://www.serebii.net/pokemongo/pokemon/019.png",
			"type": [
					"Normal"
			],
			"height": "0.30 m",
			"weight": "3.5 kg",
			"candy": "Rattata Candy",
			"candy_count": 25,
			"egg": "2 km",
			"spawn_chance": 13.05,
			"avg_spawns": 1.305,
			"spawn_time": "01:55",
			"multipliers": [
					2.55,
					2.73
			],
			"weaknesses": [
					"Fighting"
			],
			"next_evolution": [
					{
							"num": "020",
							"name": "Raticate"
					}
			],
			"birth_date": 878321053999
	},
	{
			"id": 20,
			"num": "020",
			"name": "Raticate",
			"img": "http://www.serebii.net/pokemongo/pokemon/020.png",
			"type": [
					"Normal"
			],
			"height": "0.71 m",
			"weight": "18.5 kg",
			"candy": "Rattata Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.41,
			"avg_spawns": 41,
			"spawn_time": "01:56",
			"multipliers": null,
			"weaknesses": [
					"Fighting"
			],
			"prev_evolution": [
					{
							"num": "019",
							"name": "Rattata"
					}
			],
			"birth_date": 597557646347
	},
	{
			"id": 21,
			"num": "021",
			"name": "Spearow",
			"img": "http://www.serebii.net/pokemongo/pokemon/021.png",
			"type": [
					"Normal",
					"Flying"
			],
			"height": "0.30 m",
			"weight": "2.0 kg",
			"candy": "Spearow Candy",
			"candy_count": 50,
			"egg": "2 km",
			"spawn_chance": 4.73,
			"avg_spawns": 473,
			"spawn_time": "12:25",
			"multipliers": [
					2.66,
					2.68
			],
			"weaknesses": [
					"Electric",
					"Rock"
			],
			"next_evolution": [
					{
							"num": "022",
							"name": "Fearow"
					}
			],
			"birth_date": 146013631441
	},
	{
			"id": 22,
			"num": "022",
			"name": "Fearow",
			"img": "http://www.serebii.net/pokemongo/pokemon/022.png",
			"type": [
					"Normal",
					"Flying"
			],
			"height": "1.19 m",
			"weight": "38.0 kg",
			"candy": "Spearow Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.15,
			"avg_spawns": 15,
			"spawn_time": "01:11",
			"multipliers": null,
			"weaknesses": [
					"Electric",
					"Rock"
			],
			"prev_evolution": [
					{
							"num": "021",
							"name": "Spearow"
					}
			],
			"birth_date": 242719003707
	},
	{
			"id": 23,
			"num": "023",
			"name": "Ekans",
			"img": "http://www.serebii.net/pokemongo/pokemon/023.png",
			"type": [
					"Poison"
			],
			"height": "2.01 m",
			"weight": "6.9 kg",
			"candy": "Ekans Candy",
			"candy_count": 50,
			"egg": "5 km",
			"spawn_chance": 2.27,
			"avg_spawns": 227,
			"spawn_time": "12:20",
			"multipliers": [
					2.21,
					2.27
			],
			"weaknesses": [
					"Ground",
					"Psychic"
			],
			"next_evolution": [
					{
							"num": "024",
							"name": "Arbok"
					}
			],
			"birth_date": 927786518716
	},
	{
			"id": 24,
			"num": "024",
			"name": "Arbok",
			"img": "http://www.serebii.net/pokemongo/pokemon/024.png",
			"type": [
					"Poison"
			],
			"height": "3.51 m",
			"weight": "65.0 kg",
			"candy": "Ekans Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.072,
			"avg_spawns": 7.2,
			"spawn_time": "01:50",
			"multipliers": null,
			"weaknesses": [
					"Ground",
					"Psychic"
			],
			"prev_evolution": [
					{
							"num": "023",
							"name": "Ekans"
					}
			],
			"birth_date": 1511808565422
	},
	{
			"id": 25,
			"num": "025",
			"name": "Pikachu",
			"img": "http://www.serebii.net/pokemongo/pokemon/025.png",
			"type": [
					"Electric"
			],
			"height": "0.41 m",
			"weight": "6.0 kg",
			"candy": "Pikachu Candy",
			"candy_count": 50,
			"egg": "2 km",
			"spawn_chance": 0.21,
			"avg_spawns": 21,
			"spawn_time": "04:00",
			"multipliers": [
					2.34
			],
			"weaknesses": [
					"Ground"
			],
			"next_evolution": [
					{
							"num": "026",
							"name": "Raichu"
					}
			],
			"birth_date": 1588043985798
	},
	{
			"id": 26,
			"num": "026",
			"name": "Raichu",
			"img": "http://www.serebii.net/pokemongo/pokemon/026.png",
			"type": [
					"Electric"
			],
			"height": "0.79 m",
			"weight": "30.0 kg",
			"candy": "Pikachu Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.0076,
			"avg_spawns": 0.76,
			"spawn_time": "23:58",
			"multipliers": null,
			"weaknesses": [
					"Ground"
			],
			"prev_evolution": [
					{
							"num": "025",
							"name": "Pikachu"
					}
			],
			"birth_date": 1354368998240
	},
	{
			"id": 27,
			"num": "027",
			"name": "Sandshrew",
			"img": "http://www.serebii.net/pokemongo/pokemon/027.png",
			"type": [
					"Ground"
			],
			"height": "0.61 m",
			"weight": "12.0 kg",
			"candy": "Sandshrew Candy",
			"candy_count": 50,
			"egg": "5 km",
			"spawn_chance": 1.11,
			"avg_spawns": 111,
			"spawn_time": "01:58",
			"multipliers": [
					2.45
			],
			"weaknesses": [
					"Water",
					"Grass",
					"Ice"
			],
			"next_evolution": [
					{
							"num": "028",
							"name": "Sandslash"
					}
			],
			"birth_date": 937172857327
	},
	{
			"id": 28,
			"num": "028",
			"name": "Sandslash",
			"img": "http://www.serebii.net/pokemongo/pokemon/028.png",
			"type": [
					"Ground"
			],
			"height": "0.99 m",
			"weight": "29.5 kg",
			"candy": "Sandshrew Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.037,
			"avg_spawns": 3.7,
			"spawn_time": "12:34",
			"multipliers": null,
			"weaknesses": [
					"Water",
					"Grass",
					"Ice"
			],
			"prev_evolution": [
					{
							"num": "027",
							"name": "Sandshrew"
					}
			],
			"birth_date": 1166223839947
	},
	{
			"id": 29,
			"num": "029",
			"name": "Nidoran ♀ (Female)",
			"img": "http://www.serebii.net/pokemongo/pokemon/029.png",
			"type": [
					"Poison"
			],
			"height": "0.41 m",
			"weight": "7.0 kg",
			"candy": "Nidoran ♀ (Female) Candy",
			"candy_count": 25,
			"egg": "5 km",
			"spawn_chance": 1.38,
			"avg_spawns": 138,
			"spawn_time": "01:51",
			"multipliers": [
					1.63,
					2.48
			],
			"weaknesses": [
					"Ground",
					"Psychic"
			],
			"next_evolution": [
					{
							"num": "030",
							"name": "Nidorina"
					},
					{
							"num": "031",
							"name": "Nidoqueen"
					}
			],
			"birth_date": 1487974289654
	},
	{
			"id": 30,
			"num": "030",
			"name": "Nidorina",
			"img": "http://www.serebii.net/pokemongo/pokemon/030.png",
			"type": [
					"Poison"
			],
			"height": "0.79 m",
			"weight": "20.0 kg",
			"candy": "Nidoran ♀ (Female) Candy",
			"candy_count": 100,
			"egg": "Not in Eggs",
			"spawn_chance": 0.088,
			"avg_spawns": 8.8,
			"spawn_time": "07:22",
			"multipliers": [
					1.83,
					2.48
			],
			"weaknesses": [
					"Ground",
					"Psychic"
			],
			"prev_evolution": [
					{
							"num": "029",
							"name": "Nidoran(Female)"
					}
			],
			"next_evolution": [
					{
							"num": "031",
							"name": "Nidoqueen"
					}
			],
			"birth_date": 1335226605018
	},
	{
			"id": 31,
			"num": "031",
			"name": "Nidoqueen",
			"img": "http://www.serebii.net/pokemongo/pokemon/031.png",
			"type": [
					"Poison",
					"Ground"
			],
			"height": "1.30 m",
			"weight": "60.0 kg",
			"candy": "Nidoran ♀ (Female) Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.012,
			"avg_spawns": 1.2,
			"spawn_time": "12:35",
			"multipliers": null,
			"weaknesses": [
					"Water",
					"Ice",
					"Ground",
					"Psychic"
			],
			"prev_evolution": [
					{
							"num": "029",
							"name": "Nidoran(Female)"
					},
					{
							"num": "030",
							"name": "Nidorina"
					}
			],
			"birth_date": 1618076722281
	},
	{
			"id": 32,
			"num": "032",
			"name": "Nidoran ♂ (Male)",
			"img": "http://www.serebii.net/pokemongo/pokemon/032.png",
			"type": [
					"Poison"
			],
			"height": "0.51 m",
			"weight": "9.0 kg",
			"candy": "Nidoran ♂ (Male) Candy",
			"candy_count": 25,
			"egg": "5 km",
			"spawn_chance": 1.31,
			"avg_spawns": 131,
			"spawn_time": "01:12",
			"multipliers": [
					1.64,
					1.7
			],
			"weaknesses": [
					"Ground",
					"Psychic"
			],
			"next_evolution": [
					{
							"num": "033",
							"name": "Nidorino"
					},
					{
							"num": "034",
							"name": "Nidoking"
					}
			],
			"birth_date": 325780239916
	},
	{
			"id": 33,
			"num": "033",
			"name": "Nidorino",
			"img": "http://www.serebii.net/pokemongo/pokemon/033.png",
			"type": [
					"Poison"
			],
			"height": "0.89 m",
			"weight": "19.5 kg",
			"candy": "Nidoran ♂ (Male) Candy",
			"candy_count": 100,
			"egg": "Not in Eggs",
			"spawn_chance": 0.083,
			"avg_spawns": 8.3,
			"spawn_time": "09:02",
			"multipliers": [
					1.83
			],
			"weaknesses": [
					"Ground",
					"Psychic"
			],
			"prev_evolution": [
					{
							"num": "032",
							"name": "Nidoran(Male)"
					}
			],
			"next_evolution": [
					{
							"num": "034",
							"name": "Nidoking"
					}
			],
			"birth_date": 1175053087831
	},
	{
			"id": 34,
			"num": "034",
			"name": "Nidoking",
			"img": "http://www.serebii.net/pokemongo/pokemon/034.png",
			"type": [
					"Poison",
					"Ground"
			],
			"height": "1.40 m",
			"weight": "62.0 kg",
			"candy": "Nidoran ♂ (Male) Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.017,
			"avg_spawns": 1.7,
			"spawn_time": "12:16",
			"multipliers": null,
			"weaknesses": [
					"Water",
					"Ice",
					"Ground",
					"Psychic"
			],
			"prev_evolution": [
					{
							"num": "032",
							"name": "Nidoran(Male)"
					},
					{
							"num": "033",
							"name": "Nidorino"
					}
			],
			"birth_date": 1162894501701
	},
	{
			"id": 35,
			"num": "035",
			"name": "Clefairy",
			"img": "http://www.serebii.net/pokemongo/pokemon/035.png",
			"type": [
					"Normal"
			],
			"height": "0.61 m",
			"weight": "7.5 kg",
			"candy": "Clefairy Candy",
			"candy_count": 50,
			"egg": "2 km",
			"spawn_chance": 0.92,
			"avg_spawns": 92,
			"spawn_time": "03:30",
			"multipliers": [
					2.03,
					2.14
			],
			"weaknesses": [
					"Fighting"
			],
			"next_evolution": [
					{
							"num": "036",
							"name": "Clefable"
					}
			],
			"birth_date": 601497660122
	},
	{
			"id": 36,
			"num": "036",
			"name": "Clefable",
			"img": "http://www.serebii.net/pokemongo/pokemon/036.png",
			"type": [
					"Normal"
			],
			"height": "1.30 m",
			"weight": "40.0 kg",
			"candy": "Clefairy Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.012,
			"avg_spawns": 1.2,
			"spawn_time": "03:29",
			"multipliers": null,
			"weaknesses": [
					"Fighting"
			],
			"prev_evolution": [
					{
							"num": "035",
							"name": "Clefairy"
					}
			],
			"birth_date": 1511165568771
	},
	{
			"id": 37,
			"num": "037",
			"name": "Vulpix",
			"img": "http://www.serebii.net/pokemongo/pokemon/037.png",
			"type": [
					"Fire"
			],
			"height": "0.61 m",
			"weight": "9.9 kg",
			"candy": "Vulpix Candy",
			"candy_count": 50,
			"egg": "5 km",
			"spawn_chance": 0.22,
			"avg_spawns": 22,
			"spawn_time": "13:43",
			"multipliers": [
					2.74,
					2.81
			],
			"weaknesses": [
					"Water",
					"Ground",
					"Rock"
			],
			"next_evolution": [
					{
							"num": "038",
							"name": "Ninetales"
					}
			],
			"birth_date": 935484538829
	},
	{
			"id": 38,
			"num": "038",
			"name": "Ninetales",
			"img": "http://www.serebii.net/pokemongo/pokemon/038.png",
			"type": [
					"Fire"
			],
			"height": "1.09 m",
			"weight": "19.9 kg",
			"candy": "Vulpix Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.0077,
			"avg_spawns": 0.77,
			"spawn_time": "01:32",
			"multipliers": null,
			"weaknesses": [
					"Water",
					"Ground",
					"Rock"
			],
			"prev_evolution": [
					{
							"num": "037",
							"name": "Vulpix"
					}
			],
			"birth_date": 903058134157
	},
	{
			"id": 39,
			"num": "039",
			"name": "Jigglypuff",
			"img": "http://www.serebii.net/pokemongo/pokemon/039.png",
			"type": [
					"Normal"
			],
			"height": "0.51 m",
			"weight": "5.5 kg",
			"candy": "Jigglypuff Candy",
			"candy_count": 50,
			"egg": "2 km",
			"spawn_chance": 0.39,
			"avg_spawns": 39,
			"spawn_time": "08:46",
			"multipliers": [
					1.85
			],
			"weaknesses": [
					"Fighting"
			],
			"next_evolution": [
					{
							"num": "040",
							"name": "Wigglytuff"
					}
			],
			"birth_date": 999645107561
	},
	{
			"id": 40,
			"num": "040",
			"name": "Wigglytuff",
			"img": "http://www.serebii.net/pokemongo/pokemon/040.png",
			"type": [
					"Normal"
			],
			"height": "0.99 m",
			"weight": "12.0 kg",
			"candy": "Jigglypuff Candy",
			"egg": "Not in Eggs",
			"spawn_chance": 0.018,
			"avg_spawns": 1.8,
			"spawn_time": "12:28",
			"multipliers": null,
			"weaknesses": [
					"Fighting"
			],
			"prev_evolution": [
					{
							"num": "039",
							"name": "Jigglypuff"
					}
			],
			"birth_date": 318563703762
	}
]