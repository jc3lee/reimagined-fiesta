import { format, formatDistanceToNow, } from 'date-fns'

const THREE_MONTHS_TO_MS = 3 * 30 * 24 * 3600 * 1000

function getPostFormattedDate(dateString) {
  let postDate = "No post date"
  if (dateString) {
    const postDateMS = new Date(dateString).getTime()
    const todayMS = new Date().getTime()
    if (Math.abs(postDateMS - todayMS) > THREE_MONTHS_TO_MS) {
      postDate = format(new Date(dateString), "do LLL yyyy")
    } else {
      postDate = formatDistanceToNow(new Date(dateString), {
        addSuffix: true,
      })
    }
  }
  return postDate
}

function getTimeFromNow(dateString) {
  return formatDistanceToNow(new Date(dateString))
}

export {
  getPostFormattedDate, getTimeFromNow,
}