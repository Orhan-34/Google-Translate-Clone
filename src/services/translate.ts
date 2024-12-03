import type { FromLanguage, Language } from "../types";

export async function translate ({
  fromLanguage,
  toLanguage,
  text
} : {
  fromLanguage: FromLanguage,
  toLanguage: Language,
  text: string,
}) {
  if (fromLanguage === toLanguage) return text;
  if (text === '') return null;
      const res = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLanguage}|${toLanguage}`)
      const data = await res.json()
  // console.log(data)   
  return data.responseData.translatedText
}
