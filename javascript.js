var story_log = "<p>James: Wake up! Wake up!</p><p>You: Uhhgg.. Leave me alone! I'm tryin' to sleep!</p><p>James: The Army General is here! he's recruitin'.</p><p>You: Ok, ok. I' getting up.</p><p><i>Army General knocks on door</i></p><p>General: Open up. It's the General.</p><p>James: Yes, sir. Comin', sir.</p><p><i>James opens door</i></p><p>General: Ahh. Nice to meet ya. Whats your name, young lad?</p><p>James: James, sir.</p><p>General: How about you?</p><p>You: Allo, sir. I'm <input type='text' id='name_req' />.</p><p>General: So, are either of you lads intersted in the army?</p><p>James: No, sir. I gotta take care of my mum. She ain't in the best of shape, sir.</p><p>General: Sorry to hear that. Well.. what about you?</p><p>You: <button id='join_army' onclick='join_army()'>Join</button><button onclick='dont_join_army()' id='dont_join_army'>Dont Join</button></p>";
document.getElementById("story_log").innerHTML = story_log;
function join_army(){
    var name = document.getElementById("name_req").innerHTML;
    var favor = "loyalist";
    var story_log_new = "<p>General: Great! But of course you'll have to fight to prove you're worthy.</p><p>You: <button onclick='army_first_test_duel()'>lets fight!</button></p>";
    var story_log = document.getElementById("story_log").innerHTML;
    story_log = story_log + story_log_new;
    document.getElementById("story_log").innerHTML = story_log;
    var damage = 5;
    var chance_block = 0;
    var attack_speed = 1;
    var chance_hit = 5;
    var health = 20;
    var max_health = 20;    
    var gold = 50;   
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
}
function dont_join_army(){
    var name = document.getElementById("name_req").innerHTML;
    var favor = "neutral";
    var story_log_new = "<p>General: Well, thats all right. Good luck to both of ya. Goodbye.</p><p>You: Bye, sir.</p><p>James: Nice to meet ya.</p><p><button onclick='cont()'>Continue</button></p>";
    var story_log = document.getElementById("story_log").innerHTML;
    story_log = story_log + story_log_new;
    document.getElementById("story_log").innerHTML = story_log;    
    var damage = 5;
    var chance_block = 0;
    var attack_speed = 1;
    var chance_hit = 5;
    var health = 20;
    var max_health = 20;    
    var gold = 50;    
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
}
function cont(){
    story_log = "";
    document.getElementById("story_log").style.visibility = "hidden";
    document.getElementById("stats_map").style.visibility = "visible";
    document.getElementById("stats_img_map").style.visibility = "visible";
    document.getElementById("map_and_marks").style.visibility = "visible";
}

var current_location = "garethdale";

$(document).ready(function(){
    
    
    $("#rotterhye").click(function(){
        if(current_location == "garethdale"){
            $("#character_icon").animate({
                top: "-328px",
                left: "344px"
            }, 1500);
            $("#character_icon").animate({
                top: "-154px",
                left: "205px"
            }, 1500);
            current_location = "rotterhye";
            setTimeout(function(){ 
                document.getElementById("rotterhye_town").style.visibility = "visible";
                document.getElementById("map_and_marks").style.visibility = "hidden";
            }, 3100);            
        }else if(current_location == "oldfernan"){
            $("#character_icon").animate({
                top: "-154px",
                left: "205px"
            }, 1500);
            current_location = "rotterhye";
            setTimeout(function(){ 
                document.getElementById("rotterhye_town").style.visibility = "visible";
                document.getElementById("map_and_marks").style.visibility = "hidden";
            }, 1600);            
        }else if(current_location == "shireston"){
            $("#character_icon").animate({
                top: "-154px",
                left: "637px"
            }, 1500);
            $("#character_icon").animate({
                top: "-154px",
                left: "205px"
            }, 1500); 
            current_location = "rotterhye";
            setTimeout(function(){ 
                document.getElementById("rotterhye_town").style.visibility = "visible";
                document.getElementById("map_and_marks").style.visibility = "hidden";
            }, 3100);            
        }else if(current_location == "rotterhye"){
            document.getElementById("rotterhye_town").style.visibility = "visible";
            document.getElementById("map_and_marks").style.visibility = "hidden";            
        }
        
    });

    $("#garethdale").click(function(){
        if(current_location == "rotterhye"){
            $("#character_icon").animate({
                top: "-328px",
                left: "344px"
            }, 1500);
            $("#character_icon").animate({
                top: "-367px",
                left: "148px"
            }, 1500);
            current_location = "garethdale";
            setTimeout(function(){ 
                document.getElementById("garethdale_town").style.visibility = "visible";
                document.getElementById("map_and_marks").style.visibility = "hidden";
            }, 3100);
        }else if(current_location == "oldfernan"){
            $("#character_icon").animate({
                top: "-328px",
                left: "344px"
            }, 1500);
            $("#character_icon").animate({
                top: "-367px",
                left: "148px"
            }, 1500);          
            current_location = "garethdale";
            setTimeout(function(){ 
                document.getElementById("garethdale_town").style.visibility = "visible";
                document.getElementById("map_and_marks").style.visibility = "hidden";
            }, 3100);         
        }else if(current_location == "shireston"){
            $("#character_icon").animate({
                top: "-154px",
                left: "637px"
            }, 1500);
            $("#character_icon").animate({
                top: "-199px",
                left: "393px"
            }, 1500);
            $("#character_icon").animate({
                top: "-328px",
                left: "344px"
            }, 1500);
            $("#character_icon").animate({
                top: "-367px",
                left: "148px"
            }, 1500);            
            current_location = "garethdale";
            setTimeout(function(){ 
                document.getElementById("garethdale_town").style.visibility = "visible";
                document.getElementById("map_and_marks").style.visibility = "hidden";
            }, 6100);               
        }else if(current_location == "garethdale"){
            document.getElementById("garethdale_town").style.visibility = "visible";
            document.getElementById("map_and_marks").style.visibility = "hidden";           
        }
        
    });    


    $("#oldfernan").click(function(){
        if(current_location == "rotterhye"){
            $("#character_icon").animate({
                top: "-199px",
                left: "393px"
            }, 1500);
            current_location = "oldfernan";
            setTimeout(function(){ 
                document.getElementById("oldfernan_town").style.visibility = "visible";
                document.getElementById("map_and_marks").style.visibility = "hidden";
            }, 1600);              
        }else if(current_location == "garethdale"){
            $("#character_icon").animate({
                top: "-328px",
                left: "344px"
            }, 1500);
            $("#character_icon").animate({
                top: "-199px",
                left: "393px"
            }, 1500);         
            current_location = "oldfernan";
            setTimeout(function(){ 
                document.getElementById("oldfernan_town").style.visibility = "visible";
                document.getElementById("map_and_marks").style.visibility = "hidden";
            }, 3100);                
        }else if(current_location == "shireston"){
            $("#character_icon").animate({
                top: "-154px",
                left: "637px"
            }, 1500);
            $("#character_icon").animate({
                top: "-199px",
                left: "393px"
            }, 1500);          
            current_location = "oldfernan";
            setTimeout(function(){ 
                document.getElementById("oldfernan_town").style.visibility = "visible";
                document.getElementById("map_and_marks").style.visibility = "hidden";
            }, 3100);    
        }else if(current_location == "oldfernan"){
            document.getElementById("oldfernan_town").style.visibility = "visible";
            document.getElementById("map_and_marks").style.visibility = "hidden";
        }

    });  
    
    
    $("#shireston").click(function(){
        if(current_location == "rotterhye"){
            $("#character_icon").animate({
                top: "-154px",
                left: "637px"
            }, 1500);
            $("#character_icon").animate({
                top: "-338px",
                left: "626px"
            }, 1500);              
            current_location = "shireston";
            setTimeout(function(){ 
                document.getElementById("shireston_town").style.visibility = "visible";
                document.getElementById("map_and_marks").style.visibility = "hidden";
            }, 3100);            
        }else if(current_location == "garethdale"){
            $("#character_icon").animate({
                top: "-328px",
                left: "344px"
            }, 1500);
            $("#character_icon").animate({
                top: "-199px",
                left: "393px"
            }, 1500);      
            $("#character_icon").animate({
                top: "-154px",
                left: "637px"
            }, 1500);
            $("#character_icon").animate({
                top: "-338px",
                left: "626px"
            }, 1500);              
            current_location = "shireston";
            setTimeout(function(){ 
                document.getElementById("shireston_town").style.visibility = "visible";
                document.getElementById("map_and_marks").style.visibility = "hidden";
            }, 6100);            
        }else if(current_location == "oldfernan"){
            $("#character_icon").animate({
                top: "-154px",
                left: "637px"
            }, 1500);
            $("#character_icon").animate({
                top: "-338px",
                left: "626px"
            }, 1500);          
            current_location = "shireston";
            setTimeout(function(){ 
                document.getElementById("shireston_town").style.visibility = "visible";
                document.getElementById("map_and_marks").style.visibility = "hidden";
            }, 3100);            
        }else if(current_location == "shireston"){
            document.getElementById("shireston_town").style.visibility = "visible";
            document.getElementById("map_and_marks").style.visibility = "hidden";
        }

    });      
    
    

}); 

function back_to_map(){
    document.getElementById("rotterhye_town").style.visibility = "hidden";
    document.getElementById("shireston_town").style.visibility = "hidden";
    document.getElementById("oldfernan_town").style.visibility = "hidden";
    document.getElementById("garethdale_town").style.visibility = "hidden";
    document.getElementById("map_and_marks").style.visibility = "visible";
    document.getElementById("training_list").style.visibility = "hidden";
    document.getElementById("training_list").style.position = "absolute";
    document.getElementById("shop_list").style.visibility = "hidden";
    document.getElementById("shop_list").style.position = "absolute";     
}

function duel(){
    if (current_location == "oldfernan"){
        var duel_probability = Math.floor((Math.random() * 100) + 1);
        if (duel_probability < 25){
        document.getElementById("all_map").style.visibility = "hidden";
        document.getElementById("rotterhye_town").style.visibility = "hidden";
        document.getElementById("shireston_town").style.visibility = "hidden";
        document.getElementById("garethdale_town").style.visibility = "hidden";
        document.getElementById("oldfernan_town").style.visibility = "hidden";
        document.getElementById("battle_screen").style.visibility = "visible";
        document.getElementById("name").innerHTML = name;
        document.getElementById("rank").innerHTML = rank;
        document.getElementById("damage").innerHTML = damage;
        document.getElementById("chance_block").innerHTML = chance_block;
        document.getElementById("attack_speed").innerHTML = attack_speed;
        document.getElementById("chance_hit").innerHTML = chance_hit;
        document.getElementById("health").innerHTML = health + "/" + max_health;
        document.getElementById("current_experience").innerHTML = current_experience;
        document.getElementById("level_up_experience").innerHTML = level_up_experience;
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("items").innerHTML = items;
        document.getElementById("experience_gain").innerHTML = experience_gain;
        document.getElementById("enemy_name").innerHTML = enemy_name;
        document.getElementById("enemy_rank").innerHTML = enemy_rank;
        document.getElementById("enemy_damage").innerHTML = enemy_damage;
        document.getElementById("enemy_chance_block").innerHTML = enemy_chance_block;
        document.getElementById("enemy_attack_speed").innerHTML = enemy_attack_speed;
        document.getElementById("enemy_chance_hit").innerHTML = enemy_chance_hit;
        document.getElementById("enemy_health").innerHTML = enemy_health + "/" + max_enemy_health;
        }else{
            alert("You could not find anyone to duel with!");     
        }
    }else{
        var duel_probability = Math.floor((Math.random() * 100) + 1);
        if (duel_probability < 65){
        document.getElementById("all_map").style.visibility = "hidden";
        document.getElementById("rotterhye_town").style.visibility = "hidden";
        document.getElementById("shireston_town").style.visibility = "hidden";
        document.getElementById("garethdale_town").style.visibility = "hidden";
        document.getElementById("oldfernan_town").style.visibility = "hidden";
        document.getElementById("battle_screen").style.visibility = "visible";
        document.getElementById("name").innerHTML = name;
        document.getElementById("rank").innerHTML = rank;
        document.getElementById("damage").innerHTML = damage;
        document.getElementById("chance_block").innerHTML = chance_block;
        document.getElementById("attack_speed").innerHTML = attack_speed;
        document.getElementById("chance_hit").innerHTML = chance_hit;
        document.getElementById("health").innerHTML = health + "/" + max_health;
        document.getElementById("current_experience").innerHTML = current_experience;
        document.getElementById("level_up_experience").innerHTML = level_up_experience;
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("items").innerHTML = items;
        document.getElementById("experience_gain").innerHTML = experience_gain;
        document.getElementById("enemy_name").innerHTML = enemy_name;
        document.getElementById("enemy_rank").innerHTML = enemy_rank;
        document.getElementById("enemy_damage").innerHTML = enemy_damage;
        document.getElementById("enemy_chance_block").innerHTML = enemy_chance_block;
        document.getElementById("enemy_attack_speed").innerHTML = enemy_attack_speed;
        document.getElementById("enemy_chance_hit").innerHTML = enemy_chance_hit;
        document.getElementById("enemy_health").innerHTML = enemy_health + "/" + max_enemy_health;
        }else{
            alert("You could not find anyone to duel with!");   
        }
    }
}

function tavern(){
    if(gold >= 75){
        gold = gold - 75;
        health =  health + 15
        if(health > max_health){
            health = max_health;   
        }
        document.getElementById("gold_map").innerHTML = gold;
        document.getElementById("health_map").innerHTML = health + "/" + max_health;     
    }else{
        alert("You do not have enough gold to stay at the Tavern");
    }
}

function shop(){
    if (document.getElementById("shop_list").style.visibility === "hidden"){
        document.getElementById("shop_list").style.visibility = "visible";
        document.getElementById("shop_list").style.position = "relative";
    }else{
        document.getElementById("shop_list").style.visibility = "hidden";
        document.getElementById("shop_list").style.position = "absolute";    
    }
}
function training_camp(){
    if (document.getElementById("training_list").style.visibility === "hidden"){
        document.getElementById("training_list").style.visibility = "visible";
        document.getElementById("training_list").style.position = "relative";
    }else{
        document.getElementById("training_list").style.visibility = "hidden";
        document.getElementById("training_list").style.position = "absolute";    
    }
}

function lightning_sword(){
    if (gold >= 4500){
        items = document.getElementById("items").innerHTML;
        var new_item = "<li>Lightning Sword<ul><li>+<span>20</span> Damage</li</ul></li>";
        items = items + new_item;
        document.getElementById("items_map").innerHTML = items;
        damage = damage + 20;
        document.getElementById("damage_map").innerHTML = damage;
    }
}

function fire_blade(){
    if (gold >= 2500){
        items = document.getElementById("items").innerHTML;
        var new_item = "<li>Fire Blade<ul><li>+<span>10</span> Damage</li</ul></li>";
        items = items + new_item;
        document.getElementById("items_map").innerHTML = items;
        damage = damage + 10;
        document.getElementById("damage_map").innerHTML = damage;
    }    
}

function mace_forgotten_souls(){
    if (gold >= 7000){
        items = document.getElementById("items").innerHTML;
        var new_item = "<li>Mace of Forgotten Souls<ul><li>+<span>32</span> Damage</li</ul></li>";
        items = items + new_item;
        document.getElementById("items_map").innerHTML = items;
        damage = damage + 32;
        document.getElementById("damage_map").innerHTML = damage;
    }    
}
function train_hit_chance(){
    if (gold >= 5000){
        chance_hit = chance_hit + 5;
        document.getElementById("chance_hit_map").innerHTML = chance_hit;
    }    
}
function train_block_chance(){
    if (gold >= 6000){
        chance_block = chance_block + 5;
        document.getElementById("chance_block_map").innerHTML = chance_block;
    }    
}
function train_attack_speed(){
    if (gold >= 10000){
        attack_speed = attack_speed + 1;
        document.getElementById("attack_speed_map").innerHTML = attack_speed;
    }    
}    
function train_damage(){
    if (gold >= 4000){
        damage = damage + 7;
        document.getElementById("damage_map").innerHTML = damage;
    }    
}        