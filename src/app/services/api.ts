// services/api.ts
const BASE_URL = 'https://pdf-generator-u4n8.onrender.com';

export async function enviarCertificado(name: string, email: string, category_id: string) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, category_id }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Erro ao enviar certificado');
    }

    return await response.json();
  } catch (err: any) {
    throw new Error(err.message || 'Erro inesperado');
  }
}
