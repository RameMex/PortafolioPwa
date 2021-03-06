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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "3vow":
/***/ (function(module, exports) {

module.exports = require("@blitzjs/core/server");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JC/9");


/***/ }),

/***/ "JC/9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var app_auth_mutations_forgotPassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xVAp");
/* harmony import */ var _blitzjs_core_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3vow");
/* harmony import */ var _blitzjs_core_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_core_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
// This imports the output of getIsomorphicEnhancedResolver()



 // Ensure these files are not eliminated by trace-based tree-shaking (like Vercel)

path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve("next.config.js");
path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve("blitz.config.js");
path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(".next/blitz/db.js"); // End anti-tree-shaking

let db;
let connect;

try {
  var _db, _db2;

  db = __webpack_require__("+1QM").default;

  if (__webpack_require__("+1QM").connect) {
    connect = __webpack_require__("+1QM").connect;
  } else if ((_db = db) !== null && _db !== void 0 && _db.$connect || (_db2 = db) !== null && _db2 !== void 0 && _db2.connect) {
    connect = () => db.$connect ? db.$connect() : db.connect();
  } else {
    connect = () => {};
  }
} catch (_) {}

/* harmony default export */ __webpack_exports__["default"] = (Object(_blitzjs_core_server__WEBPACK_IMPORTED_MODULE_1__["rpcApiHandler"])(app_auth_mutations_forgotPassword__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], Object(_blitzjs_core_server__WEBPACK_IMPORTED_MODULE_1__["getAllMiddlewareForModule"])(app_auth_mutations_forgotPassword__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]), () => {
  var _connect;

  return db && ((_connect = connect) === null || _connect === void 0 ? void 0 : _connect());
}));
const config = {
  api: {
    externalResolver: true
  }
};

/***/ }),

/***/ "Rgaz":
/***/ (function(module, exports) {

module.exports = require("preview-email");

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

/***/ }),

/***/ "xVAp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// NAMESPACE OBJECT: ./app/_resolvers/auth/mutations/forgotPassword.ts
var forgotPassword_namespaceObject = {};
__webpack_require__.r(forgotPassword_namespaceObject);
__webpack_require__.d(forgotPassword_namespaceObject, "default", function() { return forgotPassword; });

// EXTERNAL MODULE: external "@blitzjs/core"
var core_ = __webpack_require__("jwnU");

// EXTERNAL MODULE: external "@blitzjs/core/server"
var server_ = __webpack_require__("3vow");

// EXTERNAL MODULE: ./db/index.ts
var db = __webpack_require__("+1QM");

// EXTERNAL MODULE: external "preview-email"
var external_preview_email_ = __webpack_require__("Rgaz");

// CONCATENATED MODULE: ./mailers/forgotPasswordMailer.ts
/* TODO - You need to add a mailer integration in `integrations/` and import here.
 *
 * The integration file can be very simple. Instantiate the email client
 * and then export it. That way you can import here and anywhere else
 * and use it straight away.
 */

function forgotPasswordMailer({
  to,
  token
}) {
  // In production, set APP_ORIGIN to your production server origin
  const origin = process.env.APP_ORIGIN || process.env.BLITZ_DEV_SERVER_ORIGIN;
  const resetUrl = `${origin}/reset-password?token=${token}`;
  const msg = {
    from: "TODO@example.com",
    to,
    subject: "Your Password Reset Instructions",
    html: `
      <h1>Reset Your Password</h1>
      <h3>NOTE: You must set up a production email integration in mailers/forgotPasswordMailer.ts</h3>

      <a href="${resetUrl}">
        Click here to set a new password
      </a>
    `
  };
  return {
    async send() {
      if (true) {
        // TODO - send the production email, like this:
        // await postmark.sendEmail(msg)
        throw new Error("No production email implementation in mailers/forgotPasswordMailer");
      } else {}
    }

  };
}
// EXTERNAL MODULE: ./app/auth/validations.ts
var validations = __webpack_require__("ptJ+");

// CONCATENATED MODULE: ./app/_resolvers/auth/mutations/forgotPassword.ts






const RESET_PASSWORD_TOKEN_EXPIRATION_IN_HOURS = 4;
/* harmony default export */ var forgotPassword = (server_["resolver"].pipe(server_["resolver"].zod(validations["b" /* ForgotPassword */]), async ({
  email
}) => {
  // 1. Get the user
  const user = await db["default"].user.findFirst({
    where: {
      email: email.toLowerCase()
    }
  }); // 2. Generate the token and expiration date.

  const token = Object(server_["generateToken"])();
  const hashedToken = Object(server_["hash256"])(token);
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + RESET_PASSWORD_TOKEN_EXPIRATION_IN_HOURS); // 3. If user with this email was found

  if (user) {
    // 4. Delete any existing password reset tokens
    await db["default"].token.deleteMany({
      where: {
        type: "RESET_PASSWORD",
        userId: user.id
      }
    }); // 5. Save this new token in the database.

    await db["default"].token.create({
      data: {
        user: {
          connect: {
            id: user.id
          }
        },
        type: "RESET_PASSWORD",
        expiresAt,
        hashedToken,
        sentTo: user.email
      }
    }); // 6. Send the email

    await forgotPasswordMailer({
      to: user.email,
      token
    }).send();
  } else {
    // 7. If no user found wait the same time so attackers can't tell the difference
    await new Promise(resolve => setTimeout(resolve, 750));
  } // 8. Return the same result whether a password reset email was sent or not


  return;
}));
// CONCATENATED MODULE: ./app/auth/mutations/forgotPassword.ts



/* harmony default export */ var mutations_forgotPassword = __webpack_exports__["a"] = (Object(core_["getIsomorphicEnhancedResolver"])(forgotPassword_namespaceObject, 'app/_resolvers/auth/mutations/forgotPassword', 'forgotPassword', 'mutation', undefined, {
  warmApiEndpoints: false
}));

/***/ })

/******/ });