/**
 * A global key event generated by the key server
 */
 export type IGlobalKeyEvent = {
  vKey:number,
  key:{
    _nameRaw: string,
    name: string
  },
  state: "DOWN" | "UP",
  scanCode: number,
  _raw: string
}