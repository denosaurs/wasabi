//deno-fmt-ignore-file
import*as A from"https://deno.land/x/lz4@v0.1.2/mod.ts";export const source=A.decompress(Uint8Array.from(atob("8QsAYXNtAQAAAAEXBGACf38Bf2AEf39/fwBgAQQAgAF/AwwLAAECIwDyTwMAAwIEBQFwAQoKBQMBABEGCQF/AUGAgMAACwcQAgZtZW1vcnkCAANhZGQABQkPAQBBAQsJCgMICQoBBgcKCqoHC7cDAQV/IABBAnQhBSABKAIAIQIDQAJAIAJFDQAJAKEoAggiA0EBcUUEDQDxCABBfHEiBCACQQhqIgNrIAVJDQECQCADdQDAIABBkIDAACgCABEAUwCRakEIaiAEIAVrNAAgSwQoAGADcQ0DIAFKAJAIQXxxNgIAIAINAEEAQQFyDQCQIQAMAQsgBEEADgDSBEF4aiIAQgA3AgAgACcAATQAApgAMAAiAVkA8AYDRQ0AQQAgAyABQQJxGyIBRQ0AIAHMAPMABEEDcSAAcjYCBAsgACAAEQAQAhEAAnUAcghBfnE2AggNAABOAAEwACAiA3sAAE0AgARAIAIgA0F9cwACQgAgAEE/ABMAUAADtQCxCyAAQQhqIQYMAwswAAFVADECf0GyABQEowARGqQA8AIDLQAAQQFxGwshAyACEAIgAhAAAWoAMAMgA1IAA2AAIQEghgBgAyECDAELDwAArwBAIgI2Ah8B8AELIAYLfwEBfyMAQRBrIgMkWQAAvAEQIgUA8AQ2AgwgAkECaiICIAJsIgJBgBAgBQDQSxsiBCADQQxqEAQhAl8AMCgCDGIAUAIEfyACYgEBFAEhIAS3AQGFAIBBAAVBAQshAXoBADMBMAAgATEA0QNBEGokAAt9AQJ/AkAGAQKHAQAyAgDzAAE6AQ6HAQAIACB8cXwBAz0BEwQ3AACAAADeABMAJwAA4wEAfwAADACCBAUgAQtBA3F/AAEdAAANAGAAC2oAAn/mADB0IgFUAlB0QYCAAfIA8A8BIAJLG0GHgARqIgFBEHZAACICQX9GBEBBACEDQQFaAmICQRB0IgPxABADOAFVQYCAfHHzAFALIQIgAHwBAHEAAG8BRgtlAQJpAQDyAHAgARAAIgINCgEkCGr4AjMEQYz6AmABAEEAIQJgARAIJAAwKAIMmAABmQExCCABVAACRAAzIQILTQFBIAILBxUAgGoLBAAgAQsEiQBQBQBBgAQLAKEBCwMAAQsLTgEAbQBCC0UBAAEAAAgAEQIGBHMAAAQAAAAFCAAABADQBgAAAAcAAAAIAAAACS0AKwAAMADwbXsJcHJvZHVjZXJzAghsYW5ndWFnZQEEUnVzdAAMcHJvY2Vzc2VkLWJ5AwVydXN0Yx0xLjQ2LjAgKDA0NDg4YWZlMyAyMDIwLTA4LTI0KQZ3YWxydXMGMC4xOC4wDHdhc20tYmluZGdlbhIwLjIuNjcgKDdiYWRjZDNhZCk="),A=>A.charCodeAt(0)));let Q;export function add(A,t){return Q.add(A,t)}async function t(A,Q){if("function"==typeof Response&&A instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(A,Q)}catch(Q){if("application/wasm"==A.headers.get("Content-Type"))throw Q;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",Q)}const t=await A.arrayBuffer();return await WebAssembly.instantiate(t,Q)}{const t=await WebAssembly.instantiate(A,Q);return t instanceof WebAssembly.Instance?{instance:t,module:A}:t}}async function e(A){void 0===A&&(A=import.meta.url.replace(/\.js$/,"_bg.wasm"));("string"==typeof A||"function"==typeof Request&&A instanceof Request||"function"==typeof URL&&A instanceof URL)&&(A=fetch(A));const{instance:B,module:n}=await t(await A,{});return Q=B.exports,e.__wbindgen_wasm_module=n,Q}export default e;