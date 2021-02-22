const codepenRegex = /codepen[a-zA-Z./\-]+/

function getCodepenUserAndHash(url) {
  const codepenSegment = (url.match(codepenRegex) || [""])[0]
  if (!codepenSegment) return {}
  const codepenSegmentArr = codepenSegment.split("/")
  if (codepenSegmentArr.length !== 4) return {}
  const codepenUser = codepenSegmentArr[1]
  const codepenHash = codepenSegmentArr[3]
  return {
    codepenUser,
    codepenHash,
  }
}

const Codepen = ({ url = "-no url-", alt = "", title = "codepen" }) => {
  const { codepenUser, codepenHash, } = getCodepenUserAndHash(url)
  if (!codepenUser || !codepenHash) return (
    <div className="flex justify-center items-center text-base border-2 border-black dark:border-white mb-10 text-center" style={{ width: "100%", height: "600px", }}>
      <p>Failed to load codepen <span className="font-bold mx-1">{title ? title : alt}</span> at {url}.</p>
    </div>
  )

  return (
    <div className="mb-10">
      <iframe height="600" style={{ width: "100%", }} scrolling="no" title={title} src={`https://codepen.io/${codepenUser}/embed/preview/${codepenHash}?height=600&theme-id=dark&default-tab=result`} frameBorder="no" loading="lazy" allowTransparency={true} allowFullScreen={true}>
        See the Pen <a href={`https://codepen.io/${codepenUser}/pen/${codepenHash}`}>{title}</a> by {codepenUser}
  (<a href={`https://codepen.io/${codepenUser}`}>@{codepenUser}</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
    </div >
  )
}

export default Codepen