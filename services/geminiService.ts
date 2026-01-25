
import { GoogleGenAI } from "@google/genai";

export const getMedicalAdvice = async (condition: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `المريض يسأل: ${condition}`,
      config: {
        systemInstruction: `أنت المساعد الذكي للأستاذ الدكتور أشرف العزب، استشاري جراحة العظام الحاصل على دكتوراة قصر العيني والبورد الأوروبي وزمالات ألمانيا وسويسرا.
        مهمتك:
        1. الرد بالعامية المصرية الودودة والمحترمة.
        2. شرح المشكلة بشكل بسيط جداً.
        3. التأكيد على أن التشخيص النهائي يتطلب كشفاً سريرياً عند الدكتور أشرف.
        4. لا تصف أدوية أو جرعات أبداً.
        5. ركز على أن الدكتور لديه خبرة 20 سنة في أدق الجراحات.`,
        temperature: 0.7,
      }
    });
    return response.text || "يرجى مراجعة العيادة للحصول على تشخيص دقيق من الدكتور أشرف.";
  } catch (error) {
    console.error("AI Error:", error);
    return "المساعد الذكي مشغول حالياً، يرجى التواصل مع العيادة هاتفياً للحصول على أفضل توجيه.";
  }
};
