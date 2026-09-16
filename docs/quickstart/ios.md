---
title: iOS quickstart
description: Add Feddy to an iOS app with Swift Package Manager and send your first message.
---

By the end of this page your app has a support entry point, and a message sent from it shows up in your Feddy inbox.

## Prerequisites

- A Feddy project. Create one in the dashboard, then copy the project ID from **Settings → Install**.
- Xcode 15 or later. The SDK targets iOS 15 and has no third-party dependencies.

## 1. Install

In Xcode choose **File → Add Package Dependencies…** and paste:

```
https://github.com/FeddyLab/feddy-ios
```

Or add it to `Package.swift`:

```swift
.package(url: "https://github.com/FeddyLab/feddy-ios", from: "0.6.2")
```

## 2. Initialize

Call `configure` once, before any other Feddy call. Later calls are ignored.

```swift
import Feddy

@main
struct MyApp: App {
    init() {
        Feddy.configure(projectId: "fd_XXXXXXXXXXXXXXXX")
    }
    var body: some Scene { WindowGroup { ContentView() } }
}
```

UIKit apps call it from `application(_:didFinishLaunchingWithOptions:)`.

:::note
The project ID ships inside your binary and is public by design. Commit it. Do not put it in a secrets file or an environment variable.
:::

## 3. Add an entry point

Put a row where users already look for help, usually in Settings:

```swift
Form {
    Button("Support") { Feddy.present() }
        .feddyUnreadBadge()
}
```

`present()` opens the conversation list as a sheet over whatever is on screen. `presentNewConversation()` skips the list and opens the compose form. Both work from SwiftUI and UIKit.

## 4. Verify

Run the app, open the row, and send a message. It appears in your Feddy inbox. Reply from the inbox; the reply shows up in the sheet and the row's badge shows `1` until the user reads it.

![The Feddy sheet showing a conversation with a reply from the team](../assets/ios-verify.webp)

## Next steps

- [Identify users](../guides/identify-users) so replies can also reach them by email and you see who wrote in.
- [Unread badge](../guides/unread-badge) for a custom row or a tab bar item.
- [iOS SDK reference](../reference/ios) for every public call.
