import { app } from "react-fn";
import { state } from "./state/state";
import { firstComponent } from "./components/first-component/first-component";
import { loadPolyfills } from "./utils/polyfills/load-polyfills";
import { actions } from "./actions/actions";

const mount = document.getElementById('app')
loadPolyfills();
app(state, firstComponent, actions, mount);