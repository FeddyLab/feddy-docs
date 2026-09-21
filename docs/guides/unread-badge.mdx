---
title: Unread badge
description: Show users that a reply is waiting, on the row that opens Feddy or anywhere else.
---

By the end of this page the control that opens Feddy shows the number of unread replies and clears when the user reads them.

The SDK keeps the count current on its own: iOS polls every 30 seconds, the web widget every 45 seconds and whenever the tab becomes visible.

## iOS

### A row in a `List` or `Form`

```swift
Form {
    Button("Support") { Feddy.present() }
        .feddyUnreadBadge()
}
```

This is the badge iOS itself puts on rows in Settings. Nothing is drawn at zero.

### A row that draws its own chevron

A list badge is pinned to the trailing edge and would land outside your chevron. Place the marker yourself:

```swift
HStack {
    Text("Support")
    Spacer()
    FeddyUnreadDot(showsCount: true)
    Image(systemName: "chevron.forward")
}
```

Pass `showsCount: false` for a plain dot.

### A tab bar item or anything custom

Observe the published count:

```swift
struct RootTabs: View {
    @ObservedObject private var unread = FeddyUnread.shared

    var body: some View {
        TabView {
            SupportView()
                .tabItem { Label("Support", systemImage: "bubble.left") }
                .badge(unread.count)
        }
    }
}
```

UIKit apps assign `Feddy.onUnreadCountChanged` and set `tabBarItem.badgeValue` from it.

### Refresh on foreground

Polling pauses while the app is suspended. Call `Feddy.refresh()` when the app becomes active so the badge is right before the next poll:

```swift
.onChange(of: scenePhase) { phase in
    if phase == .active { Feddy.refresh() }
}
```

## Web

With the default launcher there is nothing to do; it shows the count itself.

With `launcher: false`, feed your own element:

```js
Feddy.init({ projectId: 'fd_XXXXXXXXXXXXXXXX', launcher: false })

const badge = document.querySelector('#help-badge')
Feddy.onUnreadCountChanged = (count) => {
  badge.hidden = count === 0
  badge.textContent = String(count)
}
```

## What counts as unread

A reply is unread until the user opens the conversation it belongs to. Closed conversations never count. Opening the list alone does not clear anything.
