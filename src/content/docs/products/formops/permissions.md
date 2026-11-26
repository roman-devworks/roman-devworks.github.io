---
title: Permissions and Data
description: Which Jira permissions each FormOps action needs, what access the app requests, and what it stores.
sidebar:
  order: 5
---

FormOps uses your existing Jira permissions. It acts as the signed-in user, so it cannot show or change more than that user can in Jira.

## Who can do what

| Action | Jira permission needed |
| --- | --- |
| View components, forms, and associations; compare versions; run dry runs | **Browse Projects** in the project |
| Create components and versions; associate forms; apply changes | **Administer Projects** in the selected project |
| Remove an association | **Administer Projects** in the form's project |
| Delete a version; archive a component | **Administer Projects** in the component's source project and in every project with an associated form |
| View **Activity**; permanently delete a component | Jira administrator |

Jira administrators can also do everything a project administrator can. Every action still needs **Browse Projects** in the projects involved.

What you see depends on your access:

- A component is visible only if you can browse its source project.
- An association is visible only if you can browse the form's project.
- Anything you cannot access is reported as not found.

## Access FormOps requests

| Access | Used to |
| --- | --- |
| Read Jira project and issue data (`read:jira-work`) | List your service projects and read their form templates. |
| Read Jira user information (`read:jira-user`) | Show names in **Activity**. |
| Manage Jira projects (`manage:jira-project`) | Save a form when you apply changes. |
| App storage (`storage:app`) | Store components, versions, associations, and activity. |

## Data FormOps stores

FormOps stores its data in Atlassian-hosted app storage for your Jira site. It does not send data to servers outside Atlassian.

| Stored | Not read or stored |
| --- | --- |
| Component names and descriptions | Submitted form responses |
| Question snapshots: labels, types, choices, and settings | Attachments |
| Associations between components and forms | Passwords or API tokens |
| Activity: the action, Atlassian account ID, and time | |

Because question text is stored, avoid putting sensitive information in question labels, choices, or component descriptions.

Settings such as your start page and default project are saved in your browser only.

## Removing data

- **Archiving** a component keeps all of its data.
- **Permanently deleting** a component removes its versions, associations, and activity entries from FormOps. A minimal record that the deletion took place, with no form content, is kept for up to 180 days.
- Backups managed by Atlassian follow Atlassian's own retention and are not removed immediately.

For privacy questions, see the [Security Center](/security/#privacy).
