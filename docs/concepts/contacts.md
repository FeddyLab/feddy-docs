---
title: Contacts
description: Who is writing in, from an anonymous device to an identified user with attributes.
---

A contact is one person, as far as Feddy can tell. Every conversation belongs to exactly one contact.

## Anonymous by default

The first time the SDK runs it generates an anonymous id and stores it, in the Keychain on iOS and in `localStorage` on the web. That id is the contact. It survives app reinstalls on iOS. On the web it lasts until the visitor clears site data, which is why the widget can ask for an email after the first message.

Anonymous contacts show as **Anonymous** in the inbox, with the device details the SDK collected.

## Identified

Call `identify` with your own user id to turn the anonymous contact into a known one. The inbox then shows the user's name or email, and their conversations from every device merge into one history. How to call it, and what happens on merge, is in [Identify users](../guides/identify-users).

## What you know about a contact

Two kinds of facts appear in the **Details** panel next to a conversation:

- **Collected by the SDK**: device, OS, app version, language, first and last seen. You do not send these.
- **From `identify`**: the attributes you chose to send, such as plan or membership status.

**Settings → Data attributes** lists every attribute key you have ever sent, with its inferred type. There you can give a key a readable label, show it as a column in the inbox, or make it filterable. New keys appear automatically the first time the SDK sends them.

## Email

A contact's email comes from `identify` or from the user typing it into the widget. It is used for one thing: emailing them your replies, and only when your project has a verified sending domain. See [Team](./team).

## Contacts page

**Contacts** lists everyone who has written in, with their conversations and last-seen time. Filter to anonymous contacts only to see how many users you could identify.
