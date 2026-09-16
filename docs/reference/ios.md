---
title: iOS SDK reference
description: Every public call in the Feddy Swift Package.
---

The Swift Package exposes one namespace, `Feddy`, plus three SwiftUI helpers for unread counts. Everything else is internal.

Requirements: iOS 15 or later, Swift 5.9 or later, no third-party dependencies. Package URL `https://github.com/FeddyLab/feddy-ios`, product `Feddy`.

## `Feddy.configure(projectId:apiURL:)`

```swift
static func configure(projectId: String, apiURL: URL = URL(string: "https://core.feddy.app")!)
```

Call once at launch. Later calls are ignored. Starts fetching the project configuration and the unread count, and polls the unread count every 30 seconds while the app runs.

- `projectId`: copied from **Settings → Install** in the dashboard. Public by design.
- `apiURL`: leave the default in production. Point it at a local server during development.

## `Feddy.present()`

```swift
@MainActor static func present()
```

Opens the conversation list as a page sheet over the top-most view controller. Works from SwiftUI and UIKit. Ignored if the sheet is already open. Logs `[Feddy] present() called before configure(projectId:)` and does nothing if called before `configure`.

## `Feddy.presentNewConversation()`

```swift
@MainActor static func presentNewConversation()
```

Same as `present()`, but opens straight into the compose form.

## `Feddy.identify(userId:email:name:attributes:)`

```swift
static func identify(userId: String, email: String? = nil, name: String? = nil, attributes: [String: Any] = [:])
```

Binds the device's anonymous contact to a user of your app. Call it after login and whenever attributes change. Does nothing before `configure`. Details and merge rules are in [Identify users](../guides/identify-users).

- `userId`: your stable id for the user, 1 to 128 characters.
- `attributes`: values may be `String`, `Bool`, any number, or `Date`. `Date` is sent as an ISO 8601 string. Other types are dropped on the device. Server-side limits are listed in [Identify users](../guides/identify-users).

## `Feddy.unreadCount(_:)`

```swift
static func unreadCount(_ completion: @escaping (Int) -> Void)
```

Fetches the current number of unread replies. The completion runs on the main thread.

## `Feddy.refresh()`

```swift
static func refresh()
```

Re-fetches the unread count now. Call it when your app returns to the foreground so a badge is current before the next poll.

```swift
.onChange(of: scenePhase) { phase in
    if phase == .active { Feddy.refresh() }
}
```

## `Feddy.onUnreadCountChanged`

```swift
@MainActor static var onUnreadCountChanged: ((Int) -> Void)?
```

Called on the main thread whenever the unread count changes. Use it for a UIKit badge; SwiftUI apps should use the helpers below instead.

## `View.feddyUnreadBadge()`

```swift
func feddyUnreadBadge() -> some View
```

Adds the system row badge with the unread count and keeps it current. Nothing is drawn at zero. Badges are rendered only inside `List`, `Form`, and `TabView`; anywhere else the modifier does nothing.

## `FeddyUnreadDot`

```swift
struct FeddyUnreadDot: View {
    init(showsCount: Bool = false)
}
```

A red marker you place yourself, for rows that draw their own chevron or for places a list badge cannot go. Renders nothing at zero. Pass `showsCount: true` to draw the number inside the marker.

## `FeddyUnread`

```swift
@MainActor final class FeddyUnread: ObservableObject {
    static let shared: FeddyUnread
    @Published private(set) var count: Int
}
```

The unread count as an observable object, for custom SwiftUI badges.

```swift
@ObservedObject private var unread = FeddyUnread.shared
```

## Behavior you do not configure

- **Identity**: an anonymous id is generated on first use and stored in the Keychain, so history survives reinstalls.
- **Language**: the sheet ships in English, Simplified Chinese, Traditional Chinese, Japanese, Korean, German, French, Spanish, Brazilian Portuguese, and Russian, following the device language. Other languages fall back to English. Text you write in the dashboard is translated server-side per project settings.
- **Attachments**: up to 5 images per message, resized to a 3000 px long edge before upload. The picker requires iOS 16; on iOS 15 the attachment row is absent.
- **Branding**: name, accent color, and logo come from the dashboard, not from code.
- **Privacy manifest**: the package ships a `PrivacyInfo.xcprivacy`.
