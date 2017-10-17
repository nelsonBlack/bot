'use strict'

const Telegraf = require('telegraf')
const {
  Markup
} = Telegraf

const app = new Telegraf('<telegram api token>')
// const PAYMENT_TOKEN = ''

const products = [{
    name: 'Tomato Sauce',
    price: 500,
    description: 'Sweet and thick',
    photoUrl: 'http://www.hunts.com/sites/g/files/qyyrlu211/files/images/products/no-salt-added-ketchup-40824.png'
  },
  {
    name: 'Chilli Sauce',
    price: 500,
    description: 'hot and good!',
    photoUrl: 'http://www.hunts.com/sites/g/files/qyyrlu211/files/images/products/no-salt-added-ketchup-40824.png'

  },
  {
    name: 'Sour Sauce',
    price: 500,
    description: 'Sweet and sour',
    photoUrl: 'http://www.hunts.com/sites/g/files/qyyrlu211/files/images/products/no-salt-added-ketchup-40824.png'

  }
]


app.command('start', ({
  reply
}) => reply('welcome, i can sell you stuff just ask'))
// regex to reply when user enters anything with what
app.hears(/^what.*/i, ({
  replyWithMarkdown
}) => replyWithMarkdown(`Let me show you my products!
  ${products.reduce((acc, p) => acc += `*${p.name}* - ${p.price} KES\n`, '')}
  What do You want?`, Markup.keyboard(products.map(p => p.name)).oneTime().resize().extra()));


app.startPolling()
