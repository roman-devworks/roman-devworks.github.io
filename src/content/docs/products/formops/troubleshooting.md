---
title: Troubleshooting and Limits
description: Fix common FormOps messages and check the limits that apply.
sidebar:
  order: 6
---

Find the message or symptom below. For messages shown in a dry run result, see [Dry run messages](/products/formops/synchronization/#dry-run-messages).

## Access

| Message or symptom | Cause | Fix |
| --- | --- | --- |
| A Jira administrator is required for this site-wide operation | **Activity** and permanent deletion are limited to Jira administrators. If you are not one, this banner appears when FormOps loads. | You can ignore it. The rest of FormOps works normally. |
| A Jira project administrator is required for this operation | The action needs **Administer Projects**. | Ask a project administrator, or see [who can do what](/products/formops/permissions/#who-can-do-what). |
| Jira authorization is required. Reopen the app and grant access | You have not yet allowed FormOps to access Jira on your behalf. | Reopen FormOps and accept the request. |
| A project is missing from the **Project** list | The list shows only service projects you can browse. | Check the project type and your permissions. |
| Component not found, or a component is missing | You cannot browse the component's source project. | Ask for **Browse Projects** in that project. |

## Forms and projects

| Message or symptom | Cause | Fix |
| --- | --- | --- |
| No forms are available | No project is selected, or the project has no forms. | Select a project that has forms. |
| The **New version** dialog shows no fields | A different project is selected than the one that contains the source form. | Select the source form's project. |
| A form shows as a long ID instead of its name | The form belongs to a different project than the one selected. | Select the form's project. |
| The project or form was not found or is not accessible | The form is not in the selected project, or you cannot access it. | Select the form's project and try again. |
| Form is not a supported normalized snapshot | The form has more than 50 questions, or a structure FormOps cannot read. | Use a form with 50 or fewer questions. |
| Some questions cannot be included | The form contains questions FormOps does not support. | Use the other questions. |
| This form has unsupported questions and cannot be associated safely | A form with unsupported questions cannot be a target form. | Choose another form. |

## Versions and associations

| Message or symptom | Cause | Fix |
| --- | --- | --- |
| The version has no changes | The new version is identical to the latest one. | Change a label or required setting, or edit the source form first. |
| Mapped target fields must match the baseline version | A question on the form is not identical to the component field. | Choose the version the form matches, or make the question identical in Jira. |
| Baseline must map every field to a distinct target | Two component fields were matched to the same question. | Match each field to a different question. |
| Association already exists | The form is already associated with this component. | Remove the existing association first. |
| Archived components cannot be changed | The component is archived. | Create a new component. Archiving cannot be undone. |
| **Delete** is unavailable for a version | It is the only version, or an association uses it. | Remove the association that uses it first. |

## Applying changes

| Message | Cause | Fix |
| --- | --- | --- |
| The target form changed after the association baseline | The form was edited after you associated it, or you already applied a version. | [Re-associate the form](/products/formops/synchronization/#re-associate-a-form). |
| Only existing mapped native fields can be updated | The version adds a question that the form does not have. | Add the question in Jira, then re-associate. |
| Changing choices or options is not supported | The version changes a question's choices. | Change the choices in Jira, then re-associate. |
| A message that says rollback was attempted | Jira did not save the change as expected, and FormOps tried to restore the form. | Check the form in Jira before trying again. |

## Temporary errors

Messages about a rate limit, a timeout, or storage that could not be read or saved are usually temporary. Wait a moment, reload FormOps, and try again.

If you see **Component changed. Refresh before retrying**, someone else saved a change at the same time. Reload and repeat your change.

## Limits

| Item | Limit |
| --- | --- |
| Components | 100 |
| Versions per component | 20 |
| Associations per component | 50 |
| Supported questions per form | 50 |
| Component name | 120 characters |
| Question label | 256 characters |
| Activity entries | 1,000 |

When a limit is reached, you see a message ending in **capacity reached**.

:::caution
When **Activity** reaches 1,000 entries, FormOps blocks further changes and dry runs. Permanently deleting components you no longer need removes their activity entries.
:::

## Still stuck?

[Report a bug](/support/report-a-bug/) and include the exact message you saw. Do not send credentials or customer information.
