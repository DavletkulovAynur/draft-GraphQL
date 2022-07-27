import {gql} from "@apollo/client"

export const GET_ALL_DASHBOARD_STAT = gql`
  query {
    dashboard {
      lists {
        active, inactive, completed
      },
      scenarios {
        active, inactive, completed
      },
      dialogs {
        active, inactive, completed
      }
    }
  }
`