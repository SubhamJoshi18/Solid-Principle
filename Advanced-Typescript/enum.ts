//Why you should use the typescript enums
//Alternative that you must used

enum LoginMode {
  email,
  social,
}

console.log(LoginMode.email); // 0
console.log(LoginMode.social); // 1

enum LoginModeVersion {
  email = 0,
  social = 1,
}

console.log(LoginModeVersion.email);
console.log(LoginModeVersion.social);

//Enum will not do a good type safety
//lookup and reverse lookup

console.log(LoginModeVersion["email"]); // 0
console.log(LoginModeVersion[1]); // social

//you will not get key of the enu
const keys = Object.keys(LoginModeVersion);

// it violate the dry principle

enum LoginModeShubham {
  social = "social",
  email = "email",
  oauth = "oauth",
}

const getAllKeys = Object.keys(LoginModeShubham);
// [ '' , '' ,'' ]

//Using the Enums it will ask for the enum as the parameter and cannot send as the string
function initalizeLoginMode(loginMode: LoginMode) {}

initalizeLoginMode(LoginMode.email);

type CleanLoginMode = "email" | "social" | "oauth";

function getInitalizeLoginMode(loginMode: CleanLoginMode) {}

getInitalizeLoginMode("email");


//Alternative way to create a good enum
export const ModifiedLoginMode = {
  device: "device",
  email: "email",
} as const;

export type LoginModeV2 = keyof typeof ModifiedLoginMode;


