import { format, formatDistanceToNow, } from 'date-fns'

function getPostFormattedDate(dateString) {
  let postDate = "No post date"
  if (dateString) {
    postDate = format(new Date(dateString), "do LLL")
  }
  return postDate
}

function getTimeFromNow(dateString) {
  return formatDistanceToNow(new Date(dateString))
}

export {
  getPostFormattedDate, getTimeFromNow,
}