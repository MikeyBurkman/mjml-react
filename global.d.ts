declare module 'mjml' {
  type JsonToMjml = (obj: object) => { html: string; errors: any[] };
  const jsonToMjml: JsonToMjml;
  export default jsonToMjml;
}
