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
      if (window.gapi) this.render()
      // eslint-disable-next-line no-console
      else {
        console.info(`<%= options.tag %>#${this.identifier}: gapi is not loaded yet`)
        document.addEventListener('youtube-subscribe:gapi-loaded', () => {
          this.render()
          console.info(`<%= options.tag %>#${this.identifier}: rendered after gapi load`)
        })
      }
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
    /**
     * Method for require one of channel or channelid props
     *
     * @author jualoppaz
     */
    validateProps () {
      if (this.channel === '' && this.channelid === '') {
        // eslint-disable-next-line no-console
        console.error(`<%= options.tag %>#${this.identifier}: You must indicate channel or channelid value.`)
      }
    },
    /**
     * Method for render the youtube subscribe button after gapi is loaded
     *
     * @author jualoppaz
     */
    render() {
      const container = document.getElementById(this.identifier)
      const options = {
        channelid: this.channelid,
        channel: this.channel,
        layout: this.layout,
        count: this.count
      }

      window.gapi.ytsubscribe.render(container, options)
    }
  }
}

// Register our ad component under the desired tag name
Vue.component('<%= options.tag %>', youtubeSubscribeButton)
