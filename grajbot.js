#! /usr/bin/node
const { Telegraf, Markup } = require('telegraf')
const fs = require('fs');

var token = null
// npm -i telegraf
const bot = new Telegraf(token)

bot.command('balance', (ctx) => {
  fs.readFile('./grajbot.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
    else {
      let grajbot1 = JSON.parse(data)
      bal = JSON.stringify(grajbot1[ctx.message.from.id])
      if (bal == null) {
      let obj = {
            [ctx.message.from.id]: 100
      };
      var obj4 = Object.assign({}, grajbot1, obj);
        fs.writeFile('./grajbot.json', JSON.stringify(obj4, null, 4), (err) => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            }
          else {return ctx.reply('zarejestrowano użytkownika')}
        });

      }
      else {return ctx.telegram.sendMessage(ctx.message.chat.id, '<b><a href="tg://user?id='+ctx.message.from.id+'">'+ctx.message.from.first_name+'</a>\'s balance : </b>'+bal+'\n', { parse_mode: 'HTML' }) && ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id)
      }
    }
})
})

bot.start((ctx) => ctx.reply('Well cum'))

bot.command('jackpot', (ctx) => {
fs.readFile('./grajbot.json', 'utf8', (err, data,) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {
      let grajbot = JSON.parse(data);
      bal = JSON.stringify(grajbot[ctx.message.from.id]);
      if (bal == null) {
      let obj = {
            [ctx.message.from.id]: 100
      };
      var obj4 = Object.assign({}, grajbot, obj);
        fs.writeFile('./grajbot.json', JSON.stringify(obj4, null, 4), (err) => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            }
        });

      }
      else {
      bal = parseFloat(bal);
  if (parseFloat(ctx.message.text.slice(16)) > 0.0001) {
  return ctx.telegram.sendMessage( ctx.message.chat.id, jackpot_func(ctx.message.from.id,(Math.round(parseFloat(ctx.message.text.slice(16)) * (10 ^ 4)) / (10 ^4)), bal, grajbot, ctx.message.from.first_name), { parse_mode: 'HTML'} ) && ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id) || console.log('brak uprawnień admina')
  }
 else if ((ctx.message.text.slice(17)) === "all" ) {
 return ctx.telegram.sendMessage( ctx.message.chat.id, jackpot_func(ctx.message.from.id, bal, bal, grajbot, ctx.message.from.first_name), { parse_mode: 'HTML'} ) && ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id) || console.log('brak uprawnień admina')
        }
  else {
    if (parseFloat(ctx.message.text.slice(8)) > 0.0001) {
  return ctx.telegram.sendMessage( ctx.message.chat.id, jackpot_func(ctx.message.from.id,(Math.round(parseFloat(ctx.message.text.slice(8)) * (10 ^ 4)) / (10 ^4)), bal, grajbot, ctx.message.from.first_name), { parse_mode: 'HTML'} ) && ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id) || console.log('brak uprawnień admina')
  }
 else if ((ctx.message.text.slice(8)) === "all" ) {
 return ctx.telegram.sendMessage( ctx.message.chat.id, jackpot_func(ctx.message.from.id, bal, bal, grajbot, ctx.message.from.first_name), { parse_mode: 'HTML'} ) && ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id) || console.log('brak uprawnień admina')
        }
    else {
    return ctx.reply('/jackpot@grajbot <amount>')} //&& ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id) || console.log('brak uprawnień admina')
}}}})})

function jackpot_func(user_id,value, bal, grajbot, name) {
          if ( value > bal) {
            return 'nie masz wystarczającej ilości coinów'
          } else {
            console.log(bal)
          var points = 0
  var rnum = ((Math.round(Math.random() * 70)) / 100) + 0.8
  var message = ''
  var lresult = ''
  var color_tab = ['🍓', '🍌', '🥝', '🍊', '🥜']
  for ( var i = 0; i < 4; i++) {
    var presult = Math.floor(Math.random() * 50)
    if (presult == 5 || presult == 1|| presult == 13) { presult = 50; lresult +='🥥'}
    else if (presult == 8) { presult == 49; lresult +='🍊' }
    else { lresult += color_tab[((presult -(presult % 10)) / 10)] }
    switch(((presult - (presult % 10)) / 10)) {
      case 0:
        points += 20;
        break;
      case 1:
        points += 13;
        break;
      case 2:
        break;
        points += 7;
        break;
      case 3:
        points += 3;
        break;
      case 4:
        points += 1;
        break;
      case 5:
        points += 25;
    }
  }
            console.log('1: '+bal)
  //              1   2    3   4  5  6  7   8   9  10
    var prizepool = [0, 0.2, 0.5, 0.7, 1, 1.5, 2, 4, 8, 10]
    var modulo = points % 10
    var valm=1
    if ((Math.round(bal)).toString().length >= 8) { valm = 10} else { valm = 1}
            console.log(valm);
            console.log(Math.round(bal).toString().length)
    var prize = (Math.round((prizepool[(points - modulo) / 10] * rnum * value / valm * (10^4)) / (10 ^ 4)))
    if (prize >= value ) { prize = prize - value}
  else { prize = prize - value}
  message = '<b><a href="tg://user?id='+user_id+'">'+name+'</a> bet: </b>'+value+'\nresult: '+lresult+' <b>x'+rnum+'\nprofit</b> '+prize+'\nbalance: '+ parseFloat(bal + prize)

let obj = {
            [user_id]: parseFloat(bal) + parseFloat(prize)
      };
      var obj4 = Object.assign({}, grajbot, obj);
        fs.writeFile('./grajbot.json', JSON.stringify(obj4, null, 4), (err) => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            }
        });
            console.log('2: '+prize)

  return message
}}

bot.command('/help', (ctx) => {

  ctx.telegram.sendMessage( ctx.message.chat.id, `Lista komend:
  /help
  /jackpot <amount>
  /balance`, { reply_to_message_id: ctx.message.message_id})
    })
bot.on('text', (ctx) => {
  if (ctx.message.text.slice(0,1) == '+') {
  if (parseFloat(ctx.message.text.slice(1)) > 0.000001) {
fs.readFile('./grajbot.json', 'utf8', (err, data,) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {
      if ((ctx.message.reply_to_message) == null) {return ctx.reply('nie wskazano adresata')}
      else{
      let donate = ctx.message.text.slice(1);
      donate = (Math.round(donate * 1000)) / 1000;
      let grajbot = JSON.parse(data);
      bal = JSON.stringify(grajbot[ctx.message.from.id]);
      fbal = JSON.stringify(grajbot[ctx.message.reply_to_message.from.id]);
        if (bal == fbal) { donate = 0 };
        if (donate > bal ) {ctx.reply('nie masz wystarczającej ilości grajcoinów'); donate = 0} else if (fbal == null) { fbal = 100}
      let obj = {
            [ctx.message.from.id]: (parseFloat(bal) - parseFloat(donate)),
            [ctx.message.reply_to_message.from.id]: (parseFloat(fbal) + parseFloat(donate))
      };
      var obj4 = Object.assign({}, grajbot, obj);
        fs.writeFile('./grajbot.json', JSON.stringify(obj4, null, 4), (err) => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            }
          else {return ctx.reply('przekazano '+donate+' grajcoinów')}
        });}
    }})}
    else if (ctx.message.text.slice(2,5) == 'all') {
fs.readFile('./grajbot.json', 'utf8', (err, data,) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {
      if ((ctx.message.reply_to_message) == null) {return ctx.reply('nie wskazano adresata')}
      else{
      let grajbot = JSON.parse(data);
      bal = JSON.stringify(grajbot[ctx.message.from.id]);
      fbal = JSON.stringify(grajbot[ctx.message.reply_to_message.from.id]);
        if (bal == fbal) { return ctx.reply('418')};
        if (fbal == null) { fbal = 100}
      let obj = {
            [ctx.message.from.id]: 0,
            [ctx.message.reply_to_message.from.id]: (parseFloat(fbal) + parseFloat(bal))
      };
      var obj4 = Object.assign({}, grajbot, obj);
        fs.writeFile('./grajbot.json', JSON.stringify(obj4, null, 4), (err) => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            }
          else {return ctx.reply('przekazano '+bal+' grajcoinów')}
        })}
    }})}
    else{ return ctx.reply('zbyt mała kwota')}
  }
 else {}
})

bot.launch()
