import { useCallback, useMemo, useState, useEffect } from "react";
import type { DragEvent } from "react";

import { decodeSave, encodeSave, downloadFile } from "../services/decryptor";

export function useSaveFile() {
  const [fileName, setFileName] = useState("");
  const [decrypted, setDecrypted] = useState(false);
  const [jsonText, setJsonText] = useState("");

  const parsedJson = useMemo(() => {
    if (!jsonText) return null;
    try {
      return JSON.parse(jsonText);
    } catch {
      return null;
    }
  }, [jsonText]);

  // ==================== 开发模式自动加载文件 - 开始 ====================
  useEffect(() => {
    const isDev = import.meta.env.DEV;
    if (isDev && !fileName) {
      // 自动加载项目根目录下的 user1.dat
      fetch('/user1.dat')
        .then(response => {
          if (!response.ok) {
            console.warn('[开发模式] 未找到 user1.dat 文件，请确保文件在 public 目录下');
            return null;
          }
          return response.arrayBuffer();
        })
        .then(buffer => {
          if (!buffer) return;
          try {
            const data = new Uint8Array(buffer);
            const json = decodeSave(data);
            const pretty = JSON.stringify(JSON.parse(json), null, 2);
            setJsonText(pretty);
            setDecrypted(true);
            setFileName('user1.dat');
            console.log('[开发模式] ✅ 已自动加载 user1.dat');
          } catch (error) {
            console.error('[开发模式] 加载 user1.dat 失败:', error);
          }
        })
        .catch(error => {
          console.error('[开发模式] 读取 user1.dat 失败:', error);
        });
    }
  }, [fileName]);
  // ==================== 开发模式自动加载文件 - 结束 ====================

  const handleFile = useCallback((file: File) => {
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = e => {
      if (!e.target?.result) return;
      setDecrypted(false);
      setJsonText("");
      try {
        const data = new Uint8Array(e.target.result as ArrayBuffer);
        const json = decodeSave(data);
        const pretty = JSON.stringify(JSON.parse(json), null, 2);
        setJsonText(pretty);
        setDecrypted(true);
      } catch (error) {
        alert("Failed to decode file");
        console.error(error);
      }
    };
    reader.readAsArrayBuffer(file);
  }, []);

  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const saveEncrypted = useCallback(() => {
    const encoded = encodeSave(jsonText);
    downloadFile(encoded, fileName || "save.dat");
  }, [jsonText, fileName]);

  const savePlain = useCallback(() => {
    const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");
    downloadFile(jsonText, `${nameWithoutExtension || "save"}.json`);
  }, [jsonText, fileName]);

  return {
    fileName,
    decrypted,
    jsonText,
    setJsonText,
    parsedJson,
    handleFile,
    handleDrop,
    handleDragOver,
    saveEncrypted,
    savePlain,
  };
}
