export function dashboardAdapter(data: any) {
  const { dialogs, lists, scenarios } = data.dashboard;
  const newObject: any = {};

  function adapter(statItem: any, name: string, keyStat: string) {
    const { active, inactive, completed } = statItem;
    newObject[keyStat] = {}
    newObject[keyStat]["total"] = active + inactive + completed;
    newObject[keyStat]["name"] = name;
    newObject[keyStat]["data"] = [
      {
        id: "1",
        title: "Активных",
        name: "active",
        value: active,
        color: "#b9b1c0",
      },
      {
        id: "2",
        title: "Неактивных",
        name: "active",
        value: inactive,
        color: "#d0cbd6",
      },
      {
        id: "3",
        title: "Завершенных",
        name: "completed",
        value: active,
        color: "#f2f0f5",
      },
    ];
  }

  adapter(dialogs, "Диалоги", 'dialogs');
  adapter(scenarios, "Сценарии", 'scenarios');
  adapter(lists, "Диалоги", 'lists');
  return newObject
}
