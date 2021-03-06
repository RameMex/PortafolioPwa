module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+1QM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blitzjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jwnU");
/* harmony import */ var _blitzjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1N0Q");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _prisma_client__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _prisma_client__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));


const EnhancedPrisma = Object(_blitzjs_core__WEBPACK_IMPORTED_MODULE_0__["enhancePrisma"])(_prisma_client__WEBPACK_IMPORTED_MODULE_1__["PrismaClient"]);

/* harmony default export */ __webpack_exports__["default"] = (new EnhancedPrisma());

/***/ }),

/***/ "/IrO":
/***/ (function(module, exports) {

module.exports = require("zod");

/***/ }),

/***/ "1N0Q":
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("PF4a");


/***/ }),

/***/ "3vow":
/***/ (function(module, exports) {

module.exports = require("@blitzjs/core/server");

/***/ }),

/***/ "94Nm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ authenticateUser; });

// NAMESPACE OBJECT: ./app/_resolvers/auth/mutations/login.ts
var login_namespaceObject = {};
__webpack_require__.r(login_namespaceObject);
__webpack_require__.d(login_namespaceObject, "authenticateUser", function() { return authenticateUser; });
__webpack_require__.d(login_namespaceObject, "default", function() { return login; });

// EXTERNAL MODULE: external "@blitzjs/core"
var core_ = __webpack_require__("jwnU");

// EXTERNAL MODULE: external "@blitzjs/core/server"
var server_ = __webpack_require__("3vow");

// EXTERNAL MODULE: ./db/index.ts
var db = __webpack_require__("+1QM");

// EXTERNAL MODULE: ./app/auth/validations.ts
var validations = __webpack_require__("ptJ+");

// CONCATENATED MODULE: ./app/_resolvers/auth/mutations/login.ts
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const authenticateUser = async (email, password) => {
  const user = await db["default"].user.findFirst({
    where: {
      email
    }
  });
  if (!user) throw new core_["AuthenticationError"]();
  const result = await server_["SecurePassword"].verify(user.hashedPassword, password);

  if (result === server_["SecurePassword"].VALID_NEEDS_REHASH) {
    // Upgrade hashed password with a more secure hash
    const improvedHash = await server_["SecurePassword"].hash(password);
    await db["default"].user.update({
      where: {
        id: user.id
      },
      data: {
        hashedPassword: improvedHash
      }
    });
  }

  const {
    hashedPassword
  } = user,
        rest = _objectWithoutProperties(user, ["hashedPassword"]);

  return rest;
};
/* harmony default export */ var login = (server_["resolver"].pipe(server_["resolver"].zod(validations["c" /* Login */]), async ({
  email,
  password
}, ctx) => {
  // This throws an error if credentials are invalid
  const user = await authenticateUser(email, password);
  await ctx.session.$create({
    userId: user.id,
    role: user.role
  });
  return user;
}));
// CONCATENATED MODULE: ./app/auth/mutations/login.ts



/* harmony default export */ var mutations_login = __webpack_exports__["b"] = (Object(core_["getIsomorphicEnhancedResolver"])(login_namespaceObject, 'app/_resolvers/auth/mutations/login', 'login', 'mutation', undefined, {
  warmApiEndpoints: false
}));

/***/ }),

/***/ "PF4a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "config", function() { return /* binding */ config; });

// NAMESPACE OBJECT: ./app/_resolvers/auth/mutations/changePassword.ts
var changePassword_namespaceObject = {};
__webpack_require__.r(changePassword_namespaceObject);
__webpack_require__.d(changePassword_namespaceObject, "default", function() { return changePassword; });

// EXTERNAL MODULE: external "@blitzjs/core"
var core_ = __webpack_require__("jwnU");

// EXTERNAL MODULE: external "@blitzjs/core/server"
var server_ = __webpack_require__("3vow");

// EXTERNAL MODULE: ./db/index.ts
var db = __webpack_require__("+1QM");

// EXTERNAL MODULE: ./app/auth/mutations/login.ts + 1 modules
var login = __webpack_require__("94Nm");

// EXTERNAL MODULE: ./app/auth/validations.ts
var validations = __webpack_require__("ptJ+");

// CONCATENATED MODULE: ./app/_resolvers/auth/mutations/changePassword.ts






/* harmony default export */ var changePassword = (server_["resolver"].pipe(server_["resolver"].zod(validations["a" /* ChangePassword */]), server_["resolver"].authorize(), async ({
  currentPassword,
  newPassword
}, ctx) => {
  const user = await db["default"].user.findFirst({
    where: {
      id: ctx.session.userId
    }
  });
  if (!user) throw new core_["NotFoundError"]();
  await Object(login["a" /* authenticateUser */])(user.email, currentPassword);
  const hashedPassword = await server_["SecurePassword"].hash(newPassword);
  await db["default"].user.update({
    where: {
      id: user.id
    },
    data: {
      hashedPassword
    }
  });
  return true;
}));
// CONCATENATED MODULE: ./app/auth/mutations/changePassword.ts



/* harmony default export */ var mutations_changePassword = (Object(core_["getIsomorphicEnhancedResolver"])(changePassword_namespaceObject, 'app/_resolvers/auth/mutations/changePassword', 'changePassword', 'mutation', undefined, {
  warmApiEndpoints: false
}));
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__("oyvS");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);

// CONCATENATED MODULE: ./pages/api/auth/mutations/changePassword.ts
// This imports the output of getIsomorphicEnhancedResolver()



 // Ensure these files are not eliminated by trace-based tree-shaking (like Vercel)

external_path_default.a.resolve("next.config.js");
external_path_default.a.resolve("blitz.config.js");
external_path_default.a.resolve(".next/blitz/db.js"); // End anti-tree-shaking

let changePassword_db;
let connect;

try {
  var _db, _db2;

  changePassword_db = __webpack_require__("+1QM").default;

  if (__webpack_require__("+1QM").connect) {
    connect = __webpack_require__("+1QM").connect;
  } else if ((_db = changePassword_db) !== null && _db !== void 0 && _db.$connect || (_db2 = changePassword_db) !== null && _db2 !== void 0 && _db2.connect) {
    connect = () => changePassword_db.$connect ? changePassword_db.$connect() : changePassword_db.connect();
  } else {
    connect = () => {};
  }
} catch (_) {}

/* harmony default export */ var auth_mutations_changePassword = __webpack_exports__["default"] = (Object(server_["rpcApiHandler"])(mutations_changePassword, Object(server_["getAllMiddlewareForModule"])(mutations_changePassword), () => {
  var _connect;

  return changePassword_db && ((_connect = connect) === null || _connect === void 0 ? void 0 : _connect());
}));
const config = {
  api: {
    externalResolver: true
  }
};

/***/ }),

/***/ "jwnU":
/***/ (function(module, exports) {

module.exports = require("@blitzjs/core");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "ptJ+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ForgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ResetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePassword; });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/IrO");
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);

const password = zod__WEBPACK_IMPORTED_MODULE_0__["string"]().min(10).max(100);
const Signup = zod__WEBPACK_IMPORTED_MODULE_0__["object"]({
  email: zod__WEBPACK_IMPORTED_MODULE_0__["string"]().email(),
  password
});
const Login = zod__WEBPACK_IMPORTED_MODULE_0__["object"]({
  email: zod__WEBPACK_IMPORTED_MODULE_0__["string"]().email(),
  password: zod__WEBPACK_IMPORTED_MODULE_0__["string"]()
});
const ForgotPassword = zod__WEBPACK_IMPORTED_MODULE_0__["object"]({
  email: zod__WEBPACK_IMPORTED_MODULE_0__["string"]().email()
});
const ResetPassword = zod__WEBPACK_IMPORTED_MODULE_0__["object"]({
  password: password,
  passwordConfirmation: password,
  token: zod__WEBPACK_IMPORTED_MODULE_0__["string"]()
}).refine(data => data.password === data.passwordConfirmation, {
  message: "Passwords don't match",
  path: ["passwordConfirmation"] // set the path of the error

});
const ChangePassword = zod__WEBPACK_IMPORTED_MODULE_0__["object"]({
  currentPassword: zod__WEBPACK_IMPORTED_MODULE_0__["string"](),
  newPassword: password
});

/***/ })

/******/ });