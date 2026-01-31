export type ChatMessage = { role: 'user' | 'model'; text: string };

export const getMedicalAdvice = async (
  history: { role: string; text: string }[],
  useSearch: boolean,
  useMaps: boolean
): Promise<{ text: string; grounding?: any[] }> => {
  const lastMsg = history[history.length - 1].text.toLowerCase();

  if (lastMsg.includes('حجز') || lastMsg.includes('موعد')) {
    return { text: 'يمكنك الحجز مباشرة من صفحة "احجز موعدك الآن" أو الاتصال على 01027470066.' };
  }

  if (lastMsg.includes('ساعات') || lastMsg.includes('مواعيد')) {
    return { text: 'عيادتنا مفتوحة من الساعة 4 مساءً حتى 10 مساءً، ما عدا الخميس والجمعة.' };
  }

  if (lastMsg.includes('فرع') || lastMsg.includes('عنوان')) {
    return { text: 'العنوان: ميدان محطة القطار، المنصورة.' };
  }

  return { text: 'عذراً، لم أفهم سؤالك. الرجاء إعادة صياغته أو التواصل معنا مباشرة.' };
};