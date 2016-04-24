import { lightGreen500, lightGreen700, orange500 } from "material-ui/styles/colors"
import getMuiTheme from "material-ui/styles/getMuiTheme"

export const defaultTheme = getMuiTheme({
  palette: {
    primary1Color: lightGreen500,
    primary2Color: lightGreen700,
    accent1Color: orange500,
    pickerHeaderColor: lightGreen500
  }
})
