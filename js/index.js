'use strict';

import {catalog as menu} from "./catalog.js";
//import catalog from './catalog.js';
import generateHeader from './generateHeader.js';
import generateCatalog from './generateCatalog.js';
import generateSubCatalog from './generateSubCatalog.js';
import generateFooter from './generateFooter.js';

generateHeader();
generateCatalog();
generateSubCatalog();
generateFooter();
menu();
