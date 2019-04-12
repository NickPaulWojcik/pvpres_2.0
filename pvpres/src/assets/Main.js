
$("document").ready(function(){
  $(".item:odd").css("background-color", "#666666");


  $(".item").click(function(){
    if ($(this).hasClass("pulse")){
      $(this).removeClass("pulse");
      toggle = true;
    }
    else {
      $(this).addClass("pulse");
    }
  });
});

var button = $("#searchButton");

button.click(function(){

  var userName = $("#name_input").val();
  var userRealm = $("#realm_input").val();


  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://us.api.battle.net/wow/character/" + userRealm + "/"+ userName + "?fields=pvp&locale=en_US&jsonp=callMe&apikey=ma9uqrhvw6vtt86u6pd7tvq5raanfzrg";
  document.getElementsByTagName("head")[0].appendChild(s);

  var v = document.createElement("script");
  v.type = "text/javascript";
  v.src = "https://us.api.battle.net/wow/character/" + userRealm + "/" + userName + "?fields=stats&locale=en_US&jsonp=callMeToo&apikey=ma9uqrhvw6vtt86u6pd7tvq5raanfzrg";
  document.getElementsByTagName("head")[0].appendChild(v);

  var b = document.createElement("script");
  b.type = "text/javascript";
  b.src = "https://us.api.battle.net/wow/character/" + userRealm + "/" + userName + "?fields=statistics&locale=en_US&jsonp=getDataAgain&apikey=ma9uqrhvw6vtt86u6pd7tvq5raanfzrg";
  document.getElementsByTagName("head")[0].appendChild(b);

  var r = document.createElement("script");
  r.type = "text/javascript";
  r.src = "https://us.api.battle.net/wow/character/" + userRealm + "/" + userName + "?fields=items&locale=en_US&jsonp=getItems&apikey=ma9uqrhvw6vtt86u6pd7tvq5raanfzrg";
  document.getElementsByTagName("head")[0].appendChild(r);
});

function callMe(data){
  $("#nameLabel").text(data.name);
  $("#realmLabel").text(data.realm);
  $("#rbgLabel").text(data.pvp.brackets.ARENA_BRACKET_RBG.rating);
  $("#twoLabel").text(data.pvp.brackets.ARENA_BRACKET_2v2.rating);
  $("#threeLabel").text(data.pvp.brackets.ARENA_BRACKET_3v3.rating);
  $("#levelLabel").text(data.level);

  if(data.class == 1){
    $("#classLabel").text("Warrior");
  }else if(data.class == 2) {
    $("#classLabel").text("Paladin");
  }else if (data.class == 3) {
    $("#classLabel").text("Hunter");
  }else if (data.class == 4) {
    $("#classLabel").text("Rogue");
  }else if (data.class == 5) {
    $("#classLabel").text("Priest");
  }else if (data.class == 6) {
    $("#classLabel").text("Death Knight");
  }else if (data.class == 7) {
    $("#classLabel").text("Shaman");
  }else if (data.class == 8) {
    $("#classLabel").text("Mage");
  }else if (data.class == 9) {
    $("#classLabel").text("Warlock");
  }else if (data.class == 10) {
    $("#classLabel").text("Monk");
  }else if (data.class == 11) {
    $("#classLabel").text("Druid");
  }else if (data.class == 12) {
    $("#classLabel").text("Demon Hunter");
  }
}

function callMeToo(dataToo){
  // $("#hpLabel").text(dataToo.stats.health);
  $("#hp2Label").text(dataToo.stats.health);
  $("#manaLabel").text(dataToo.stats.power);
  $("#staminaLabel").text(dataToo.stats.sta);
  $("#strengthLabel").text(dataToo.stats.str);
  $("#intellectLabel").text(dataToo.stats.int);
  $("#agilityLabel").text(dataToo.stats.agi);
  $("#masteryLabel").text(dataToo.stats.masteryRating);
  $("#criticalLabel").text(dataToo.stats.critRating);
  $("#hasteLabel").text(dataToo.stats.hasteRating);
  $("#versatilityLabel").text(dataToo.stats.versatility);

  $("#achLabel").text(dataToo.achievementPoints);
  $("#hkLabel").text(dataToo.totalHonorableKills);
}

function getDataAgain(dataAgain){
  $("#twoHighLabel").text(dataAgain.statistics.subCategories[9].subCategories[0].statistics[25].quantity);
  $("#threeHighLabel").text(dataAgain.statistics.subCategories[9].subCategories[0].statistics[24].quantity);
  $("#fiveHighLabel").text(dataAgain.statistics.subCategories[9].subCategories[0].statistics[23].quantity);
}

function getItems(datuh){
  $("#shoulderLabel").text(datuh.items.shoulder.itemLevel);
  $("#headLabel").text(datuh.items.head.itemLevel);
  $("#backLabel").text(datuh.items.back.itemLevel);
  $("#neckLabel").text(datuh.items.neck.itemLevel);
  $("#wristLabel").text(datuh.items.wrist.itemLevel);
  $("#chestLabel").text(datuh.items.chest.itemLevel);
  $("#handLabel").text(datuh.items.hands.itemLevel);
  $("#ring1Label").text(datuh.items.finger1.itemLevel);
  $("#ring2Label").text(datuh.items.finger2.itemLevel);
  $("#legLabel").text(datuh.items.legs.itemLevel);
  $("#feetLabel").text(datuh.items.feet.itemLevel);
  try {
    $("#shieldLabel").text(datuh.items.offHand.itemLevel);//MAY BE 2H main or offwep
  }catch(error){
    $("#shieldLabel").text("---");
  }

  $("#waistLabel").text(datuh.items.waist.itemLevel);
  $("#mainLabel").text(datuh.items.mainHand.itemLevel);
  try {
    $("#offLabel").text(datuh.items.offHand.itemLevel);//MAY BE 2H or shield
  }catch(error){
    $("#offLabel").text("---");
  }
  $("#trink1Label").text(datuh.items.trinket1.itemLevel);
  $("#trink2Label").text(datuh.items.trinket2.itemLevel);

  $("#iilLabel").text(datuh.items.averageItemLevel);
  $("#eilLabel").text(datuh.items.averageItemLevelEquipped);
}
