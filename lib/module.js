const { resolve } = require('path')

const Defaults = {
  tag: 'youtube-subscribe-button'
}

// Google JavsaScript API script URL
const GoogleApiURL = 'https://apis.google.com/js/platform.js'

module.exports = function nuxtYoutubeSubscribe (moduleOptions = {}) {
  const options = Object.assign({}, Defaults, this.options['youtube-subscribe'] || moduleOptions)

  // Set the desired component tag name
  options.tag = options.tag || Defaults.tag

  // Register our plugin and pass config options
  this.addPlugin({
    src: resolve(__dirname, './plugin.template.js'),
    fileName: 'youtube-subcribe.js',
    options: options
  })

  // Add the async Google JavaScript API script to head
  this.options.head.script.push({
    hid: 'youtube-subscribe-script',
    src: GoogleApiURL,
    async: true,
    defer: true,
    callback: () => { // given by vue-meta
      document.dispatchEvent(new CustomEvent('youtube-subscribe:gapi-loaded'))
    }
  })
}

module.exports.meta = require('./../package.json')
