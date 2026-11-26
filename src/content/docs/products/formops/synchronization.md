---
title: Synchronizing Forms
description: Associate forms with a component, preview changes with a dry run, and apply them.
sidebar:
  order: 4
---

Synchronizing means bringing a form's questions in line with a newer version of a component. You associate the form once, preview each change with a dry run, and then apply it.

## What can be synchronized

| FormOps can update | You still do this in Jira |
| --- | --- |
| Question labels | Adding or removing questions |
| Whether a question is required | Changing question types or choices |
| | Layout, sections, and conditional logic |

FormOps only updates questions that you matched to the component. The rest of the form, including its settings, is left as it is.

## Associate a form

An association tells FormOps which questions on a form correspond to the fields of a component.

1. In the **Project** list, select the project that contains the form.
2. Open the component and go to the **Associations** tab.
3. Select **Associate**.
4. Choose the **Component version** that the form currently matches, and the **Target form**.
5. For each component field, select the matching question on the form.
6. Select **Save association**.

For the association to save:

- Each component field must be matched to a different question.
- Each matched question must be identical to the component field: the same label, type, required setting, choices, and other settings such as validation. Forms copied from the same original match most reliably.
- The form must not contain unsupported questions.

A form can be associated with a component once. To update the source form as well, associate it like any other form.

## Run a dry run

A dry run shows what a version would change on an associated form. It never changes the form.

1. Select the project that contains the form.
2. Open the component and go to the **Associations** tab.
3. Set **Version to simulate** to the version you want to roll out.
4. Select **Dry run** beside the form.

| Result | Meaning |
| --- | --- |
| **Ready** | The changes listed can be applied. |
| **Needs attention** | Something blocks the change. Nothing can be applied until it is resolved. |

### Dry run messages

| Message | What it means | What to do |
| --- | --- | --- |
| There are no changes to apply | The simulated version is the same as the version the form is pinned to. | Choose a newer version in **Version to simulate**. |
| Target field differs from the verified baseline | The question on the form has changed since you associated it, for example because you already applied a version. | [Re-associate the form](#re-associate-a-form). |
| Removing a field requires manual review | The version leaves out a question that the form has. | Remove the question in Jira, or create a version that includes it. |
| Changing a field type requires manual review | The version changes a question's type. | Make the change in Jira, then re-associate. |
| Removing an option requires manual review | The version removes a choice. | Make the change in Jira, then re-associate. |
| A target field already has this label | Another question on the form already uses the new label. | Use a different label, or rename the other question in Jira. |
| Component fields have duplicate labels | Two fields in the version share a label. | Create a version with distinct labels. |

If the result lists **＋ Create**, the version contains a question that the form does not have. FormOps cannot add questions, so applying fails. Add the question in Jira, then re-associate.

## Apply changes

Applying needs the **Administer Projects** permission in the form's project.

1. Run a dry run and check that the result is **Ready**.
2. Select **Apply changes** and confirm.

FormOps then:

1. Checks that the form has not been edited since you associated it.
2. Updates the label and required setting of the matched questions.
3. Reads the form back to confirm the change was saved.

If the saved form does not match, FormOps tries to restore the original and shows an error.

:::caution
If a message says a rollback was attempted, open the form in Jira and check its questions before you try again.
:::

## Re-associate a form

An association records the version a form matched, and the state of the form, when you created it. It is not updated automatically. Re-associate a form:

- After you apply changes to it, before you sync it again.
- After anyone edits the form in Jira. Until you do, applying fails with **The target form changed after the association baseline**.

To re-associate:

1. On the **Associations** tab, select **Remove** beside the form. The form itself is not changed.
2. Select **Associate**, choose the version the form matches now, and match the fields again.
