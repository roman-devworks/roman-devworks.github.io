---
title: Components and Versions
description: Create components, add versions, compare them, and archive or delete what you no longer need.
sidebar:
  order: 3
---

A component is a saved group of questions from one form. Each time the questions change, you add a version. Creating or changing components never changes a Jira form.

Creating and changing components needs the **Administer Projects** permission. See [Permissions and data](/products/formops/permissions/).

## Create a component

1. In the **Project** list, select the project that contains the form.
2. Go to **Components** and select **Create component**.
3. Enter a **Component name** and, if you like, a description.
4. Choose the **Source form**.
5. Tick the fields to include and select **Create component**.

This saves the selected questions as version 1.

If you see **Some questions cannot be included**, FormOps does not support those questions. You can still use the other questions on the form.

## Create a new version

Add a version whenever a question in the component needs to change. You can make the change in either place:

- **In FormOps:** edit the **Desired label** or **Required** setting while creating the version.
- **In Jira:** edit the source form first, then create a version to capture the form as it is now.

To create the version:

1. Select the project that contains the component's source form.
2. Open the component and select **New version**.
3. Tick every question that belongs in the component.
4. Change the **Desired label** or **Required** setting where needed.
5. Select **Create version**.

:::caution
Tick every question you want to keep. Leaving out a question that was in the previous version counts as removing it, and FormOps cannot apply removals to a form.
:::

Good to know:

- A version always uses the component's original source form.
- A version must differ from the latest one. Otherwise you see **The version has no changes**.
- Earlier versions are never changed.
- A component can have up to 20 versions.

## Compare versions

1. Open the component and go to the **Version history** tab.
2. Under **Compare versions**, choose a **From** and a **To** version.
3. Select **Compare versions** to list the fields that were added, removed, or changed.

## Delete a version

On the **Version history** tab, select **Delete** beside the version.

**Delete** is unavailable when the version is:

- The only version of the component.
- Used by an association. [Remove the association](/products/formops/synchronization/#re-associate-a-form) first.
- Part of an archived component.

Version numbers are not reused.

## Archive a component

Archive a component to freeze it while keeping its history. Open the component and select **Archive**.

An archived component stays in the library with an **Archived** badge and keeps its versions and associations. You can no longer add versions or associations to it.

:::caution
Archiving cannot be undone.
:::

To hide archived components, turn off **Show archived components** in **Settings**.

## Permanently delete a component

Jira administrators can open a component and select **Permanently delete**. This removes the component, all of its versions and associations, and its activity entries from FormOps.

Your Jira forms are not changed. Permanent deletion cannot be undone.
