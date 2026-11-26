---
title: FormOps
description: Keep the same questions consistent across your Jira Service Management forms.
sidebar:
  label: Overview
  order: 1
---

FormOps is a Jira Service Management app for teams that use the same questions on more than one form. You save those questions once as a **component**, then use FormOps to roll out label and required-setting changes to every form that uses them.

:::note[Availability]
FormOps is in development and is not yet listed on the Atlassian Marketplace. Details on this site may change before release.
:::

## How it works

1. **Create a component** from questions on an existing form.
2. **Associate** each form that contains the same questions.
3. **Create a new version** of the component when a label or required setting needs to change.
4. **Run a dry run** to preview the change on each form, then **apply** it.

## What FormOps changes on your forms

FormOps changes a form only when you select **Apply changes**, and only for the questions you matched to the component.

| FormOps can update | You still do this in Jira |
| --- | --- |
| Question labels | Adding or removing questions |
| Whether a question is required | Changing question types or choices |
| | Layout, sections, and conditional logic |

Everything else on the form is left as it is. FormOps works with form templates only. It does not read submitted responses.

## Key terms

| Term | Meaning |
| --- | --- |
| Component | A saved group of questions taken from one form, called its source form. |
| Version | A snapshot of a component's questions. A version never changes after it is created. |
| Association | A link between a component and a form that contains the same questions. |
| Dry run | A preview of what a version would change on an associated form. It never changes the form. |

## Next steps

- [Getting started](/products/formops/getting-started/): open FormOps and make your first change.
- [Components and versions](/products/formops/components/): create, update, archive, and delete components.
- [Synchronizing forms](/products/formops/synchronization/): associate forms, run dry runs, and apply changes.
- [Permissions and data](/products/formops/permissions/): who can do what, and what FormOps stores.
- [Troubleshooting and limits](/products/formops/troubleshooting/): fix common messages.
