//many things have been implemented in a naive way, which works but may get more and more unmaintainable. Possible refactor TODOvar tAutoFactory = (function () {    "use strict";    //console.log("af roll call live game init object");    //console.log("af var create anon func");    var t1_bot_choice_a,        t2_bot_choice_a,        t1_veh_choice_a,        t2_veh_choice_a,        t1_air_choice_a,        t2_air_choice_a,        t1_nav_choice_a,        t2_nav_choice_a,        t1_orb_choice_a,        t2_orb_choice_a,        t1_nuk_choice_a,        t1_ank_choice_a,        t1_bot_use = 1,        t2_bot_use = 1,        t1_veh_use = 1,        t2_veh_use = 1,        t1_air_use = 1,        t2_air_use = 1,        t1_nav_use = 1,        t2_nav_use = 1,        t1_orb_use = 1,        t2_orb_use = 1,        t1_nuk_use = 1,        t1_ank_use = 1,    //% thresholds, if metal and energy % is above these values, build        t1_bot_metal_threshold = 80,        t1_bot_energy_threshold = 80,        t2_bot_metal_threshold = 80,        t2_bot_energy_threshold = 80,        t1_veh_metal_threshold = 80,        t1_veh_energy_threshold = 80,        t2_veh_metal_threshold = 80,        t2_veh_energy_threshold = 80,        t1_air_metal_threshold = 80,        t1_air_energy_threshold = 80,        t2_air_metal_threshold = 80,        t2_air_energy_threshold = 80,        t1_nav_metal_threshold = 80,        t1_nav_energy_threshold = 80,        t2_nav_metal_threshold = 80,        t2_nav_energy_threshold = 80,        t1_orb_metal_threshold = 80,        t1_orb_energy_threshold = 80,        t2_orb_metal_threshold = 80,        t2_orb_energy_threshold = 80,        t1_nuk_metal_threshold = 80,        t1_nuk_energy_threshold = 80,        t1_ank_metal_threshold = 80,        t1_ank_energy_threshold = 80,        tAutoFactory = {};        tAutoFactory.active = true;    t1_bot_choice_a = api.settings.isSet('ui', 'tAutoFactory_dd_t1_bot', true)==undefined?'GRENADIER':api.settings.isSet('ui', 'tAutoFactory_dd_t1_bot', true);    t2_bot_choice_a = api.settings.isSet('ui', 'tAutoFactory_dd_t2_bot', true)==undefined?'SLAMMER':api.settings.isSet('ui', 'tAutoFactory_dd_t2_bot', true);    t1_veh_choice_a = api.settings.isSet('ui', 'tAutoFactory_dd_t1_veh', true)==undefined?'T1 TANK':api.settings.isSet('ui', 'tAutoFactory_dd_t1_veh', true);    t2_veh_choice_a = api.settings.isSet('ui', 'tAutoFactory_dd_t2_veh', true)==undefined?'LEVELER':api.settings.isSet('ui', 'tAutoFactory_dd_t2_veh', true);    t1_air_choice_a = api.settings.isSet('ui', 'tAutoFactory_dd_t1_air', true)==undefined?'HUMMINGBIRD':api.settings.isSet('ui', 'tAutoFactory_dd_t1_air', true);    t2_air_choice_a = api.settings.isSet('ui', 'tAutoFactory_dd_t2_air', true)==undefined?'HORNET':api.settings.isSet('ui', 'tAutoFactory_dd_t2_air', true);    t1_nav_choice_a = api.settings.isSet('ui', 'tAutoFactory_dd_t1_nav', true)==undefined?'ORCA':api.settings.isSet('ui', 'tAutoFactory_dd_t1_nav', true);    t2_nav_choice_a = api.settings.isSet('ui', 'tAutoFactory_dd_t2_nav', true)==undefined?'LEVIATHAN':api.settings.isSet('ui', 'tAutoFactory_dd_t2_nav', true);    t1_orb_choice_a = api.settings.isSet('ui', 'tAutoFactory_dd_t1_orb', true)==undefined?'AVENGER':api.settings.isSet('ui', 'tAutoFactory_dd_t1_orb', true);    t2_orb_choice_a = api.settings.isSet('ui', 'tAutoFactory_dd_t2_orb', true)==undefined?'SAME AS LAUNCHER':api.settings.isSet('ui', 'tAutoFactory_dd_t2_orb', true);    t1_nuk_choice_a = api.settings.isSet('ui', 'tAutoFactory_dd_t1_nuk', true)==undefined?'NUKE':api.settings.isSet('ui', 'tAutoFactory_dd_t1_nuk', true);    t1_ank_choice_a = api.settings.isSet('ui', 'tAutoFactory_dd_t1_ank', true)==undefined?'ANTI-NUKE':api.settings.isSet('ui', 'tAutoFactory_dd_t1_ank', true);    function threshold_parse(id) {      return ( (api.settings.isSet('ui', id, true) == undefined?80:api.settings.isSet('ui', id, true)) * 0.01 );    }    t1_bot_metal_threshold  = threshold_parse('tAutoFactory_t1_bot_metal');    t1_bot_energy_threshold = threshold_parse('tAutoFactory_t1_bot_energy');    t2_bot_metal_threshold  = threshold_parse('tAutoFactory_t2_bot_metal');    t2_bot_energy_threshold = threshold_parse('tAutoFactory_t2_bot_energy');    t1_veh_metal_threshold  = threshold_parse('tAutoFactory_t1_veh_metal');    t1_veh_energy_threshold = threshold_parse('tAutoFactory_t1_veh_energy');    t2_veh_metal_threshold  = threshold_parse('tAutoFactory_t2_veh_metal');    t2_veh_energy_threshold = threshold_parse('tAutoFactory_t2_veh_energy');    t1_air_metal_threshold  = threshold_parse('tAutoFactory_t1_air_metal');    t1_air_energy_threshold = threshold_parse('tAutoFactory_t1_air_energy');    t2_air_metal_threshold  = threshold_parse('tAutoFactory_t2_air_metal');    t2_air_energy_threshold = threshold_parse('tAutoFactory_t2_air_energy');    t1_nav_metal_threshold  = threshold_parse('tAutoFactory_t1_nav_metal');    t1_nav_energy_threshold = threshold_parse('tAutoFactory_t1_nav_energy');    t2_nav_metal_threshold  = threshold_parse('tAutoFactory_t2_nav_metal');    t2_nav_energy_threshold = threshold_parse('tAutoFactory_t2_nav_energy');    t1_orb_metal_threshold  = threshold_parse('tAutoFactory_t1_orb_metal');    t1_orb_energy_threshold = threshold_parse('tAutoFactory_t1_orb_energy');    t2_orb_metal_threshold  = threshold_parse('tAutoFactory_t2_orb_metal');    t2_orb_energy_threshold = threshold_parse('tAutoFactory_t2_orb_energy');    t1_nuk_metal_threshold  = threshold_parse('tAutoFactory_t1_nuk_metal');    t1_nuk_energy_threshold = threshold_parse('tAutoFactory_t1_nuk_energy');    t1_ank_metal_threshold  = threshold_parse('tAutoFactory_t1_ank_metal');    t1_ank_energy_threshold = threshold_parse('tAutoFactory_t1_ank_energy');    //parse settings    switch (t1_bot_choice_a) {    case 'GRENADIER':        t1_bot_choice_a = '/pa/units/land/bot_grenadier/bot_grenadier.json';        break;    case 'DOX':        t1_bot_choice_a = '/pa/units/land/assault_bot/assault_bot.json';        break;    case 'FABBER':        t1_bot_choice_a = '/pa/units/land/fabrication_bot/fabrication_bot.json';        break;    case 'COMBAT FABBER':        t1_bot_choice_a = '/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json';        break;    case 'BOOM':        t1_bot_choice_a = '/pa/units/land/bot_bomb/bot_bomb.json';        break;    case 'NONE':        t1_bot_use = 0;        break;    default:        //console.log("tAutoFactory: Unrecognised option (" + t1_bot_choice_a + ")");        break;    }    switch (t2_bot_choice_a) {    case 'SLAMMER':        t2_bot_choice_a = '/pa/units/land/assault_bot_adv/assault_bot_adv.json';        break;    case 'ADV FABBER':        t2_bot_choice_a = '/pa/units/land/fabrication_bot_adv/fabrication_bot_adv.json';        break;    case 'ADV COMBAT FABBER':        t2_bot_choice_a = '/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json';        break;    case 'GIL-E':        t2_bot_choice_a = '/pa/units/land/bot_sniper/bot_sniper.json';        break;    case 'BLUEHAWK':        t2_bot_choice_a = '/pa/units/land/bot_tactical_missile/bot_tactical_missile.json';        break;    case 'SAME AS T1':        t2_bot_use = 0;        break;    default:        //console.log("tAutoFactory: Unrecognised option (" + t2_bot_choice_a + ")");        break;    }    switch (t1_veh_choice_a) {    case 'T1 TANK':        t1_veh_choice_a = '/pa/units/land/tank_light_laser/tank_light_laser.json';        break;    case 'FABBER':        t1_veh_choice_a = '/pa/units/land/fabrication_vehicle/fabrication_vehicle.json';        break;    case 'SKITTER':        t1_veh_choice_a = '/pa/units/land/land_scout/land_scout.json';        break;    case 'SPINNER':        t1_veh_choice_a = '/pa/units/land/aa_missile_vehicle/aa_missile_vehicle.json';        break;    case 'INFERNO':        t1_veh_choice_a = '/pa/units/land/tank_armor/tank_armor.json';        break;    case 'NONE':        t1_veh_use = 0;        break;    default:        //console.log("tAutoFactory: Unrecognised option (" + t1_veh_choice_a + ")");        break;    }    switch (t2_veh_choice_a) {    case 'LEVELER':        t2_veh_choice_a = '/pa/units/land/tank_laser_adv/tank_laser_adv.json';        break;    case 'ADV FABBER':        t2_veh_choice_a = '/pa/units/land/fabrication_vehicle_adv/fabrication_vehicle_adv.json';        break;    case 'VANGUARD':        t2_veh_choice_a = '/pa/units/land/tank_heavy_armor/tank_heavy_armor.json';        break;    case 'SHELLER':        t2_veh_choice_a = '/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json';        break;    case 'SAME AS T1':        t2_veh_use = 0;        break;    default:        //console.log("tAutoFactory: Unrecognised option (" + t2_veh_choice_a + ")");        break;    }    switch (t1_air_choice_a) {    case 'HUMMINGBIRD':        t1_air_choice_a = '/pa/units/air/fighter/fighter.json';        break;    case 'FABBER':        t1_air_choice_a = '/pa/units/air/fabrication_aircraft/fabrication_aircraft.json';        break;    case 'FIREFLY':        t1_air_choice_a = '/pa/units/air/air_scout/air_scout.json';        break;    case 'BUMBLEBEE':        t1_air_choice_a = '/pa/units/air/bomber/bomber.json';        break;    case 'NONE':        t1_air_use = 0;        break;    default:        //console.log("tAutoFactory: Unrecognised option (" + t1_air_choice_a + ")");        break;    }    switch (t2_air_choice_a) {    case 'ADV FABBER':        t2_air_choice_a = '/pa/units/air/fabrication_aircraft_adv/fabrication_aircraft_adv.json';        break;    case 'PELICAN':        t2_air_choice_a = '/pa/units/air/transport/transport.json';        break;    case 'KESTREL':        t2_air_choice_a = '/pa/units/air/gunship/gunship.json';        break;    case 'HORNET':        t2_air_choice_a = '/pa/units/air/bomber_adv/bomber_adv.json';        break;    case 'SAME AS T1':        t2_air_use = 0;        break;    default:        //console.log("tAutoFactory: Unrecognised option (" + t2_air_choice_a + ")");        break;    }    switch (t1_nav_choice_a) {    case 'FABBER':        t1_nav_choice_a = '/pa/units/sea/fabrication_ship/fabrication_ship.json';        break;    case 'SUN FISH':        t1_nav_choice_a = '/pa/units/sea/sea_scout/sea_scout.json';        break;    case 'NARWHAL':        t1_nav_choice_a = '/pa/units/sea/frigate/frigate.json';        break;    case 'ORCA':        t1_nav_choice_a = '/pa/units/sea/destroyer/destroyer.json';        break;    case 'NONE':        t1_nav_use = 0;        break;    default:        //console.log("tAutoFactory: Unrecognised option (" + t1_nav_choice_a + ")");        break;    }    switch (t2_nav_choice_a) {    case 'ADV FABBER':        t2_nav_choice_a = '/pa/units/sea/fabrication_ship_adv/fabrication_ship_adv.json';        break;    case 'LEVIATHAN':        t2_nav_choice_a = '/pa/units/sea/battleship/battleship.json';        break;    case 'STINGRAY':        t2_nav_choice_a = '/pa/units/sea/missile_ship/missile_ship.json';        break;    case 'SAME AS T1':        t2_nav_use = 0;        break;    default:        //console.log("tAutoFactory: Unrecognised option (" + t2_nav_choice_a + ")");        break;    }    switch (t1_orb_choice_a) {//launcher    case 'FABBER':        t1_orb_choice_a = '/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json';        break;    case 'ASTRAEUS':        t1_orb_choice_a = '/pa/units/orbital/orbital_lander/orbital_lander.json';        break;    case 'AVENGER':        t1_orb_choice_a = '/pa/units/orbital/orbital_fighter/orbital_fighter.json';        break;    case 'RADAR SATELLITE':        t1_orb_choice_a = '/pa/units/orbital/radar_satellite/radar_satellite.json';        break;    case 'NONE':        t1_orb_use = 0;        break;    default:        //console.log("tAutoFactory: Unrecognised option (" + t1_orb_choice_a + ")");        break;    }    switch (t2_orb_choice_a) {//factory    case 'ADV RADAR SATELLITE':        t2_orb_choice_a = '/pa/units/orbital/radar_satellite_adv/radar_satellite_adv.json';        break;    case 'SXX LASER':        t2_orb_choice_a = '/pa/units/orbital/orbital_laser/orbital_laser.json';        break;    case 'SOLAR ARRAY':        t2_orb_choice_a = '/pa/units/orbital/solar_array/solar_array.json';        break;    case 'SAME AS LAUNCHER'://special case, as launcher and factory can produce same units        t2_orb_use = 0;        break;    default:        //console.log("tAutoFactory: Unrecognised option (" + t2_orb_choice_a + ")");        break;    }    switch (t1_nuk_choice_a) {    case 'NUKE':        t1_nuk_choice_a = '/pa/units/land/nuke_launcher/nuke_launcher_ammo.json';        break;    case 'NONE':        t1_nuk_use = 0;        break;    default:        //console.log("tAutoFactory: Unrecognised option (" + t1_nuk_choice_a + ")");        break;    }    switch (t1_ank_choice_a) {    case 'ANTI-NUKE':        t1_ank_choice_a = '/pa/units/land/anti_nuke_launcher/anti_nuke_launcher_ammo.json';        break;    case 'NONE':        t1_ank_use = 0;        break;    default:        //console.log("tAutoFactory: Unrecognised option (" + t1_ank_choice_a + ")");        break;    }//console.log("af settings parse complete");    //update    tAutoFactory.update = function (exec_type) {//console.log("af update func");        if (exec_type === undefined) {            exec_type = 'auto';        }        if ( ((exec_type === 'manual') || ((exec_type === 'auto') && !model.hasSelection()))  && model.maxEnergy() !== 0 ) {            //if user hasn't selected anything && we're playing           var one = 1.0,               metal_perc = (model.currentMetal() * one) / model.maxMetal(),//between 0 and 1               energy_perc = (model.currentEnergy() * one) / model.maxEnergy(),//between 0 and 1               selected_enabled = 0;//if idle factories have been selected            if (tAutoFactory.active) {                //if we possibly want to auto-build                if (t2_bot_use === 1 && metal_perc > t2_bot_metal_threshold && energy_perc > t2_bot_energy_threshold) {//before t1                    if(selected_enabled === 0) {                        api.select.allIdleFactories();                        selected_enabled = 1;                    }                    api.unit.build(t2_bot_choice_a, 1, false);                }                if (t1_bot_use === 1 && metal_perc > t1_bot_metal_threshold && energy_perc > t1_bot_energy_threshold) {                    if(selected_enabled === 0) {//select idle factories if we haven't yet                        api.select.allIdleFactories();                        selected_enabled = 1;                    }                    api.unit.build(t1_bot_choice_a, 1, false);                }                if (t2_veh_use === 1 && metal_perc > t2_veh_metal_threshold && energy_perc > t2_veh_energy_threshold) {//before t1                    if(selected_enabled === 0) {                        api.select.allIdleFactories();                        selected_enabled = 1;                    }                    api.unit.build(t2_veh_choice_a, 1, false);                }                if (t1_veh_use === 1 && metal_perc > t1_veh_metal_threshold && energy_perc > t1_veh_energy_threshold) {                    if(selected_enabled === 0) {                        api.select.allIdleFactories();                        selected_enabled = 1;                    }                    api.unit.build(t1_veh_choice_a, 1, false);                }                if (t2_air_use === 1 && metal_perc > t2_air_metal_threshold && energy_perc > t2_air_energy_threshold) {//before t1                    if(selected_enabled === 0) {                        api.select.allIdleFactories();                        selected_enabled = 1;                    }                    api.unit.build(t2_air_choice_a, 1, false);                }                if (t1_air_use === 1 && metal_perc > t1_air_metal_threshold && energy_perc > t1_air_energy_threshold) {                    if(selected_enabled === 0) {                        api.select.allIdleFactories();                        selected_enabled = 1;                    }                    api.unit.build(t1_air_choice_a, 1, false);                }                if (t2_nav_use === 1 && metal_perc > t2_nav_metal_threshold && energy_perc > t2_nav_energy_threshold) {//before t1                    if(selected_enabled === 0) {                        api.select.allIdleFactories();                        selected_enabled = 1;                    }                    api.unit.build(t2_nav_choice_a, 1, false);                }                if (t1_nav_use === 1 && metal_perc > t1_nav_metal_threshold && energy_perc > t1_nav_energy_threshold) {                    if(selected_enabled === 0) {                        api.select.allIdleFactories();                        selected_enabled = 1;                    }                    api.unit.build(t1_nav_choice_a, 1, false);                }                if (t2_orb_use === 1 && metal_perc > t2_orb_metal_threshold && energy_perc > t2_orb_energy_threshold) {//before t1                    if(selected_enabled === 0) {                        api.select.allIdleFactories();                        selected_enabled = 1;                    }                    api.unit.build(t2_orb_choice_a, 1, false);                }                if (t1_orb_use === 1 && metal_perc > t1_orb_metal_threshold && energy_perc > t1_orb_energy_threshold) {                    if(selected_enabled === 0) {                        api.select.allIdleFactories();                        selected_enabled = 1;                    }                    api.unit.build(t1_orb_choice_a, 1, false);                }                if (t1_nuk_use === 1 && metal_perc > t1_nuk_metal_threshold && energy_perc > t1_nuk_energy_threshold) {                    if(selected_enabled === 0) {                        api.select.allIdleFactories();                        selected_enabled = 1;                    }                    api.unit.build(t1_nuk_choice_a, 1, false);                }                if (t1_ank_use === 1 && metal_perc > t1_ank_metal_threshold && energy_perc > t1_ank_energy_threshold) {                    if(selected_enabled === 0) {                        api.select.allIdleFactories();                        selected_enabled = 1;                    }                    api.unit.build(t1_ank_choice_a, 1, false);                }                if(selected_enabled === 1) {                    api.select.empty();                }            }        }    };    //hotkey TODO    //action_sets.tAutoFactory["Manually Execute"] = function(event) { tAutoFactory.manual(); };    //action_sets.tAutoFactory["Toggle Auto-Build"] = function(event) { tAutoFactory.toggle(); };    return tAutoFactory;})();//hotkey TODO//apply_keybinds("tAutoFactory");(function () {    //handler to get ui toggle status    handlers.aftoggle = function(payload) {        //console.log("aftoggle handler activated with payload: "+ payload);        if(payload === 'false')            tAutoFactory.active = false;        else if(payload === 'true')            tAutoFactory.active = true;    };    //update every second    setInterval(tAutoFactory.update, 1000);    //visible to knockout    model.tAutoFactory = tAutoFactory;})();