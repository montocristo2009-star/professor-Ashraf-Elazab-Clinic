
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `أنت "مساعد د. أشرف العزب الذكي". الدكتور أشرف استشاري جراحة العظام والمناظير وحاصل على الدكتوراة من جامعة القاهرة والزمالة الأوروبية (EBOT).
معلومات عن خدمات العيادة:
1. متخصص في جراحات الركبة والمناظير والرباط الصليبي وإصلاح الغضروف الهلالي.
2. يستخدم تقنيات التدخل المحدود الحديثة لإصلاح وتر أكيلس بفتحة 2 سم.
3. يعالج خلع الكتف المتكرر (Bankart & Latarjet) وتوصيل أوتار الكتف بالمنظار.
4. يعالج الخشونة بالحقن الجيلاتيني والتردد الحراري وحقن البلازما (PRP).
5. خبير في علاج حالات عدم التئام الكسور والكسور المعقدة والمفاصل الصناعية.
الخلفية العلمية: دكتوراة جامعة القاهرة، ألمانيا، جنيف، كوريا، والبورد الأوروبي.
تعليمات الرد: تحدث بلغة مهنية محترمة (عامية مصرية مهذبة). لا تستخدم كلمة "سبيد بريدج" إطلاقاً. ممنوع كتابة أي أدوية. أكد دائماً على أهمية الكشف السريري.`;

export const getMedicalAdvice = async (history: ChatMessage[], useSearch = false, useMaps = false) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    let modelName = 'gemini-3-flash-preview';
    const tools: any[] = [];
    
    if (useSearch) tools.push({ googleSearch: {} });
    if (useMaps) {
      modelName = 'gemini-2.5-flash'; 
      tools.push({ googleMaps: {} });
    }

    const contents = history.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelName,
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: tools.length > 0 ? tools : undefined,
      }
    });

    return {
      text: response.text || "أهلاً بك، كيف يمكنني مساعدتك؟",
      grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("AI Error:", error);
    return { text: "نعتذر، هناك عطل مؤقت.. يرجى المحاولة لاحقاً.", grounding: [] };
  }
};

export const generateClinicIntroVideo = async (imageBuffer: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = "A professional, cinematic introductory video for Dr. Ashraf El Azab's orthopedic clinic, focusing on medical excellence and trust.";
    
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      image: {
        imageBytes: imageBuffer,
        mimeType: 'image/jpeg',
      },
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: '16:9'
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      const aiPolling = new GoogleGenAI({ apiKey: process.env.API_KEY });
      operation = await aiPolling.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    const fetchResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    const blob = await fetchResponse.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Intro Video Error:", error);
    throw error;
  }
};
