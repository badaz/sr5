// Import Modules
import { registerHandlebarsHelpers } from "./scripts/handlebars.js";
import { registerHooks } from "./scripts/hooks.js";

import "./less/index.less";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

registerHooks();
registerHandlebarsHelpers();
