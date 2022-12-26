import {language} from "./language";

export const options = (lan) => [
    // {key: '1', text: 'All', value: 'ALL'},
    {key: '2', text: language[lan].DateAdded_Newest, value: 'LATEST_FIRST'},
    {key: '3', text: language[lan].DateAdded_Oldest, value: 'OLD_FIRST'},
    {key: '4', text: language[lan].SortByGoal_Highest, value: 'GOAL_MAX'},
    {key: '5', text: language[lan].SortByGoal_Lowest, value: 'GOAL_MIN'},
];
