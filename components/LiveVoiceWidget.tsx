
import React, { useState, useCallback } from 'react';
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';
import { DOCTOR_NAME } from '../constants.tsx';

const LiveVoiceWidget: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [session, setSession] = useState<any>(null);

  const decode = useCallback((base64: string) => {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }, []);

  const encode = useCallback((bytes: Uint8Array) => {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }, []);

  const startSession = async () => {
    if (isConnecting) return;
    setIsConnecting(true);
    
    const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
    const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    let nextStartTime = 0;

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            const source = inputCtx.createMediaStreamSource(stream);
            const processor = inputCtx.createScriptProcessor(4096, 1, 1);
            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                int16[i] = inputData[i] * 32768;
              }
              sessionPromise.then(s => s.sendRealtimeInput({
                media: { 
                  data: encode(new Uint8Array(int16.buffer)), 
                  mimeType: 'audio/pcm;rate=16000' 
                }
              }));
            };
            source.connect(processor);
            processor.connect(inputCtx.destination);
            setIsConnecting(false);
            setIsActive(true);
          },
          onmessage: async (msg: LiveServerMessage) => {
            const audioData = msg.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData) {
              const decodedBytes = decode(audioData);
              const dataInt16 = new Int16Array(decodedBytes.buffer);
              const buffer = outputCtx.createBuffer(1, dataInt16.length, 24000);
              const channel = buffer.getChannelData(0);
              for (let i = 0; i < dataInt16.length; i++) {
                channel[i] = dataInt16[i] / 32768.0;
              }
              const source = outputCtx.createBufferSource();
              source.buffer = buffer;
              source.connect(outputCtx.destination);
              nextStartTime = Math.max(nextStartTime, outputCtx.currentTime);
              source.start(nextStartTime);
              nextStartTime += buffer.duration;
            }
          },
          onclose: () => {
            setIsActive(false);
            setSession(null);
            stream.getTracks().forEach(track => track.stop());
          },
          onerror: (e) => {
            console.error("Live Voice Error:", e);
            setIsActive(false);
            setIsConnecting(false);
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Puck' } }
          },
          systemInstruction: `أنت المساعد الصوتي لعيادة ${DOCTOR_NAME}. تحدث بصوت ودود ومهني وساعد المرضى بلباقة.`
        }
      });

      const activeSession = await sessionPromise;
      setSession(activeSession);
    } catch (err) {
      console.error("Failed to start voice session:", err);
      setIsConnecting(false);
    }
  };

  const handleToggle = () => {
    if (isActive) {
      if (session) session.close();
    } else {
      startSession();
    }
  };

  return (
    <div className="fixed bottom-32 right-8 z-[2000]">
      <button
        onClick={handleToggle}
        disabled={isConnecting}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 ${isActive ? 'bg-red-500 animate-pulse shadow-red-500/40' : 'bg-medical-green shadow-medical-green/40'} ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isConnecting ? (
          <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : isActive ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        )}
      </button>
      {isActive && (
        <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white px-6 py-3 rounded-2xl shadow-xl border border-slate-100 whitespace-nowrap text-xs font-black text-medical-blue animate-fade-in flex items-center gap-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-green"></span>
          </span>
          المساعد الصوتي متصل... تفضل بالتحدث 🎙️
        </div>
      )}
    </div>
  );
};

export default LiveVoiceWidget;
