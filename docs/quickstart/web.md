---
title: Web quickstart
description: Add the Feddy widget to a website with one script tag and send your first message.
---

By the end of this page your site has a support launcher, and a message sent from it shows up in your Feddy inbox.

## Prerequisites

- A Feddy project. Create one in the dashboard, then copy the project ID from **Settings → Install**.
- A page you can edit. There is no build step and nothing to install from npm.

## 1. Install

Load the widget before the closing `</body>` tag:

```html
<script src="https://core.feddy.app/sdk/feddy.js"></script>
```

The file is a single self-contained script with no dependencies. It renders inside a shadow root, so your CSS and the widget's never touch.

## 2. Initialize

```html
<script>
  Feddy.init({ projectId: 'fd_XXXXXXXXXXXXXXXX' })
</script>
```

`init` runs once per page; later calls are ignored. If the script loads before the DOM is ready, the widget mounts on `DOMContentLoaded`.

:::note
The project ID ships in your page source and is public by design. Commit it. Do not put it in a secrets file or an environment variable.
:::

## 3. Choose an entry point

By default a launcher appears bottom-right. If your site already has a **Support** or **Feedback** control, turn the launcher off and open the panel from your own element:

```html
<script>
  Feddy.init({ projectId: 'fd_XXXXXXXXXXXXXXXX', launcher: false })
  document.querySelector('#help').addEventListener('click', () => Feddy.open())
</script>
```

## 4. Verify

Open the page, click the launcher, and send a message. It appears in your Feddy inbox. Reply from the inbox; the reply shows up in the panel, and the launcher shows an unread count until the visitor reads it.


## Next steps

- [Identify users](/docs/guides/identify-users/) so replies can also reach them by email and you see who wrote in.
- [Unread badge](/docs/guides/unread-badge/) to drive your own badge from `onUnreadCountChanged`.
- [Web SDK reference](/docs/reference/web/) for every option and call.
