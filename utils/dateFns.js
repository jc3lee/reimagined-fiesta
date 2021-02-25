import { format, formatDistanceToNow, } from 'date-fns'

function getPostFormattedDate(dateString, formal) {
  let postDate = "No post date"
  if (dateString) {
    if (formal) {
      postDate = format(new Date(dateString), "do LLL yyyy")
    } else {
      postDate = formatDistanceToNow(new Date(dateString), {
        addSuffix: true,
      })
    }
    postDate = postDate.replace("about ", "")
  }
  return postDate
}

function getTimeFromNow(dateString) {
  return formatDistanceToNow(new Date(dateString))
}

export {
  getPostFormattedDate, getTimeFromNow,
}