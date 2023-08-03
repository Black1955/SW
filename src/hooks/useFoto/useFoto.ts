import { useEffect, useState, useMemo } from "react";

export const useFoto = (file: File | string | undefined) => {
  const [foto, setFoto] = useState<string | ArrayBuffer | null | undefined>();

  const reader = useMemo(() => new FileReader(), []);

  useEffect(() => {
    const handleLoad = (event: any) => {
      setFoto(event.target?.result);
    };

    if (file && file instanceof File) {
      reader.onload = handleLoad;
      reader.readAsDataURL(file);
    } else if (file) {
      setFoto(file);
    }

    return () => {
      reader.removeEventListener("load", handleLoad);
    };
  }, [file, reader]);

  return [foto];
};
