angular.module("teambuilder").service("TierList", [function(){
	"use strict";

	return [
		{
			name: "Uber",
			image: "/assets/pokemon_sprites/arceus.gif",
			description: ""
		},
		{
			name: "OU",
			image: "/assets/pokemon_sprites/charizard-megax.gif",
			description: ""
		},
		{
			name: "UU",
			image: "/assets/pokemon_sprites/absol-mega.gif",
			description: ""
		},
		{
			name: "BL",
			image: "/assets/pokemon_sprites/crawdaunt.gif",
			description: ""

		},
		{
			name: "NU",
			image: "/assets/pokemon_sprites/gigalith.gif",
			description: ""
		}
	];
}])