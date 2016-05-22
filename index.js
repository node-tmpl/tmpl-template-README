const {resolve} = require('path')
const configUser = require('tmpl-config-user')
const {prompt} = require('inquirer')
const {template} = require('@jigsaw/tmpl')

module.exports = () => {
  configUser().then(user => {
    prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name'
      }, {
        type: 'input',
        name: 'description',
        message: 'Description'
      }
    ]).then(info => {
      template(resolve(__dirname, './assets/README.md.hbs'), {
        user,
        name: info.name,
        description: info.description,
        year: new Date().getFullYear(),
        partition: info.name.replace(/./g, '=')
      }, 'README.md')
    })
  })
}
