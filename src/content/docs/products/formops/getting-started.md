---
title: Getting Started
description: Open FormOps, learn the layout, and make your first change across two forms.
sidebar:
  order: 2
---

## Before you begin

You need:

- A Jira Cloud site with Jira Service Management.
- FormOps installed on that site. FormOps is not yet listed on the Atlassian Marketplace; installation steps will be added here when it is.
- A service project with two or more forms that share the same questions. Forms copied from the same original work best.
- The **Administer Projects** permission in that project. See [Permissions and data](/products/formops/permissions/).

## Open FormOps

1. In Jira, open the **Apps** menu and select **FormOps**.
2. The first time, Atlassian asks you to allow FormOps to access Jira on your behalf. Accept to continue.
3. Choose a project in the **Project** list at the top of the page. It lists the service projects you can view.

:::tip
The selected project controls which forms FormOps shows. Before you work with a form, select the project it belongs to.
:::

## Find your way around

| Page | What it is for |
| --- | --- |
| Overview | Totals, recent components, and recent activity. |
| Components | Your component library. Open a component to see its fields, version history, and associations. |
| Forms | The forms in the selected project. |
| Synchronization | Every association in one list, with a shortcut to its dry run. |
| Activity | A record of who did what in FormOps. Jira administrators only. |
| Settings | Personal display preferences such as start page, default project, and date format. They are saved in your browser only. |

## Make your first change

In this example, two forms both ask for **Manager**, and you want both to say **Line manager**.

1. **Create the component.** Go to **Components** and select **Create component**. Enter a name, choose one of the forms as the **Source form**, tick the shared questions, and select **Create component**.
2. **Associate both forms.** Open the component, go to the **Associations** tab, and select **Associate**. Choose a **Target form**, match each component field to the same question on that form, and select **Save association**. Repeat for the second form. Include the source form if you want it updated too.
3. **Create a version with the change.** Select **New version**. Tick the same questions again, change the **Desired label** of Manager to `Line manager`, and select **Create version**.
4. **Preview the change.** On the **Associations** tab, set **Version to simulate** to the new version and select **Dry run** beside a form. The result should read **Ready** and list the update.
5. **Apply it.** Select **Apply changes** and confirm. Repeat steps 4 and 5 for the other form.

After you apply a version, [re-associate the form](/products/formops/synchronization/#re-associate-a-form) before you sync it again.

For more detail on each step, see [Components and versions](/products/formops/components/) and [Synchronizing forms](/products/formops/synchronization/).
