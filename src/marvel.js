export const public_key = "005d15e1dd6514835d90b1904a541527";
export const private_key = "c832834f5c6dfd7a5d0f1355505a6686e31f2025";
export const hashValue = "f1e1cb1c6e2f6a40b545ac7dfe9f9045";

// ts - a timestamp (or other long string which can change on a request-by-request basis)
// hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)

// example
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
