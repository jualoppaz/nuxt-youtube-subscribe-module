# Nuxt Youtube Subscribe Module
> Youtube Subscribe integration for Nuxt.js. You could add the official subscribe button to the desired Youtube channel.

This nuxt module is a simple wrapper of the [official Youtube Subscribe Button](https://developers.google.com/youtube/subscribe).

## Install

You must add `nuxt-youtube-subscribe-module` dependency using **yarn** or **npm** to your project

```
$ npm install nuxt-youtube-subscribe-module --save
```

or

```
$ yarn add nuxt-youtube-subscribe-module
```

## Config

You have to add `nuxt-youtube-subscribe-module` to `modules` section of `nuxt.config.js`

```js
// nuxt.config.js
{
  ...,
  modules: [
    'nuxt-youtube-subscribe-module'.
  ],
  ...,
}
```

If you want to use the module options you have two ways of doing this:

```js
// nuxt.config.js
// Simple usage
{
  ...,
  modules: [
    ['nuxt-youtube-subscribe-module', {
      tag: 'YoutubeSubscribeButton'
    }]
  ],
  ...,
}
```

```js
// nuxt.config.js
// Using top level options
{
  ...,
  modules: [
    'nuxt-youtube-subscribe-module'
  ],
  ...,
  'youtube-subscribe': {
    tag: 'YoutubeSubscribeButton'
  },
  ...,
}
```

**Configuration options**

| Option | type |  description
| -------- | ---- | -----------
| `tag` | String | **Optional**. Desired name for the component used to embed the Youtube subscribe button. Defaults to `youtube-subscribe-button`.

## Usage

For using this module you only have to add the `<youtube-subscribe-button>` tag in the desired location.

**Example 1**: Same that official docs shows by default

```html
<!-- view.html -->
<youtube-subscribe-button
  identifier="my-subscribe-button"
  channel="GoogleDevelopers"
></youtube-subscribe-button>
```

**Example 2**: Official docs example with all options

```html
<!-- view.html -->
<youtube-subscribe-button
  identifier="my-subscribe-button"
  channel="GoogleDevelopers"
  layout="full"
  theme="dark"
></youtube-subscribe-button>
```

**Example 3**: Custom options

```js
// nuxt.config.js
{
  ...,
  modules: [
    ['nuxt-youtube-subscribe-module', {
      tag: 'YoutubeSubscribeButton'
    }]
  ],
  ...,
}
```

```html
<!-- view.html -->
<YoutubeSubscribeButton
  identifier="my-subscribe-button"
  channel="GoogleDevelopers"
  layout="full"
></YoutubeSubscribeButton>
```

**Component props:**

| prop | type | description
| ---- | ---- | -----------
| `identifier` | String | **Required**. Unique string to be used as id in the subscribe button.
| `channelid` | String | **Required conditionally** if no channel is present. Unique string that identifies the **Youtube** channel used to the subscribe button.
| `channel` | String | **Required conditionally** if no channelid is present. Unique string that identifies the **Youtube** channel used to the subscribe button.
| `layout` | String | **Optional**. Desired layout for the subscribe button. Available values are `default` and `full`. Defaults to `default`.
| `theme` | String | **Optional**. Desired theme for the subscribe button. Available values are ` ` (empty string) and `dark`. Defaults to ` `.
| `count` | String | **Optional**. For indicate the visibility of subscribers count. Available values are `default` and `hidden`. Defaults to `default`.


