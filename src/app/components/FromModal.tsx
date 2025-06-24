'use client';
import Image from 'next/image';
import { useState } from 'react';
import { enviarCertificado } from '../services/api';

export default function FormModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [categoria, setCategoria] = useState('1');
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState<'sucesso' | 'erro' | ''>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!nome || !email || !categoria) {
      setMensagem('Preencha todos os campos.');
      setTipoMensagem('erro');
      return;
    }

    setLoading(true);
    setMensagem('');
    setTipoMensagem('');

    try {
      const response = await enviarCertificado(nome, email, categoria);
      setMensagem(response.message || 'Certificado solicitado com sucesso!');
      setTipoMensagem('sucesso');
      setNome('');
      setEmail('');
    } catch (error: any) {
      setMensagem(error.message.includes('fetch') ? 'Erro de conexão com o servidor. Tente novamente.' : error.message);
      setTipoMensagem('erro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-xl relative text-black">
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-xl font-bold">&times;</button>

        <div className="flex items-center mb-6">
          <Image src="/i.png" alt="Hat" width={40} height={40} />
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2">
            <Image src="/im.png" alt="People confused" width={300} height={300} />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome completo:</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-mail:</label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Categoria:</label>
              <select
                className="w-full border rounded-lg px-3 py-2"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="1">Categoria 1</option>
                <option value="2">Categoria 2</option>
                <option value="3">Categoria 3</option>
              </select>
            </div>

            {mensagem && (
              <p className={`text-sm ${tipoMensagem === 'erro' ? 'text-red-500' : 'text-green-500'}`}>
                {mensagem}
              </p>
            )}

            <button
              onClick={handleSubmit}
              className={`w-full py-2 rounded-lg text-white transition ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-400'
              }`}
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Obter o certificado'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
