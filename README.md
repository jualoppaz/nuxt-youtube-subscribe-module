# Nuxt Youtube Subscribe Module
> Youtube Subscribe integration for Nuxt.js. You could add the official subscribe button to the desired Youtube channel.

This nuxt module is a simple wrapper of the [official Youtube Subscribe Button](https://developers.google.com/youtube/subscribe).

<p float="left">
  <img src="https://nuxtjs.org/design-kit/colored-logo.svg" witdh="50" height="50">
  <img src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png" witdh="50" height="50">
 </p>

## ✍🏻 Motivation

This module is the result of the need of add a Youtube subscribe button in one of my multiple web applitacions. After google it I only was able to find the [official Youtube Subscribe Button](https://developers.google.com/youtube/subscribe), but it only works well in simple JS applications or fullstack ones made with CMS like WordPress, Drupal and more.

As I didn't find any solution for vue apps, I decided to develop this module for nuxt because is the Vue framework I am using majority.

I hope this module be very usefull for so many people with same need than me.

## 🧱 Install

You must add `nuxt-youtube-subscribe-module` dependency using **yarn** or **npm** to your project

```
$ npm install nuxt-youtube-subscribe-module --save
```

or

```
$ yarn add nuxt-youtube-subscribe-module
```

## ⚙️ Config

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

## ▶️ Usage

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

## How does this module work❓

**Module** (when app starts)
1. The module overwrites all default options with the given ones.
2. The module loads the plugin with the `YoutubeSubscribeButton` global Vue component.
3. The module loads the Google JavaScript API.
4. The `youtube-subscribe:gapi-loaded` custom event is fired for very quick components.

**YoutubeSubscribeButton** (when component is used)
1. The component validates all props.
2. All component options are collected.
3. The subscribe button is rendered through `render` gapi (Google API) method if available.
4. A listener for `youtube-subscribe:gapi-loaded` custom event is registered for a second retry for display the subscribe button.
5. The subscribe button is rendered after fired from `youtube-subscribe:gapi-loaded` listener callback.
