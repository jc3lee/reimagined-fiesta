
const regexCP = /^!\[(.+)?\]\s*\(((https?:\/\/)?(www\.)?codepen\S+)(\s+['"](.+)?['"])?\)/gm
const replaceCP = "<Codepen alt={'$1'} url={'$2'} title={'$6'} />"
const pathCP = "../../components/blog/embed/Codepen.jsx"

const regexTw = /^!\[(.+)?\]\s*\(((https?:\/\/)?(www\.)?twitter\S+)(\s+['"](.+)?['"])?\)/gm
const replaceTw = "<Twitter alt={'$1'} url={'$2'} title={'$6'} />"
const pathTw = "../../components/blog/embed/Twitter.jsx"

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
    name: "Twitter",
    regex: regexTw,
    replacedValue: replaceTw,
    path: pathTw,
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
