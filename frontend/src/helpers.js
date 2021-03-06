export function normalizeTitle (title) {
  const index = title.indexOf('-') + 1
  let extra = 0

  if (index !== undefined) {
    if (title[index] === ' ') {
      extra = 1
    }
    title = title.slice(index + extra, title.length + 1)

    if (title.length > 20) {
      return title.slice(0, 20) + '...'
    }
    else {
      return title
    }

  }
  else {
    if (title.length > 30) {
      return title.slice(0, 30) + '[...]'
    }
    else {
      return title
    }
  }
}

export function assignCardId (direction, tracks, cardId) {

  const length = tracks.length - 1

  if (direction === 'next') {
    if (cardId === length) {
      cardId = 0
    }
    else {
      cardId++
    }
  }
  else if (direction === 'prev') {
    if (cardId === 0) {
      cardId = length
    }
    else {
      cardId--
    }
  }

  return cardId
}

export function convertSecondsToMinutes (seconds) {
  if (isNaN(seconds)) return "00:00";
  let m = Math.floor(seconds / 60);
  let s = Math.floor(seconds % 60);
  return ((m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s)
}

export function prepareStorage () {
  if (localStorage.getItem('muted') == null) {
    localStorage.setItem('muted', 'false')
  }
  if (localStorage.getItem('volume') == null) {
    localStorage.setItem('volume', '0.5')
  }
}

export function debounce (fn, delay) {
  let timer = null
  return function () {
    const context = this, args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}
