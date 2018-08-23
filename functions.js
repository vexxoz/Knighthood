
//not situational variables
var rank = 1;
var battle_log = "How to Play: First you need to name your player. After doing so your player has been created and your stats will be updated. An opponent will actomatically be in battle with you. All thats left is to attack the enemy, you can do this by pressing the attack button. The game will take into account your player stats and attempt to land a successfull hit on your enemy. Be weary, as it may not always hit! The battle log will then update in the middle of the screen. Keep attacking the enemy until he is defeated. CAUTION: IF YOU REFRESH ALL DATA WILL BE LOST!";
var attack_number = 0;
var current_experience = 0;
var level_up_experience = 5;
var upgrade_points = 0;
var sov = 15;
var sod = 3;
var dos = 2;
var tm = 5;
var loos = 25;
var sdch = 4;
var sok = 1;
var bg = 3;
var items = "";
var number_of_sov = 0;
var number_of_sod = 0;
var number_of_dos = 0;
var number_of_tm = 0;
var number_of_loos = 0;
var number_of_sdch = 0;
var number_of_sok = 0;
var number_of_bg = 0;

var enemy_name = "TEST DUMMY";
var enemy_rank = 0;
var enemy_damage = 2;
var enemy_chance_block = 0;
var enemy_attack_speed = 1;
var enemy_chance_hit = 2;
var enemy_health = 10;
var max_enemy_health = 10;
var experience_gain = 5;

document.getElementById("enemy_name").innerHTML = enemy_name;
document.getElementById("enemy_rank").innerHTML = enemy_rank;
document.getElementById("enemy_damage").innerHTML = enemy_damage;
document.getElementById("enemy_chance_block").innerHTML = enemy_chance_block;
document.getElementById("enemy_attack_speed").innerHTML = enemy_attack_speed;
document.getElementById("enemy_health").innerHTML = enemy_health + "/" + max_enemy_health;
document.getElementById("enemy_chance_hit").innerHTML = enemy_chance_hit;
document.getElementById("experience_gain").innerHTML = experience_gain;

function attack(){
    attack_number = 0;
    while(attack_number < attack_speed){
    var hit_probability = Math.floor((Math.random() * 100) + 1);
    //if missed hit
    if(hit_probability > chance_hit){
        battle_log = document.getElementById("battle_log").innerHTML;
        var battle_log_new = "<p id='battle_log_text' >Missed hit!</p>";
        battle_log = battle_log + battle_log_new;
        document.getElementById("battle_log").innerHTML = battle_log;
    // if landed a hit
    }else if (hit_probability <= chance_hit){
        // accounts for the number of attacks
            // probability of enemy block
            var block_probability = Math.floor((Math.random() * 100) + 1);
            
            // enemy blocks
            if (block_probability <= enemy_chance_block){
                battle_log = document.getElementById("battle_log").innerHTML;
                var battle_log_new = "<p id='battle_log_text' >Enemy Blocked a hit!</p>";
                battle_log = battle_log + battle_log_new;
                document.getElementById("battle_log").innerHTML = battle_log;
            // enemy doesn not block
            }else if (block_probability > enemy_chance_block){
                battle_log = document.getElementById("battle_log").innerHTML;
                var battle_log_new = "<p id='battle_log_text' >Hit enemy for " + damage + "!</p>";
                battle_log = battle_log + battle_log_new;
                document.getElementById("battle_log").innerHTML = battle_log;
                enemy_health = enemy_health - damage;
                document.getElementById("enemy_health").innerHTML = enemy_health + "/" + max_enemy_health;
                // checks if you defeated the enemy
                if(enemy_health <= 0){
                    find_items();
                    level_up();
                    new_enemy();
                    end_duel();
                    alert("You have won the duel");
                    return;
                }
            }
        }
    attack_number = attack_number + 1;
    }
    defend();
}

function heal(){
    if(health < max_health - 1){
        health = health + 2;
        document.getElementById("health").innerHTML = health + "/" + max_health;
        var battle_log_new = "<p id='battle_log_text' >Skipped your turn and healed for 2hp!</p>";
        battle_log = battle_log + battle_log_new;
        document.getElementById("battle_log").innerHTML = battle_log;
        defend();
    }
}

function defend(){
    attack_number = 0;
    var hit_probability = Math.floor((Math.random() * 100) + 1);
    //if missed hit
    if(hit_probability > enemy_chance_hit){
        battle_log = document.getElementById("battle_log").innerHTML;
        var battle_log_new = "<p id='battle_log_text_enemy' >Enemy Missed a hit!</p>";
        battle_log = battle_log + battle_log_new;
        document.getElementById("battle_log").innerHTML = battle_log;
    // if landed a hit
    }else if (hit_probability <= enemy_chance_hit){
        // accounts for the number of attacks
        while(attack_number < enemy_attack_speed){
            // probability of enemy block
            var block_probability = Math.floor((Math.random() * 100) + 1);
            // enemy blocks
            if (block_probability <= chance_block){
                battle_log = document.getElementById("battle_log").innerHTML;
                var battle_log_new = "<p id='battle_log_text_enemy' >You Blocked a hit!</p>";
                battle_log = battle_log + battle_log_new;
                document.getElementById("battle_log").innerHTML = battle_log;
            // enemy doesn not block
            }else if (block_probability > chance_block){
                battle_log = document.getElementById("battle_log").innerHTML;
                var battle_log_new = "<p id='battle_log_text_enemy' >You got hit for " + enemy_damage + "!</p>";
                battle_log = battle_log + battle_log_new;
                document.getElementById("battle_log").innerHTML = battle_log;
                health = health - enemy_damage;
                document.getElementById("health").innerHTML = health + "/" + max_health;
                if(health <= 0){
                       location.reload();
                }
            }
            attack_number = attack_number + 1;
        }
        
    }
    document.getElementById("battle_log").scrollTo(0, 50000000);
}

// items

function find_items(){
    var item_probability = Math.floor((Math.random() * 100) + 1);
    if(item_probability <= 3){
        var basic_item_choice = Math.floor((Math.random() * 10) + 1);
        if(basic_item_choice == 1){
            if (number_of_sov < 1){
                alert("You have found the Sword of Valor!");
                items = document.getElementById("items").innerHTML;
                var new_item = "<li>Sword of Valor <button onclick='sov_upgrade()'>Upgrade $550</button><ul><li>+<span id='sov'>5</span> Damage</li</ul></li>";
                items = items + new_item;
                document.getElementById("items").innerHTML = items;
                damage = damage + 5;
                document.getElementById("damage").innerHTML = damage;
            }else{
           
            }
        }else if(basic_item_choice == 2){
            if (number_of_sod < 1){
                alert("You have found the Sheild of Defence!");
                items = document.getElementById("items").innerHTML;
                var new_item = "<li>Sheild of Defence <button onclick='sod_upgrade()'>Upgrade $250</button><ul><li>+<span id='sod'>3</span> Chance of Block</li</ul></li>";
                items = items + new_item;
                document.getElementById("items").innerHTML = items;
                chance_block = chance_block + 3;
                document.getElementById("chance_block").innerHTML = chance_block;
            }else{
                
            }
        }else if(basic_item_choice == 3){
            alert("You have found the Dager of Stealth!");
            items = document.getElementById("items").innerHTML;
            var new_item = "<li>Dager of Stealth <button onclick='dos_upgrade()'>Upgrade $100</button><ul><li>+<span id='dos'>2</span> Damage</li</ul></li>";
            items = items + new_item;
            document.getElementById("items").innerHTML = items;
            damage = damage + 2;
            document.getElementById("damage").innerHTML = damage;
        }else if(basic_item_choice == 4){
            alert("You have found the Training Manual!");
            upgrade_points = upgrade_points +5;
            document.getElementById("upgrade_points").innerHTML = upgrade_points;
        }else if(basic_item_choice == 5){ 
            alert("You have found the Lawyer of OJ Simpson"); 
            items = document.getElementById("items").innerHTML; 
            var new_item = "<li>Lawyer of OJ Simpson <button onclick='loos_upgrade()'>Upgrade $600</button><ul><li>+<span id='loos'>25</span> Chance Block</li</ul></li>"; 
            items = items + new_item; 
            document.getElementById("items").innerHTML = items; 
            chance_block = chance_block + 25; 
            document.getElementById("chance_block").innerHTML = chance_block; 
        }else if(basic_item_choice == 6){ 
            alert("You have found the Self Defense Class Handbook"); 
            items = document.getElementById("items").innerHTML; 
            var new_item = "<li>Self Defense Class Handbook <button onclick='sdch_upgrade()'>Upgrade $300</button><ul><li>+<span id='sdch'>4</span> Chance Block</li</ul></li>"; 
            items = items + new_item; 
            document.getElementById("items").innerHTML = items; 
            chance_block = chance_block + 4; 
            document.getElementById("chance_block").innerHTML = chance_block; 
        }else if(basic_item_choice == 7){ 
            alert("You have found the Scroll of Knowlage"); 
            upgrade_points = upgrade_points + 1; 
            document.getElementById("upgrade_points").innerHTML = upgrade_points; 
        }else if(basic_item_choice == 8){ 
            alert("You have found the Boxing Gloves"); 
            items = document.getElementById("items").innerHTML; 
            var new_item = "<li>Boxing Gloves <button onclick='bg_upgrade()'>Upgrade $150</button><ul><li>+<span id='bg'>3</span> Damage</li</ul></li>"; 
            items = items + new_item; 
            document.getElementById("items").innerHTML = items; 
            damage = damage + 3; 
            document.getElementById("damage").innerHTML = damage; 
        }else if(basic_item_choice == 13){
            var item_probability = Math.floor((Math.random() * 100) + 1);
            if(item_probability >= 50){
                alert("You have found a Life Saver! Health back to full!");
                //items = document.getElementById("items").innerHTML;
                //var new_item = "<li title='+5 Upgrade Points' >Training Manual</li>";
                //items = items + new_item;
                //document.getElementById("items").innerHTML = items;
                health = max_health;     
                document.getElementById("health").innerHTML = health + "/" + max_health;                
            }else{
                   
            }
        }    
        
    }
}

// items pt 2

function sov_upgrade(){
    if(gold >= 550){
        gold = gold - 550;
        document.getElementById("gold").innerHTML = gold;
        damage = damage + 2;
        document.getElementById("damage").innerHTML = damage;
        alert(sov)
        sov = sov + 2;
        alert(sov)
        document.getElementById("sov").innerHTML = sov;
    }
}
function sod_upgrade(){
    if(gold >= 250){
        gold = gold - 250;
        document.getElementById("gold").innerHTML = gold;
        chance_block = chance_block + 2;
        document.getElementById("chance_block").innerHTML = chance_block;
        sod = sod + 2;
        document.getElementById("sod").innerHTML = sod;
    }
}
function dos_upgrade(){
    if(gold >= 100){
        gold = gold - 100;
        document.getElementById("gold").innerHTML = gold;
        damage = damage + 1;
        document.getElementById("damage").innerHTML = damage;
        dos = dos + 1;
        document.getElementById("dos").innerHTML = dos;
    }
}
function tm_upgrade(){
    if(gold >= 200){
        gold = gold - 200;
        document.getElementById("gold").innerHTML = gold;
        upgrade_points = upgrade_points + 1;
        document.getElementById("upgrade_points").innerHTML = upgrade_points;
        tm = tm + 1;
        document.getElementById("tm").innerHTML = tm;
        level_up();
    }
}
function loos_upgrade(){
    if(gold >= 600){
        gold = gold - 600;
        document.getElementById("gold").innerHTML = gold;
        chance_block = chance_block + 5;
        document.getElementById("chance_block").innerHTML = chance_block;
        loos = loos + 5;
        document.getElementById("loos").innerHTML = loos;
    }
}
function sdch_upgrade(){
    if(gold >= 300){
        gold = gold - 300;
        document.getElementById("gold").innerHTML = gold;
        chance_block = chance_block + 3;
        document.getElementById("chance_block").innerHTML = chance_block;
        sdch = sdch + 3;
        document.getElementById("sdch").innerHTML = sdch;
    }
}
function sok_upgrade(){
    if(gold >= 200){
        gold = gold - 200;
        document.getElementById("gold").innerHTML = gold;
        upgrade_points = upgrade_points + 1;
        document.getElementById("upgrade_points").innerHTML = upgrade_points;
        sok = sok + 1;
        document.getElementById("sok").innerHTML = sok;
    }
}
function bg_upgrade(){
    if(gold >= 150){
        gold = gold - 150;
        document.getElementById("gold").innerHTML = gold;
        damage = damage + 2;
        document.getElementById("damage").innerHTML = damage;
        bg = bg + 2;
        document.getElementById("bg").innerHTML = bg;
    }
}


// end of items


function level_up(){
    current_experience = current_experience + experience_gain;
    document.getElementById("current_experience").innerHTML = current_experience;
    if (current_experience >= level_up_experience){
        current_experience = current_experience - level_up_experience;
        document.getElementById("current_experience").innerHTML = current_experience;
        level_up_experience = level_up_experience + Math.floor((Math.random() * 4) + 1);
        document.getElementById("level_up_experience").innerHTML = level_up_experience;
        rank = rank + 1;
        document.getElementById("rank").innerHTML = rank;
        upgrade_points = upgrade_points + 1;
        document.getElementById("upgrade_points").innerHTML = upgrade_points;
    }        
    if (upgrade_points > 0){
        document.getElementById('upgrade_buttons').style.visibility = "visible";
        if(rank == 5){
            document.getElementById('attack_speed_upgrade_button').style.visibility = "visible";
        }
    }   
}

function upgrade_damage(){
    if(upgrade_points > 0){
        damage = damage + 2;
        document.getElementById("damage").innerHTML = damage;
        document.getElementById("damage_map").innerHTML = damage;
        upgrade_points = upgrade_points - 1;
        document.getElementById("upgrade_points").innerHTML = upgrade_points;
        if(upgrade_points <= 0){
            document.getElementById("upgrade_buttons").style.visibility = "hidden";
            document.getElementById("attack_speed_upgrade_button").style.visibility = "hidden";
        }
    }
}
function upgrade_chance_block(){
    if(upgrade_points > 0){
        chance_block = chance_block + 2;
        document.getElementById("chance_block").innerHTML = chance_block;
        document.getElementById("chance_block_map").innerHTML = chance_block;
        upgrade_points = upgrade_points - 1;
        document.getElementById("upgrade_points").innerHTML = upgrade_points;
        if(upgrade_points <= 0){
            document.getElementById("upgrade_buttons").style.visibility = "hidden";
            document.getElementById("attack_speed_upgrade_button").style.visibility = "hidden";
        }        
    }
}
function upgrade_chance_hit(){
    if(upgrade_points > 0){
        chance_hit = chance_hit + 3;
        document.getElementById("chance_hit_map").innerHTML = chance_hit;
        upgrade_points = upgrade_points - 1;
        document.getElementById("upgrade_points").innerHTML = upgrade_points;
        if(upgrade_points <= 0){
            document.getElementById("upgrade_buttons").style.visibility = "hidden";
            document.getElementById("attack_speed_upgrade_button").style.visibility = "hidden";
        }        
    }    
}
function upgrade_health(){
    if(upgrade_points > 0){
        max_health = max_health + 5;
        health = max_health;
        document.getElementById("health_map").innerHTML = health + "/" + max_health;
        upgrade_points = upgrade_points - 1;
        document.getElementById("upgrade_points").innerHTML = upgrade_points;
        if(upgrade_points <= 0){
            document.getElementById("upgrade_buttons").style.visibility = "hidden";
            document.getElementById("attack_speed_upgrade_button").style.visibility = "hidden";
        }        
    }    
}
function attack_speed_upgrade(){
    if(upgrade_points > 0){
        attack_speed = attack_speed + 1;
        document.getElementById("attack_speed_map").innerHTML = attack_speed;
        upgrade_points = upgrade_points - 1;
        document.getElementById("upgrade_points").innerHTML = upgrade_points;
        document.getElementById("attack_speed_upgrade_button").style.visibility = "hidden";
        if(upgrade_points <= 0){
            document.getElementById("upgrade_buttons").style.visibility = "hidden";
        }          
    }    
}

function new_enemy(){
    //gold
    var gold_probability = Math.floor((Math.random() * 30) + 30);
    gold = gold + gold_probability;
    document.getElementById("gold").innerHTML = gold;
    
    enemy_rank = enemy_rank + 1;
    name_picker();
    battle_log = "Started Battle against " + enemy_name;
    document.getElementById("battle_log").innerHTML = battle_log;
    if(enemy_rank < 5){
        enemy_damage = Math.floor((Math.random() * 4) + 1);
        enemy_damage = enemy_damage + rank;
        
        enemy_chance_block = Math.floor((Math.random() * 3) + 0); 
        
        enemy_chance_hit = Math.floor((Math.random() * 5) + 1);
        
        enemy_health = Math.floor((Math.random() * 10) + 10);
        enemy_health = enemy_health + rank; 
        max_enemy_health = enemy_health;
        
        document.getElementById("enemy_name").innerHTML = enemy_name;
        document.getElementById("enemy_rank").innerHTML = enemy_rank;
        document.getElementById("enemy_damage").innerHTML = enemy_damage;
        document.getElementById("enemy_chance_block").innerHTML = enemy_chance_block;
        document.getElementById("enemy_attack_speed").innerHTML = enemy_attack_speed;
        document.getElementById("enemy_chance_hit").innerHTML = enemy_chance_hit;
        document.getElementById("enemy_health").innerHTML = enemy_health + "/" + max_enemy_health;
    }else if(enemy_rank >= 5 && enemy_rank < 15){
        enemy_damage = Math.floor((Math.random() * 4) + 5);
        enemy_damage = enemy_damage + rank;
        
        enemy_chance_block = Math.floor((Math.random() * 5) + 0); 
        
        enemy_chance_hit = Math.floor((Math.random() * 4) + 2);
        enemy_chance_hit = enemy_chance_hit + rank;
        if(enemy_chance_hit > 25){
            enemy_chance_hit = 25;   
        }
        enemy_health = Math.floor((Math.random() * 9) + 5);
        enemy_health = enemy_health + rank; 
        max_enemy_health = enemy_health;
        experience_gain = 8;
        
        document.getElementById("experience_gain").innerHTML = experience_gain;
        document.getElementById("enemy_name").innerHTML = enemy_name;
        document.getElementById("enemy_rank").innerHTML = enemy_rank;
        document.getElementById("enemy_damage").innerHTML = enemy_damage;
        document.getElementById("enemy_chance_block").innerHTML = enemy_chance_block;
        document.getElementById("enemy_attack_speed").innerHTML = enemy_attack_speed;
        document.getElementById("enemy_chance_hit").innerHTML = enemy_chance_hit;
        document.getElementById("enemy_health").innerHTML = enemy_health + "/" + max_enemy_health;
    }else if(enemy_rank >= 15 && enemy_rank < 25){
        enemy_damage = Math.floor((Math.random() * 25) + 10);
        enemy_damage = enemy_damage + rank;
        
        enemy_chance_block = Math.floor((Math.random() * 15) + 0); 
        enemy_chance_block = enemy_chance_block, + rank;
        if(enemy_chance_block > 25){
            enemy_chance_block = 25;   
        }        
        
        enemy_chance_hit = Math.floor((Math.random() * 11) + 25);
        enemy_chance_hit = enemy_chance_hit + rank;
        if(enemy_chance_hit > 25){
            enemy_chance_hit = 25;   
        }
        enemy_health = Math.floor((Math.random() * 35) + 20);
        enemy_health = enemy_health + rank; 
        max_enemy_health = enemy_health;
        experience_gain = 15;
        
        document.getElementById("experience_gain").innerHTML = experience_gain;
        document.getElementById("enemy_name").innerHTML = enemy_name;
        document.getElementById("enemy_rank").innerHTML = enemy_rank;
        document.getElementById("enemy_damage").innerHTML = enemy_damage;
        document.getElementById("enemy_chance_block").innerHTML = enemy_chance_block;
        document.getElementById("enemy_attack_speed").innerHTML = enemy_attack_speed;
        document.getElementById("enemy_chance_hit").innerHTML = enemy_chance_hit;
        document.getElementById("enemy_health").innerHTML = enemy_health + "/" + max_enemy_health;
    }
}

function end_duel(){
    document.getElementById("name_map").innerHTML = name;
    document.getElementById("rank_map").innerHTML = rank;
    document.getElementById("damage_map").innerHTML = damage;
    document.getElementById("chance_block_map").innerHTML = chance_block;
    document.getElementById("attack_speed_map").innerHTML = attack_speed;
    document.getElementById("chance_hit_map").innerHTML = chance_hit;
    document.getElementById("health_map").innerHTML = health + "/" + max_health;
    document.getElementById("current_experience_map").innerHTML = current_experience;
    document.getElementById("level_up_experience_map").innerHTML = level_up_experience;
    document.getElementById("gold_map").innerHTML = gold;
    document.getElementById("items_map").innerHTML = items;
    if (current_location == "rotterhye"){
        document.getElementById("rotterhye_town").style.visibility = "visible";
    }else if(current_location == "garethdale"){
        document.getElementById("garethdale_town").style.visibility = "visible";   
    }else if(current_location == "oldfernan"){
        document.getElementById("oldfernan_town").style.visibility = "visible";        
    }else if(current_location == "shireston"){
        document.getElementById("shireston_town").style.visibility = "visible";   
    }
    document.getElementById("all_map").style.visibility = "visible";
    document.getElementById("battle_screen").style.visibility = "hidden";
}

function name_picker(){
    var name_probability = Math.floor((Math.random() * 37) + 1);
    switch (name_probability) {
        case 1: enemy_name = "Adam";
        break;
        case 2: enemy_name = "Geoffrey";
        break;
        case 3: enemy_name = "Gilbert";
        break;
        case 4: enemy_name = "Henry";
        break;            
        case 5: enemy_name = "Hugh";
        break;
        case 6: enemy_name = "John";
        break;
        case 7: enemy_name = "Nicholas";
        break;
        case 8: enemy_name = "Peter";
        break;
        case 9: enemy_name = "Ralf";
        break;
        case 10: enemy_name = "Richard";
        break;
        case 11: enemy_name = "Robert";
        break;    
        case 12: enemy_name = "Roger";
        break;     
        case 13: enemy_name = "Simon";
        break;     
        case 14: enemy_name = "Thomas";
        break;     
        case 15: enemy_name = "Walter";
        break;     
        case 16: enemy_name = "William";
        break;   
        case 17: enemy_name = "Dederick";
        break;               
        case 18: enemy_name = "Terry";
        break;       
        case 19: enemy_name = "Tybalt";
        break;       
        case 20: enemy_name = "Tibbott";
        break;       
        case 21: enemy_name = "Tim";
        break;       
        case 22: enemy_name = "Garnet";
        break;       
        case 23: enemy_name = "Garin";
        break;       
        case 24: enemy_name = "Wymark";
        break;       
        case 25: enemy_name = "Sander";
        break;       
        case 26: enemy_name = "Venyse";
        break;       
        case 27: enemy_name = "Adrien";
        break;       
        case 28: enemy_name = "Benedicus";
        break;       
        case 29: enemy_name = "Thonyn";
        break;       
        case 30: enemy_name = "Augustinus";
        break;       
        case 31: enemy_name = "Clairac";
        break;       
        case 32: enemy_name = "Cressin";
        break;       
        case 33: enemy_name = "Julien";
        break;       
        case 34: enemy_name = "Jolyon";
        break;       
        case 35: enemy_name = "Paton";
        break;       
        case 36: enemy_name = "Phytheon";
        break;       
        case 37: enemy_name = "Veitel";
        break;       
        case 38: enemy_name = "Vincentius";
        break;                   
    }
}