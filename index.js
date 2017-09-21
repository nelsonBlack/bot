'use strict'

const Telegraf = require('telegraf')
const {
  Markup
} = Telegraf

const app = new Telegraf('')
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


app.command('start', ({ reply }) => reply('welcome, i can sell you stuff just ask'))
app.hears(/^what.*/i, ({ replyWithMarkdown }) => replyWithMarkdown('foo'));

app.startPolling()
