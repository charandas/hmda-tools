const csvParse = require('csv-parse/lib/sync')
const fs = require('fs')
const { filter } = require('lodash')

const input = fs.readFileSync('./inst_data_2017.csv')
const institutions = csvParse(input, { columns: true, delimiter: '|' })

console.log('All:', institutions.length)
console.log('Filers:', filter(institutions, i => !!parseInt(i.hmda_filer)).length)

