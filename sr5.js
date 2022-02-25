// Import Modules
import { registerHandlebarsHelpers } from "./scripts/handlebars.js";
import { registerHooks } from "./scripts/hooks.js";

import "./less/actor-sheet.less";
import "./less/column.less";
import "./less/general.less";
import "./less/icons.less";
import "./less/interface.less";
import "./less/item-sheet.less";
import "./less/roll-message.less";
import "./less/tiny.less";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

registerHooks();
registerHandlebarsHelpers();
