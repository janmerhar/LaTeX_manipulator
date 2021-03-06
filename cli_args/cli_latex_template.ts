import { Command } from "commander"
import { CommandFunctions } from "./cli_class"
import dateFormat from "dateformat"

// commander za create_latex_template.js
const templateCommander = new Command()

// required options
templateCommander
  .requiredOption(
    "-f, --file-name <strings...>",
    "name of the LaTeX output file",
    CommandFunctions.fileWithoutExtension
  )
  .requiredOption(
    "-t, --title <string...>",
    "title given by the user",
    CommandFunctions.joinThings
  )

// optional options
// add --anki-tag -atag for custom tags that are not derived from \title
templateCommander
  .option(
    "-d, date <strings...>",
    "date given by the user",
    CommandFunctions.joinThings,
    dateFormat(new Date(), "yyyy-mm-dd")
  )
  .option(
    "-a, --author <strings...>",
    "authors name(s)",
    CommandFunctions.joinThings,
    ""
  )
  .option("-p, --packages <strings...>", "packages added to \\usepackage")
  .option(
    "-s, --sections <number>",
    "number of sections in the document",
    CommandFunctions.myParseInt
  )

templateCommander.parse(process.argv)
// console.log("Options: \n", templateCommander.opts())

export { templateCommander }
