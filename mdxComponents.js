
const regexCP = /^!\[(.+)?\]\s*\(((https?:\/\/)?(www\.)?codepen\S+)(\s+['"](.+)?['"])?\)/gm
const replaceCP = "<Codepen alt={'$1'} url={'$2'} title={'$6'} />"
const pathCP = "../../components/blog/embed/Codepen.jsx"

const regexYT = /^!\[(.+)?\]\(((https?:\/\/)?(www\.)?youtube\S+)(\s+['"](.+)?['"])?\)/gm
const replaceYT = "<Youtube url={'$1'} alt={'$2'} title={'$6'} />"
const pathYT = "../../components/blog/embed/Youtube.jsx"

const mdxComponents = [
  {
    name: "Codepen",
    regex: regexCP,
    replacedValue: replaceCP,
    path: pathCP,
  },
  {
    name: "Youtube",
    regex: regexYT,
    replacedValue: replaceYT,
    path: pathYT,
  },
]

module.exports = {
  mdxComponents,
}
