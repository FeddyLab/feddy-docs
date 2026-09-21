---
title: Troubleshooting
description: What to check when Feddy does not behave as expected.
---

## Nothing happens when I call `present()`

`configure` has not run yet. The console shows `[Feddy] present() called before configure(projectId:)`. Call `configure` in `App.init` or `application(_:didFinishLaunchingWithOptions:)`, before any view can trigger `present()`.

## The web widget does not appear

- Check the console for `[Feddy] init requires a projectId`.
- Confirm the script tag loaded: `typeof Feddy` should be `"object"`.
- If you passed `launcher: false`, nothing is drawn until you call `Feddy.open()`.
- `init` is ignored after the first call. Reloading the page is the only way to re-initialize.

## Messages do not arrive in the inbox

- Compare the project ID in code with **Settings → Install**. A wrong ID fails silently for the user.
- Check you are looking at the right project in the dashboard sidebar.
- If you set `apiUrl` or `apiURL` for development, make sure production builds use the default.

## The unread badge does not update

- iOS: `.feddyUnreadBadge()` draws only inside `List`, `Form`, or `TabView`. Elsewhere use `FeddyUnreadDot` or observe `FeddyUnread.shared`.
- iOS: polling pauses while the app is suspended. Call `Feddy.refresh()` when the scene becomes active.
- Web: the count refreshes every 45 seconds and when the tab becomes visible. Assign `Feddy.onUnreadCountChanged` before you expect a callback.
- Reading a conversation clears its count. Opening the list alone does not.

## Attributes are missing in the inbox

Attributes over the limits are dropped without an error: more than 20 keys, a key over 40 characters, a value over 255 characters, nested objects or arrays, or a total over 8 KB. On iOS, values that are not `String`, `Bool`, a number, or `Date` are dropped on the device. Remember that each `identify` call replaces the whole set.

## Users are never asked for an email

The widget asks only when the project has a verified sending domain, and only once per device. Verify a domain under **Settings → Email domain**, or pass `email` in `identify`.

## Replies are not emailed to users

All three must hold: the contact has an email, the project's sending domain is verified, and your plan includes email to users. Replies still appear in the app either way.

## The attachment button is missing

- iOS: the picker requires iOS 16. On iOS 15 the row is not shown.
- Attachments are a paid-plan feature.
- Only PNG, JPEG, and WebP are accepted, up to 5 per message.

## The widget is in the wrong language

The SDK follows the device or browser language and falls back to English for languages it does not ship. On the web, pass `locale` to `init` to force one. Text you wrote in the dashboard uses your translations when one exists for the user's language, and your default text otherwise.

## The assistant answered something it should not have

The assistant only uses your answers and your About text. Find the answer that matched, tighten its keywords or wording, and use **Try it** on the Knowledge page to confirm the change before users see it.
