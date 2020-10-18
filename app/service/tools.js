'use strict'

const { Service } = require('egg')
const nodemailer = require('nodemailer')

const userEmail = '1018513521@qq.com'
const transporter = nodemailer.createTransport({
  service: 'qq',
  secureConnection: true,
  auth: {
    user: userEmail,
    pass: '123456',
  },
})

class ToolService extends Service {
  async sendMail(email, subject, text, html) {
    const mailOptions = {
      from: userEmail,
      cc: userEmail,
      to: email,
      subject,
      text,
      html,
    }
    try {
      await transporter.sendMail(mailOptions)
    } catch (err) {
      console.log('email error', err)
    }
  }
}

module.exports = ToolService
