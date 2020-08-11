const { createReadStream, statSync } = require('fs')
const path = require('path')

module.exports = async function streamVideo(request, response) {
  const video = path.resolve(__dirname, '..', '..', 'assets', 'default.mp4')

  const { size } = statSync(video)
  const range = request.headers.range;

  if (range) {
    let [start, end] = range.replace(/bytes=/, '').split('-');
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;
    response.writeHead(206, {
       'Content-Range': `bytes ${start}-${end}/${size}`,
       'Accept-Ranges': 'bytes',
       'Content-Length': (end-start) + 1,
       'Content-Type': 'video/mp4'
    })
    createReadStream(video, { start, end }).pipe(response);
  } else {
    response.writeHead(200, {
      'Content-Type': 'video/mp4',
      'Content-Length': size,
    })
    createReadStream(video).pipe(response)
  }
}
