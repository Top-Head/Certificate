'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function FormModal() {
  const [isOpen, setIsOpen] = useState(true);

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
              <label className="block text-sm font-medium mb-1">Nome:</label>
              <input type="text" className="w-full border rounded-lg px-3 py-2" defaultValue="" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-mail:</label>
              <input type="email" className="w-full border rounded-lg px-3 py-2" defaultValue="" />
            </div>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-300 transition">
              Obter o certificado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
