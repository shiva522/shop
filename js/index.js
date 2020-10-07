'use strict';

//import {catalog as menu} from "./catalog.js";
//import catalog from './catalog.js';
import generateHeader from './generateHeader.js';
import generateCatalog from './generateCatalog.js';
import generateSubCatalog from './generateSubCatalog.js';
import generateCartPage from './generateCartPage.js';
import generateFooter from './generateFooter.js';
import {loadData} from './loadData.js';


generateHeader();
generateCatalog();
generateSubCatalog();
generateCartPage();
generateFooter();
//menu();
loadData();
