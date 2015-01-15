angular.module(ApplicationConfiguration.applicationModuleName).run(["$templateCache", function($templateCache){  'use strict';

  $templateCache.put('main/intro.html',
    "<ui-view><header class=\"hero-unit\" id=\"banner\"><div class=\"container\"><img src=\"/assets/images/teaser.png\" style=\"width: 100%; max-height: 694px; max-width: 694px\"><div class=\"text-center\"><p>Teambrewery is a modern Teambuilder for competetive Pokémon players</p></div></div></header><div class=\"block dark-blue\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-sm-6\"><img class=\"thumbnail\" src=\"/assets/images/intro/typechart.png\" style=\"width: 100%\"></div><div class=\"col-xs-12 col-sm-6\"><h3 class=\"text-center\">Check your teams resistances</h3><p class=\"big-padding\">The most important point in teambuilding is synergy. We provide your with simple yet detailed charts which show you where your team needs improvement. Beside the <em>Type &amp; Resistances</em> table, we also show you your teams <em>Moveset Coverage</em>.<br><br>Also checkout our Checklist, which shows you what kind of Pokémon your teams check (eg. Spinner, Stealth Rocker, Pivot, Sweeper etc.)</p></div></div><div class=\"row row-margin\"><div class=\"col-xs-12 col-sm-6\"><h3 class=\"text-center\">Add Pokemon with ease</h3><p class=\"big-padding\">We try to make teambuilding as simple and fun as possible. We already grouped common Pokémon to make it really easy to add individual Pokémon. You need a spinner? Just click on the <em>Add Pokemon &raquo; Spinner</em> link.<br><br>Sometimes you need a strong sweeper but you don't remember what Pokémon is capable of doing it? Just... <em>you already know it. ;)</em>.</p></div><div class=\"col-xs-12 col-sm-6\"><img class=\"thumbnail\" src=\"/assets/images/intro/add-pokemon.png\" style=\"width: 100%\"></div></div></div></div><div class=\"block cinnamon-red\"><div class=\"container\"><h3 class=\"text-center\">What we offer</h3><div class=\"row\"><div class=\"col-xs-12 col-sm-4\"><h4><i class=\"fa fa-users\"></i> A community behind teams</h4><p class=\"desc\">Create and share your team with the community. Get tips on how to improve your team. Pick a team from the community and start adding your own flavour.</p></div><div class=\"col-xs-12 col-sm-4\"><h4><i class=\"fa fa-line-chart\"></i> A whole new level of team creation</h4><p class=\"desc\">While other teambuilder let you add Pokémon and show you their weaknesses and resistances, we go a step further providing detailed movesets. Our Pokémon are already set-up with the most up-to-date movesets and EVSpreads.</p></div><div class=\"col-xs-12 col-sm-4\"><h4><i class=\"fa fa-youtube-play\"></i> Show your teams in action!</h4><p class=\"desc\">If you're using a team in a Youtube Video you can link these videos. Whenever someone views your team they have direct insight on how the team compares.</p></div></div><div class=\"row row-margin\"><div class=\"col-xs-12 col-sm-4\"><h4><i class=\"fa fa-lock\"></i> Everything is kept secret</h4><p class=\"desc\">Don't worry about your privacy. You don't even need to login to use our service! If you want to save your teams you can simply login with any <em>Social Network</em>. No password required.</p></div><div class=\"col-xs-12 col-sm-4\"><h4><i class=\"fa fa-code-fork\"></i> Export/Import your team</h4><p class=\"desc\">You can easily export your team to <em>Pokemon Showdown</em> or any other Pokemon Simulator. We also added the feature to import your existing Pokemon Simulator teams.<br><br>We're working hard to provide you with <em>Browser Extension</em>, so you can use the teams you created on <em>Teambrewery</em> on Showdown with no effort.</p></div><div class=\"col-xs-12 col-sm-4\"><h4><i class=\"fa fa-database\"></i> Save your Pokémon!</h4><p class=\"desc\">You know that in the original games you can simply drop your Pokémon to a Box on your Computer and reuse it whenever want? Well, now you can do as well! You can save up to 200 Pokémon to your private Box and use them in any team. How convenient is that?</p></div></div></div></div><div class=\"block light-green\"><div class=\"container\"><div class=\"row row-margin\"><div class=\"col-xs-12 col-sm-6\"><h3 class=\"text-center\">Extensive Tier support</h3><p class=\"big-padding\">Most teambuilder don't check if your team is legit in a given tier<sup>*</sup>. We do! Every action adapts your tiers changes automatically. Don't ever worry that your team might be rejected. We use the latest <em>Pokemon Showdown</em> tier rules.<br><br>At the moment we support common tiers like: <strong>OU, Uber, UU, LC, RU, NU, BL</strong>. We plan to support more tiers in the future.<br><br>*) This reflects to tier clauses as well. For example <em>Species Clause</em>.</p></div><div class=\"col-xs-12 col-sm-6\"><img src=\"/assets/images/intro/xernias.png\" style=\"width: 100%\"></div></div></div></div></ui-view>"
  );


  $templateCache.put('main/main.html',
    "<ui-view><header class=\"hero-unit\" id=\"banner\"><div class=\"container\"><img src=\"/assets/images/teaser.png\"></div></header></ui-view>"
  );


  $templateCache.put('main/teams/community.html',
    "<ui-view><h2>Community teams</h2></ui-view>"
  );


  $templateCache.put('main/teams/list.html',
    "<ui-view><div class=\"header-bar\"><div class=\"container\"><h2>Your <span class=\"highlight\">Pokemon Teams</span><span class=\"pull-right\">New Team</span></h2></div></div><div class=\"container content-container\"><div class=\"field-bar\" ng-repeat=\"team in teams\"><div>{{team.name}} {{team.format}} <span style=\"float:right\"><a ng-click=\"editTeam(team.id)\" class=\"btn btn-info\">Edit team</a> <a ng-click=\"deleteTeam(team.id)\" class=\"btn btn-danger\">Delete team</a></span></div><hr><img ng-src=\"{{pokemon.getSprite()}}\" ng-repeat=\"pokemon in team.pokemons\"></div></div></ui-view>"
  );


  $templateCache.put('main/teams/new.html',
    "<ui-view><div class=\"header-bar\"><div class=\"container\"><h2>Create a new <span class=\"highlight\">Pokemon Team</span></h2></div></div><div class=\"container content-container\"><div class=\"field-bar\"><b>Team Name</b> <input ng-model=\"newTeam.name\" class=\"form-control\"></div></div><div class=\"container content-container\"><div class=\"field-bar\"><b>Tier</b><select class=\"form-control\" ng-model=\"newTeam.tier\"><option value=\"OU\">OU (Most Used / Overused)</option><option value=\"BL\">BL (Things to good for UU but too weak for OU)</option><option value=\"UU\">UU (Commonly Used / Under Used)</option><option value=\"RU\">RU (Sometimes Used / Rarely Used)</option><option value=\"NU\">NU (Poorly Used / Never Used)</option><option value=\"Uber\">Uber (Things too strong for OU)</option></select></div></div><div class=\"container content-container\"><div class=\"field-bar\"><b>Options</b><div class=\"well\"><input type=\"checkbox\" ng-model=\"newTeam.populate\"> Populate team on creation<br><br><input type=\"checkbox\" ng-model=\"newTeam.private\"> Private? <span class=\"text-muted\">Do not list this team</span></div></div></div><div class=\"container content-container\"><div class=\"field-bar\"><b>Actions</b><div class=\"well\"><a href=\"#\" ng-click=\"createTeam(newTeam)\" class=\"btn btn-block btn-success\">Create &amp; Edit</a></div></div></div><div class=\"spacer\"></div></ui-view>"
  );


  $templateCache.put('pokedex/pokedex.html',
    "<ui-view><div class=\"header-bar\"><div class=\"container\"><h2>Pokedex</h2><input ng-model=\"query\" placeholder=\"Search for a Pokemon\" typeahead=\"pokemon as pokemon.name for pokemon in getPokemonByName($viewValue)\" typeahead-on-select=\"setActivePokemon($item, $model, $label)\" typeahead-loading=\"loadingLocations\" typeahead-wait-ms=\"300\" typeahead-template-url=\"/app/autocomplete_template.html\" name=\"q\" class=\"form-control input-lg\"></div></div></ui-view>"
  );


  $templateCache.put('pokedex/pokemon.view.html',
    "<div class=\"header-bar\"><div class=\"container\"><h2><a ui-sref=\"pokedex\">&lt; Back</a></h2></div></div><div ng-if=\"pokemon\" class=\"container\"><div class=\"field-bar\"><hr><h3 class=\"text-center\">Details For {{pokemon.name }}</h3><hr><div class=\"row\"><div class=\"col-xs-12 col-sm-6\"><center><img ng-src=\"{{pokemon.getSprite()}}\" class=\"thumbnail img-responsive\"><h2>{{pokemon.name}}</h2><pokemon-typing></pokemon-typing></center></div><div ng-show=\"pokemon\" class=\"col-xs-12 col-sm-6\"><div class=\"progress_bars\"><div class=\"progress\"><div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" ng-class=\"stats.atk.cssclass\" ng-style=\"{'width': evPercentage(pokemon, 'hp')}\">HP ({{pokemon.basestats.hp}})</div></div><div class=\"progress\"><div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" ng-class=\"stats.atk.cssclass\" ng-style=\"{'width': evPercentage(pokemon, 'atk')}\">Attack ({{pokemon.basestats.atk}})</div></div><div class=\"progress\"><div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" ng-class=\"stats.def.cssclass\" ng-style=\"{'width': evPercentage(pokemon, 'def')}\">Defense ({{pokemon.basestats.def}})</div></div><div class=\"progress\"><div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" ng-class=\"stats.spa.cssclass\" ng-style=\"{'width': evPercentage(pokemon, 'spa')}\">Special Attack ({{pokemon.basestats.spa}})</div></div><div class=\"progress\"><div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" ng-class=\"stats.spd.cssclass\" ng-style=\"{'width': evPercentage(pokemon, 'spd')}\">Special Defense ({{pokemon.basestats.spd}})</div></div><div class=\"progress\"><div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" ng-class=\"stats.spe.cssclass\" ng-style=\"{'width': evPercentage(pokemon, 'spe')}\">Speed ({{pokemon.basestats.spe}})</div></div></div></div></div></div><div class=\"field-bar\"><hr><h3 class=\"text-center\">Movesets For {{pokemon.name}}</h3><hr><div class=\"row\"><div class=\"col-xs-12\">Sorry! We don't provide Movesets at the moment. Please consider using Smogon.com</div></div></div></div>"
  );


  $templateCache.put('pokedex/stat.progress.bars.html',
    "{{pokemon.id}}"
  );


  $templateCache.put('pokemon/card.html',
    "<div class=\"col-md-4 col-sm-4\"><div class=\"card-container\"><div class=\"card\"><div class=\"front\"><div class=\"cover\"></div><div class=\"user\"><img ng-src=\"{{pokemon.sprite}}\"></div><div class=\"content\"><div class=\"main\"><h3 class=\"name\">{{pokemon.name}}</h3><p class=\"typing\"><pokemon-typing></p><hr><stat-distribution></div><div class=\"footer\"><div class=\"rating\"><i class=\"fa fa-star\"></i></div></div></div></div><div class=\"back\"><div class=\"header\"><h5 class=\"motto\"><img ng-src=\"{{pokemon.sprite}}\" style=\"height: 25px; width: auto\"><br>{{pokemon.name}}</h5></div><div class=\"content\"><div class=\"main\"><div ng-if=\"pokemon.moveset.moves.length\"><table class=\"table move-table\"><tr><td><div class=\"type text-center\" ng-class=\"pokemon.moveset.moves[0].type.toLowerCase()\">{{pokemon.moveset.moves[0].name}}</div></td><td><div class=\"type text-center\" ng-class=\"pokemon.moveset.moves[1].type.toLowerCase()\">{{pokemon.moveset.moves[1].name}}</div></td></tr><tr><td><div class=\"type text-center\" ng-class=\"pokemon.moveset.moves[2].type.toLowerCase()\">{{pokemon.moveset.moves[2].name}}</div></td><td><div class=\"type text-center\" ng-class=\"pokemon.moveset.moves[3].type.toLowerCase()\">{{pokemon.moveset.moves[3].name}}</div></td></tr></table><div ng-if=\"!!pokemon.moveset.item\"><span>{{pokemon.moveset.item.name}}<br><small class=\"text-muted item-description\">{{pokemon.moveset.item.desc}}</small></span></div><div ng-if=\"!!pokemon.moveset.ev_spread\"><table class=\"table table-tiny stat-table move-table\" style=\"border:none\"><tbody><tr><td>HP</td><td>ATK</td><td>DEF</td><td>SATK</td><td>SDEF</td><td>SPE</td></tr><tr><td>{{pokemon.moveset.ev_spread.hp}}</td><td>{{pokemon.moveset.ev_spread.atk}}<span ng-if=\"pokemon.moveset.nature.patk == 1.1\">+</span><span ng-if=\"pokemon.moveset.nature.patk == 0.9\">-</span></td><td>{{pokemon.moveset.ev_spread.def}}<span ng-if=\"pokemon.moveset.nature.pdef == 1.1\">+</span><span ng-if=\"pokemon.moveset.nature.pdef == 0.9\">-</span></td><td>{{pokemon.moveset.ev_spread.spa}}<span ng-if=\"pokemon.moveset.nature.spatk == 1.1\">+</span><span ng-if=\"pokemon.moveset.nature.spatk == 0.9\">-</span></td><td>{{pokemon.moveset.ev_spread.spd}}<span ng-if=\"pokemon.moveset.nature.spdef == 1.1\">+</span><span ng-if=\"pokemon.moveset.nature.spdef == 0.9\">-</span></td><td>{{pokemon.moveset.ev_spread.spe}}<span ng-if=\"pokemon.moveset.nature.spe == 1.1\">+</span><span ng-if=\"pokemon.moveset.nature.spe == 0.9\">-</span></td></tr></tbody></table></div></div><div ng-if=\"!pokemon.moves\" class=\"text-center\">No moveset for {{pokemon.name}} yet.<br><br><a ng-click=\"addMoveset()\" class=\"btn btn-xs btn-primary\">Add Moveset</a></div></div></div><div class=\"footer\"><div class=\"social-links text-center\"><a ng-click=\"editPokemon()\" class=\"btn btn-default btn-xs\">Edit Pokemon</a></div></div></div></div></div></div>"
  );


  $templateCache.put('pokemon/pokemon.evspread.html',
    "<div class=\"pokemon-evspread\"><div ng-if=\"pokemon.moveset && pokemon.moveset.ev_spread\"><table ng-if=\"options && options.view == 'table'\" width=\"400px\" class=\"table table-bordered table-small table-evspread\"><thead><tr><th>HP</th><th>ATK</th><th>DEF</th><th>SPA</th><th>SPD</th><th>SPE</th></tr></thead><tbody><tr><td>{{pokemon.moveset.ev_spread.hp}}</td><td>{{pokemon.moveset.ev_spread.atk}}</td><td>{{pokemon.moveset.ev_spread.def}}</td><td>{{pokemon.moveset.ev_spread.spa}}</td><td>{{pokemon.moveset.ev_spread.spd}}</td><td>{{pokemon.moveset.ev_spread.spe}}</td></tr></tbody></table><div ng-if=\"!options || options.view == 'small'\"><span ng-if=\"pokemon.moveset.ev_spread.hp != 0\">{{pokemon.moveset.ev_spread.hp}} HP /</span> <span ng-if=\"pokemon.moveset.ev_spread.atk != 0\">{{pokemon.moveset.ev_spread.atk}} ATK /</span> <span ng-if=\"pokemon.moveset.ev_spread.def != 0\">{{pokemon.moveset.ev_spread.def}} DEF /</span> <span ng-if=\"pokemon.moveset.ev_spread.spa != 0\">{{pokemon.moveset.ev_spread.spa}} SPA /</span> <span ng-if=\"pokemon.moveset.ev_spread.spd != 0\">{{pokemon.moveset.ev_spread.spd}} SPD /</span> <span ng-if=\"pokemon.moveset.ev_spread.spe != 0\">{{pokemon.moveset.ev_spread.spe}} SPE</span></div><a ng-click=\"changeEvSpread(pokemon)\">Change EVSpread for {{pokemon.name}}</a></div><div ng-if=\"!pokemon.moveset || !pokemon.moveset.ev_spread\">No EVSpread exist for {{pokemon.name}} at the moment.<br><a ng-click=\"changeEvSpread(pokemon)\">Add EvSpread</a></div></div>"
  );


  $templateCache.put('pokemon/pokemon.html',
    ""
  );


  $templateCache.put('pokemon/pokemon.moves.html',
    "<div><div ng-if=\"pokemon.moveset\"><span ng-if=\"pokemon.moveset.moves[0]\"><input pokemon-move-input=\"{slot: 1}\" value=\"{{pokemon.moveset.moves[0].name}}\"></span> <span ng-if=\"!pokemon.moveset.moves[0]\"><a ng-click=\"addMove(pokemon, 0)\">Add Move...</a></span> <span ng-if=\"pokemon.moveset.moves[1]\"><input pokemon-move-input value=\"{{pokemon.moveset.moves[1].name}}\"></span> <span ng-if=\"!pokemon.moveset.moves[1]\"><a ng-click=\"addMove(pokemon, 1)\">Add Move...</a></span> <span ng-if=\"pokemon.moveset.moves[2]\"><input pokemon-move-input value=\"{{pokemon.moveset.moves[2].name}}\"></span> <span ng-if=\"!pokemon.moveset.moves[2]\"><a ng-click=\"addMove(pokemon, 2)\">Add Move...</a></span> <span ng-if=\"pokemon.moveset.moves[3]\"><input pokemon-move-input value=\"{{pokemon.moveset.moves[3].name}}\"></span> <span ng-if=\"!pokemon.moveset.moves[3]\"><a ng-click=\"addMove(pokemon, 3)\">Add Move...</a></span></div><div ng-if=\"!pokemon.moveset\"><a ng-click=\"addMoveset(pokemon)\">Add Moveset for {{pokemon.name}}</a></div></div>"
  );


  $templateCache.put('pokemon/pokemon.typing.html',
    "<div class=\"pokemon-type\"><span class=\"type\" ng-class=\"pokemon.types[0].toLowerCase()\">{{pokemon.types[0]}}</span> <span ng-if=\"!!pokemon.types[1]\"><span class=\"type\" ng-class=\"pokemon.types[1].toLowerCase()\">{{pokemon.types[1]}}</span></span></div>"
  );


  $templateCache.put('pokemon/pokemon_add.html',
    ""
  );


  $templateCache.put('pokemon/stats.html',
    "<div><table class=\"stat-table\" style=\"width: 100%\"><thead><tr><th></th><th>Base</th><th>Min</th><th>Max</th><th>Max+</th></tr></thead><tbody><tr ng-class=\"{'text-success': pokemon.baseStats.hp >= 100, 'text-danger': pokemon.baseStats.hp < 60}\"><td>HP</td><td>{{pokemon.baseStats.hp}}</td><td>{{calcStat(pokemon.baseStats.hp, 'hp', 0)}}</td><td>{{calcStat(pokemon.baseStats.hp, 'hp', 255)}}</td><td>-</td></tr><tr ng-class=\"{'text-success': pokemon.baseStats.atk >= 105, 'text-danger': pokemon.baseStats.atk < 50}\"><td>ATK</td><td>{{pokemon.baseStats.atk}}</td><td>{{calcStat(pokemon.baseStats.atk, 'atk', 0)}}</td><td>{{calcStat(pokemon.baseStats.atk, 'atk', 255)}}</td><td>{{calcStat(pokemon.baseStats.atk, 'atk', 255, 1.1)}}</td></tr><tr ng-class=\"{'text-success': pokemon.baseStats.def >= 105, 'text-danger': pokemon.baseStats.def < 50}\"><td>DEF</td><td>{{pokemon.baseStats.def}}</td><td>{{calcStat(pokemon.baseStats.def, 'def', 0)}}</td><td>{{calcStat(pokemon.baseStats.def, 'def', 255)}}</td><td>{{calcStat(pokemon.baseStats.def, 'def', 255, 1.1)}}</td></tr><tr ng-class=\"{'text-success': pokemon.baseStats.spa >= 105, 'text-danger': pokemon.baseStats.spa < 50}\"><td>SPA</td><td>{{pokemon.baseStats.spa}}</td><td>{{calcStat(pokemon.baseStats.spa, 'spa', 0)}}</td><td>{{calcStat(pokemon.baseStats.spa, 'spa', 255)}}</td><td>{{calcStat(pokemon.baseStats.spa, 'spa', 255, 1.1)}}</td></tr><tr ng-class=\"{'text-success': pokemon.baseStats.spd >= 105, 'text-danger': pokemon.baseStats.spd < 50}\"><td>SPD</td><td>{{pokemon.baseStats.spd}}</td><td>{{calcStat(pokemon.baseStats.spd, 'spd', 0)}}</td><td>{{calcStat(pokemon.baseStats.spd, 'spd', 255)}}</td><td>{{calcStat(pokemon.baseStats.spd, 'spd', 255, 1.1)}}</td></tr><tr ng-class=\"{'text-success': pokemon.baseStats.spe >= 105, 'text-danger': pokemon.baseStats.spe < 50}\"><td>SPE</td><td>{{pokemon.baseStats.spe}}</td><td>{{calcStat(pokemon.baseStats.spe, 'spe', 0)}}</td><td>{{calcStat(pokemon.baseStats.spe, 'spe', 255)}}</td><td>{{calcStat(pokemon.baseStats.spe, 'spe', 255, 1.1)}}</td></tr></tbody></table></div>"
  );


  $templateCache.put('team/moveset_coverage.html',
    "<div class=\"header-bar\"><div class=\"container\"><h2>Your teams moveset coverage</h2></div></div><div class=\"container\"><div class=\"field-bar\"><div><table class=\"table table-bordered table-striped pokemon-table table-condensed\"><thead><tr><th>Type</th><th>Physical</th><th>Special</th></tr></thead><tbody><tr ng-repeat=\"type in types\" ng-if=\"type != 'Bird'\"><td style=\"border-radius: 0\" class=\"type {{type.toLowerCase()}}\"><span>{{type}}</span></td><td class=\"cell-number\" ng-class=\"{&quot;success&quot;: team.getMovesetCoverage(type, &quot;Physical&quot;) > 0}\">{{team.getMovesetCoverage(type, \"Physical\")}}</td><td class=\"cell-number\" ng-class=\"{&quot;success&quot;: team.getMovesetCoverage(type, &quot;Special&quot;) > 0}\">{{team.getMovesetCoverage(type, \"Special\")}}</td></tr></tbody></table></div></div></div>"
  );


  $templateCache.put('team/pokemon/add.html',
    "<div class=\"header-bar\"><div class=\"container\"><h2>Let's see how <span class=\"highlight\">{{pokemon.species}}</span> fits your team</h2></div></div>"
  );


  $templateCache.put('team/pokemon/all.html',
    "<div class=\"team-view\"><div class=\"container\"><div class=\"row\"><div class=\"pokemon-list\"><div ui-sref=\"team.pokemon.view({ index: $index })\" class=\"pokemon-spot\" ng-repeat=\"pokemon in $parent.team.pokemons\"><img ng-src=\"{{pokemon.sprite}}\"> <span>{{pokemon.name}}</span></div></div></div></div></div><ui-view></ui-view>"
  );


  $templateCache.put('team/pokemon/list.html',
    "<div class=\"header-bar\"><div class=\"container\"><h2>Here is a handfull of {{queryName}}</h2></div></div>"
  );


  $templateCache.put('team/pokemon/view.html',
    "<div class=\"team-view pokemon-view\" ng-controller=\"TeamPokemonController\"><div ng-if=\"pokemon\" class=\"container\"><div class=\"row\"><div class=\"col-xs-3\"><img ng-src=\"{{pokemon.getSprite()}}\"></div><div class=\"col-xs-9\"><div class=\"col-xs-6\"><h3>{{pokemon.name}}</h3><div><pokemon-typing></pokemon-typing></div></div><h3>EV Spread</h3><div class=\"col-xs-6\"><pokemon-evspread></pokemon-evspread></div></div></div><hr><div class=\"row\"><div class=\"col-xs-12 col-sm-6\"><h4>Moveset</h4><div class=\"well\"><div><pokemon-moves></pokemon-moves></div></div></div><div class=\"col-xs-12 col-sm-6\"></div></div></div><div ng-if=\"!pokemon\"></div></div>"
  );


  $templateCache.put('team/publish.html',
    "<div class=\"header-bar\"><div class=\"container\"><h2>Publish your team</h2></div></div><div class=\"container\"><div class=\"field-bar\"><h3 class=\"text-primary text-center\">Make your team public!</h3><div class=\"row\"><div class=\"col-xs-12\"><div class=\"text-center\"><b>Your team in a peak</b></div><div class=\"spacer\"></div><div class=\"row\"><div class=\"well col-xs-8 col-xs-offset-2\" style=\"text-align: center;padding-top: 5px; padding-bottom: 5px\"><img class=\"publish-img\" style=\"max-height:64px\" ng-src=\"{{pokemon.sprite}}\" ng-repeat=\"pokemon in team.pokemons\"></div></div><hr><div class=\"well col-xs-6 col-xs-offset-3\" style=\"text-align: justify\">You are one step ahead to make your team public visible for the rest of the community. Users may add suggestions to improve your team or give a star to let your team reach our <a ui-sref=\"help.most_wanted\">Most Wanted</a>. <strong>Remember</strong>, you can always change your mind and remove your team from the public list.<div class=\"spacer\"></div><div class=\"btn btn-large btn-block btn-danger\">Make my team public</div></div></div></div></div></div>"
  );


  $templateCache.put('team/settings.html',
    "<div class=\"header-bar\"><div class=\"container\"><h2>Settings</h2></div></div><div class=\"container\"><div class=\"field-bar\"><div class=\"field-title\">Your team's name</div><input ng-model=\"team.name\" class=\"form-control\"><hr><div class=\"field-title\">Tier</div><select class=\"form-control\" ng-model=\"team.tier\"><option value=\"OU\">OU</option><option value=\"BL\">BL</option><option value=\"UU\">UU</option><option value=\"RU\">RU</option><option value=\"NU\">NU</option><option value=\"Uber\">Uber</option></select></div><div class=\"field-bar\"><div class=\"field-title\">Privacy settings</div><input type=\"checkbox\" ng-model=\"team.private\"> Private Team <span class=\"text-warning\">Do not list this team in the community teams tab</span></div><div class=\"field-bar\"><div class=\"field-title\">Demos</div><h6 class=\"subtitle\">You can add Youtube Videos</h6></div></div>"
  );


  $templateCache.put('team/team.html',
    "<div><div class=\"navbar navbar-white\" style=\"margin-bottom:0; border-bottom: 1px solid #ccc; border-radius: 0\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12\"><ul class=\"nav navbar-nav\"><li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Team <span class=\"caret\"></span></a><ul class=\"dropdown-menu\" role=\"menu\"><li ui-sref=\"team.pokemon\"><a href=\"#\"><i class=\"fa fa-eye\"></i> Show Team</a></li><li class=\"divider\"></li><li ng-click=\"importTeam()\"><a href=\"#\"><i class=\"glyphicon glyphicon-import\"></i> Import Team</a></li><li ng-click=\"exportTeam()\"><a href=\"#\"><i class=\"glyphicon glyphicon-export\"></i> Export Team</a></li><li ng-click=\"saveTeam()\"><a href=\"#\"><i class=\"glyphicon glyphicon-floppy-save\"></i> Save Team</a></li><li class=\"divider\"></li><li ng-click=\"randomizeTeam()\"><a href=\"#\"><i class=\"glyphicon glyphicon-random\"></i> Randomize Team</a></li><li class=\"divider\"></li><li ng-click=\"clearTeam()\"><a href=\"#\"><i class=\"glyphicon glyphicon-remove\"></i> Clear Team</a></li></ul></li><li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Pokemon<span class=\"caret\"></span></a><ul class=\"dropdown-menu\" role=\"menu\"><li ng-click=\"addPokemon()\"><a href=\"#\">Add Pokemon ...</a></li><li class=\"divider\"></li><li ng-click=\"addPokemon({format: 'OU'})\"><a href=\"#\">OU Pokemon</a></li><li class=\"divider\"></li><li ng-click=\"addPokemon({group: 'setupsweeper'})\"><a href=\"#\">Setup Sweeper (Physical / Special)</a></li><li ng-click=\"addPokemon({ group: 'specialwall'})\"><a href=\"#\">Special Wall</a></li><li ng-click=\"addPokemon({ group: 'physicalwall'})\"><a href=\"#\">Physical Wall</a></li><li class=\"divider\"></li><li ng-click=\"addPokemon({group: 'spinner'})\"><a href=\"#\">Spinner (Rapid Spin / Defog)</a></li><li ng-click=\"addPokemon({ group: 'voltturn'})\"><a href=\"#\">U-Turn / Volt Switch / Parting Shot</a></li><li ng-click=\"addPokemon({group: 'mega'})\"><a href=\"#\">Mega Pokemon</a></li><li class=\"divider\"></li><li ng-click=\"addPokemon({ group: 'stealthrocker'})\"><a href=\"#\">Stealth Rocker</a></li><li ng-click=\"addPokemon({group: 'dualscreener'})\"><a href=\"#\">Dual Screener</a></li></ul></li><li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Team Details <span class=\"caret\"></span></a><ul class=\"dropdown-menu\" role=\"menu\"><li ui-sref=\"team.typechart\"><a href=\"#\">Type Resistances</a></li><li ui-sref=\"team.moveset_coverage\"><a href=\"#\">Moveset Coverage</a></li><li ui-sref=\"team.playfield\"><a href=\"#\">Simulate Common Threats</a></li></ul></li><li><a href=\"#\" ui-sref=\"team.publish\">Publish</a></li><li><a href=\"#\" ui-sref=\"team.settings\">Settings</a></li></ul><ul class=\"pull-right nav navbar-nav\" style=\"padding-top: 10px\"><li class=\"team-name\"><strong><i ng-if=\"team.private\" class=\"fa fa-lock\"></i> {{team.name}} <span class=\"text-warning\"><small>Format: {{team.tier}}</small></span></strong></li></ul></div></div></div></div><ui-view><div class=\"content\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-sm-4\"><h2>{{team.name}}</h2><h3>Tier: {{team.tier}}</h3></div><div class=\"col-xs-12 col-sm-8\"></div></div></div></div></ui-view></div>"
  );


  $templateCache.put('team/typechart.html',
    "<div class=\"header-bar\"><div class=\"container\"><h2>Your teams type chart</h2></div></div><div class=\"container\"><div class=\"field-bar\"><div class=\"alert alert-info\" role=\"alert\"><strong>Hey</strong>, did you know that you can personalize your table chart?<br>Your changes will be saved to your computer, so when you visit us next time, you don't have to reconfigure all over again. :)</div><div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"headingOne\"><h4 class=\"panel-title text-center\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Configure your type chart</a></h4></div><div id=\"collapseOne\" class=\"panel-collapse collapse out\" role=\"tabpanel\" aria-labelledby=\"headingOne\"><div class=\"panel-body\"><form><div class=\"row\"><div class=\"col-xs-12 col-sm-4\"><b>Table options</b><ul class=\"no-list checkbox-list\"><li>Table Mode:<ul class=\"no-list\"><li><input type=\"radio\" name=\"tableMode\" ng-model=\"customSettings.typeChart.tableMode\" value=\"types\"> Prioritize Types</li><li><input type=\"radio\" name=\"tableMode\" ng-model=\"customSettings.typeChart.tableMode\" value=\"pokemon\"> Prioritize Pokemon</li></ul></li><li><input type=\"checkbox\" ng-model=\"customSettings.typeChart.showPokemon\"> Show Pokemon images</li></ul></div><div class=\"col-xs-12 col-sm-4\"><b>Configure Types Table</b><ul class=\"no-list checkbox-list\"><li><input type=\"checkbox\" ng-model=\"customSettings.typeChart.rows.immunity\"> Immunity</li><li><input type=\"checkbox\" ng-model=\"customSettings.typeChart.rows.quadResistant\"> Quad Resistant</li><li><input type=\"checkbox\" ng-model=\"customSettings.typeChart.rows.resistant\"> Resistant</li><li><input type=\"checkbox\" ng-model=\"customSettings.typeChart.rows.neutral\"> Neutral</li><li><input type=\"checkbox\" ng-model=\"customSettings.typeChart.rows.effective\"> Effective</li><li><input type=\"checkbox\" ng-model=\"customSettings.typeChart.rows.superEffective\"> Super Effective</li></ul></div><div class=\"col-xs-12 col-sm-4\"><b>Configure Pokemon Table</b> - no settings yet</div></div><a ng-click=\"saveSettings(customSettings)\" class=\"btn btn-success btn-xs\">Save settings</a></form></div></div></div></div><weakness-table team=\"{{team}}\"></weakness-table></div></div>"
  );


  $templateCache.put('team/weakness_table.html',
    "<div><table class=\"pokemon-table table table-bordered\"><thead><tr><th>Type</th><th ng-repeat=\"pokemon in team.pokemons\"><img class=\"pokemon_sprite\" ng-src=\"{{pokemon.getSprite()}}\"></th><th>Weakness</th><th>Resistance</th></tr></thead><tbody><tr class=\"type {{type.toLowerCase()}}\" ng-if=\"type != 'Bird'\" ng-repeat=\"type in types\"><td>{{type}}</td><td class=\"cell-number\" ng-repeat=\"pokemon in team.pokemons\"><span ng-if=\"pokemon.typingDetails[type].multiplier != 0\">{{pokemon.typingDetails[type].typechart[1]}}</span></td><td class=\"cell-number\" ng-class=\"{'danger-cell': (team.getWeaknesses(type) > team.getResistances(type))}\">{{team.getWeaknesses(type)}}</td><td class=\"cell-number\">{{team.getResistances(type)}}</td></tr></tbody></table></div>"
  );
}]);