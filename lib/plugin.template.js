import Vue from 'vue'

// Custom Youtube Subscribe Button Component
const youtubeSubscribeButton = {
  render (h) {
    return h(
      'div',
      {
        style: this.adStyle,
        attrs: {
          id: this.identifier,
          'data-channelid': this.channelid,
          'data-channel': this.channel,
          'data-layout': this.layout,
          'data-theme': this.theme,
          'data-count': this.count
        }
      }
    )
  },
  props: {
    identifier: {
      type: String,
      required: true
    },
    channelid: {
      type: String,
      default: ''
    },
    channel: {
      type: String,
      default: ''
    },
    layout: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'full'].includes(value)
    },
    theme: {
      type: String,
      default: '',
      validator: (value) => ['', 'dark'].includes(value)
    },
    count: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'hidden'].includes(value)
    }
  },
  data () {
    return {}
  },
  mounted () {
    if (process.browser) {
      const container = document.getElementById(this.identifier)
      const options = {
        channelid: this.channelid,
        channel: this.channel,
        layout: this.layout,
        count: this.count
      }

      if (window.gapi) window.gapi.ytsubscribe.render(container, options)
      // eslint-disable-next-line no-console
      else console.log('<%= options.tag %>: it could not be loaded as gapi is undefined')
    }
  },
  watch: {
    $props: {
      immediate: true,
      handler () {
        this.validateProps()
      }
    }
  },
  methods: {
    validateProps () {
      if (this.channel === '' && this.channelid === '') {
        // eslint-disable-next-line no-console
        console.error(`<%= options.tag %>#${this.identifier}: You must indicate channel or channelid value.`)
      }
    }
  }
}

// Register our ad component under the desired tag name
Vue.component('<%= options.tag %>', youtubeSubscribeButton)
